import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactSectionComponent } from './contact-section.component';
import emailjs from '@emailjs/browser';

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    init: vi.fn(),
    send: vi.fn(),
  },
}));

// Mock environment
vi.mock('../../../environments/environment', () => ({
  environment: {
    emailjs: {
      publicKey: 'mock-public-key',
    },
  },
}));

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;

  beforeEach(() => {
    vi.clearAllMocks();
    component = new ContactSectionComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validateForm', () => {
    it('should return true for valid form data', () => {
      component.formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      };
      expect(component.validateForm()).toBe(true);
      expect(component.validationErrors).toEqual([]);
    });

    it('should return false and set errors for empty name', () => {
      component.formData = {
        name: '',
        email: 'john@example.com',
        message: 'Hello!',
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain('Name is required');
    });

    it('should return false and set errors for invalid email', () => {
      component.formData = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Hello!',
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain(
        'Please enter a valid email address'
      );
    });

    it('should return false and set errors for empty message', () => {
      component.formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain('Message is required');
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(component['isValidEmail']('test@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(component['isValidEmail']('invalid')).toBe(false);
      expect(component['isValidEmail']('')).toBe(false);
    });
  });

  describe('onSubmit', () => {
    it('should call sendNotification if form is valid', () => {
      const event = { preventDefault: vi.fn() } as any;
      component.formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      };
      const sendNotificationSpy = vi.spyOn(component, 'sendNotification');
      component.onSubmit(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(sendNotificationSpy).toHaveBeenCalled();
    });

    it('should add validation notification if form is invalid', () => {
      const event = { preventDefault: vi.fn() } as any;
      component.formData = { name: '', email: '', message: '' };
      const addNotificationSpy = vi.spyOn(component, 'addNotification');
      component.onSubmit(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(addNotificationSpy).toHaveBeenCalledWith(
        'Please fix the following errors',
        'validation',
        expect.any(Array)
      );
    });
  });

  describe('sendNotification', () => {
    it('should send email successfully and add success notification', async () => {
      const mockResponse = { status: 200 };
      (emailjs.send as any).mockResolvedValue(mockResponse);
      const addNotificationSpy = vi.spyOn(component, 'addNotification');
      const resetFormSpy = vi.spyOn(component, 'resetForm');

      component.formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      };

      await component.sendNotification();

      expect(emailjs.send).toHaveBeenCalledWith(
        'service_95ocjv8',
        'template_um9kxih',
        {
          from_name: 'John Doe',
          from_email: 'john@example.com',
          message: 'Hello!',
          to_name: 'Tonny',
        }
      );
      expect(addNotificationSpy).toHaveBeenCalledWith(
        "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        'success'
      );
      expect(resetFormSpy).toHaveBeenCalled();
      expect(component.isSubmitting).toBe(false);
    });

    it('should handle email send error and add error notification', async () => {
      (emailjs.send as any).mockRejectedValue(new Error('Send failed'));
      const addNotificationSpy = vi.spyOn(component, 'addNotification');

      await component.sendNotification();

      expect(addNotificationSpy).toHaveBeenCalledWith(
        'Sorry, there was an error sending your message. Please try again or contact me directly via email at zhaotonny315@gmail.com.',
        'error'
      );
      expect(component.isSubmitting).toBe(false);
    });
  });

  describe('resetForm', () => {
    it('should reset form data and validation state', () => {
      component.formData = {
        name: 'John',
        email: 'john@example.com',
        message: 'Test',
      };
      component.showValidationErrors = true;
      component.resetForm();
      expect(component.formData).toEqual({
        name: '',
        email: '',
        message: '',
      });
      expect(component.showValidationErrors).toBe(false);
    });
  });

  describe('addNotification', () => {
    it('should add a notification and update visible notifications', () => {
      const updateSpy = vi.spyOn(component, 'updateVisibleNotifications');
      component.addNotification('Test message', 'success');
      expect(component.notifications.length).toBe(1);
      expect(component.notifications[0].message).toBe('Test message');
      expect(component.notifications[0].type).toBe('success');
      expect(updateSpy).toHaveBeenCalled();
    });
  });

  describe('removeNotification', () => {
    it('should mark notification as fading and remove after timeout', async () => {
      vi.useFakeTimers();
      component.addNotification('Test', 'success');
      const id = component.notifications[0].id;
      component.removeNotification(id);
      expect(component.notifications[0].fading).toBe(true);
      vi.advanceTimersByTime(300);
      expect(component.notifications.length).toBe(0);
      vi.useRealTimers();
    });
  });

  describe('downloadResume', () => {
    it('should create and click a download link', () => {
      const createElementSpy = vi.spyOn(document, 'createElement');
      const appendChildSpy = vi.spyOn(document.body, 'appendChild');
      const removeChildSpy = vi.spyOn(document.body, 'removeChild');

      const mockLink = document.createElement('a');
      const clickSpy = vi.spyOn(mockLink, 'click');
      createElementSpy.mockReturnValue(mockLink);

      component.downloadResume();

      expect(createElementSpy).toHaveBeenCalledWith('a');
      expect(mockLink.href).toBe(
        'https://thelonelyotaku315.github.io/personal-website/assets/doc/Tonny-Zhao-Resume-CV.pdf'
      );
      expect(mockLink.download).toBe('Tonny-Zhao-Resume-CV.pdf');
      expect(mockLink.target).toBe('_blank');
      expect(appendChildSpy).toHaveBeenCalledWith(mockLink);
      expect(clickSpy).toHaveBeenCalled();
      expect(removeChildSpy).toHaveBeenCalledWith(mockLink);
    });
  });

  describe('visibleNotifications', () => {
    it('should return only visible notifications', () => {
      component.addNotification('Visible', 'success');
      component.addNotification('Hidden', 'error');
      component.notifications[1].visible = false;
      expect(component.visibleNotifications.length).toBe(1);
      expect(component.visibleNotifications[0].message).toBe('Visible');
    });
  });
});

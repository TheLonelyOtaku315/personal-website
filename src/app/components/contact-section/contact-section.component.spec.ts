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
        consent: true,
      };
      expect(component.validateForm()).toBe(true);
      expect(component.validationErrors).toEqual([]);
    });

    it('should return false and set errors for empty name', () => {
      component.formData = {
        name: '',
        email: 'john@example.com',
        message: 'Hello!',
        consent: true,
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain('CONTACT.VALIDATION.NAME_REQUIRED');
    });

    it('should return false and set errors for invalid email', () => {
      component.formData = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Hello!',
        consent: true,
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain(
        'CONTACT.VALIDATION.EMAIL_INVALID'
      );
    });

    it('should return false and set errors for empty message', () => {
      component.formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
        consent: true,
      };
      expect(component.validateForm()).toBe(false);
      expect(component.validationErrors).toContain('CONTACT.VALIDATION.MESSAGE_REQUIRED');
    });
  });

  it('should require consent to the privacy policy', () => {
    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello!',
      consent: false,
    };
    expect(component.validateForm()).toBe(false);
    expect(component.validationErrors).toEqual([
      'CONTACT.VALIDATION.CONSENT_REQUIRED',
    ]);
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
        consent: true,
      };
      const sendNotificationSpy = vi.spyOn(component, 'sendNotification');
      component.onSubmit(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(sendNotificationSpy).toHaveBeenCalled();
    });

    it('should show inline errors instead of a pop-up if form is invalid', () => {
      const event = { preventDefault: vi.fn() } as any;
      component.formData = { name: '', email: '', message: '', consent: false };
      const addNotificationSpy = vi.spyOn(component, 'addNotification');
      component.onSubmit(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.showValidationErrors).toBe(true);
      expect(addNotificationSpy).not.toHaveBeenCalled();
      expect(component.fieldError('name')).toBe('CONTACT.VALIDATION.NAME_REQUIRED');
      expect(component.fieldError('consent')).toBe('CONTACT.VALIDATION.CONSENT_REQUIRED');
    });
  });

  describe('fieldError', () => {
    it('shows nothing until the form has been submitted', () => {
      component.formData = { name: '', email: '', message: '', consent: false };
      expect(component.fieldError('name')).toBeNull();
    });

    it('flags a badly formed email and clears once it is fixed', () => {
      component.showValidationErrors = true;
      component.formData = { name: 'A', email: 'nope', message: 'Hi', consent: true };
      expect(component.fieldError('email')).toBe('CONTACT.VALIDATION.EMAIL_INVALID');
      component.formData.email = 'a@b.co';
      expect(component.fieldError('email')).toBeNull();
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
        consent: true,
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
        'CONTACT.NOTIFY.SUCCESS',
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
        'CONTACT.NOTIFY.ERROR',
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
        consent: true,
      };
      component.showValidationErrors = true;
      component.resetForm();
      expect(component.formData).toEqual({
        name: '',
        email: '',
        message: '',
        consent: false,
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

  describe('visibleNotifications', () => {
    it('should return only visible notifications', () => {
      component.addNotification('Visible', 'success');
      component.addNotification('Hidden', 'error');
      component.notifications[1].visible = false;
      expect(component.visibleNotifications.length).toBe(1);
      expect(component.visibleNotifications[0].message).toBe('Visible');
    });
  });

  describe('copyEmail', () => {
    it('copies the address and shows a confirmation briefly', async () => {
      vi.useFakeTimers();
      const writeText = vi.fn().mockResolvedValue(undefined);
      vi.stubGlobal('navigator', { clipboard: { writeText } });

      await component.copyEmail();
      expect(writeText).toHaveBeenCalledWith('zhaotonny315@gmail.com');
      expect(component.emailCopied).toBe(true);

      vi.advanceTimersByTime(2000);
      expect(component.emailCopied).toBe(false);

      vi.unstubAllGlobals();
      vi.useRealTimers();
    });
  });
});

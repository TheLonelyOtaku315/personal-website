import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyLinkComponent } from '../privacy-policy/privacy-policy-link.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    PrivacyPolicyLinkComponent,
    RevealDirective,
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  readonly email = 'zhaotonny315@gmail.com';
  emailCopied = false;
  private copiedTimer?: ReturnType<typeof setTimeout>;

  formData = {
    name: '',
    email: '',
    message: '',
    // Québec Law 25: explicit consent before collecting personal information
    consent: false,
  };

  // Messages and errors are translation keys, translated in the template
  validationErrors: string[] = [];
  showValidationErrors = false;
  isSubmitting = false;

  // Notification array system
  public notifications: Array<{
    id: number;
    message: string;
    type: 'success' | 'error' | 'validation';
    validationErrors?: string[];
    fading?: boolean;
    visible?: boolean; // Track if notification is currently visible
  }> = [];
  private notificationIdCounter = 0;
  private readonly MAX_VISIBLE_NOTIFICATIONS = 5;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailjs.publicKey);
  }

  // EmailJS service and template IDs (not sensitive, can be hardcoded)
  private readonly EMAILJS_SERVICE_ID = 'service_95ocjv8';
  private readonly EMAILJS_TEMPLATE_ID = 'template_um9kxih';

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
    } catch {
      // Clipboard API blocked: fall back to the older copy command
      if (!this.copyWithSelection()) return;
    }
    this.emailCopied = true;
    clearTimeout(this.copiedTimer);
    this.copiedTimer = setTimeout(() => (this.emailCopied = false), 2000);
  }

  private copyWithSelection(): boolean {
    const field = document.createElement('textarea');
    field.value = this.email;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  }

  validateForm(): boolean {
    this.validationErrors = [];

    if (!this.formData.name.trim()) {
      this.validationErrors.push('CONTACT.VALIDATION.NAME_REQUIRED');
    }

    if (!this.formData.email.trim()) {
      this.validationErrors.push('CONTACT.VALIDATION.EMAIL_REQUIRED');
    } else if (!this.isValidEmail(this.formData.email)) {
      this.validationErrors.push('CONTACT.VALIDATION.EMAIL_INVALID');
    }

    if (!this.formData.message.trim()) {
      this.validationErrors.push('CONTACT.VALIDATION.MESSAGE_REQUIRED');
    }

    if (!this.formData.consent) {
      this.validationErrors.push('CONTACT.VALIDATION.CONSENT_REQUIRED');
    }

    return this.validationErrors.length === 0;
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.validateForm()) {
      // All fields are valid, proceed with sending notification
      this.showValidationErrors = false;
      this.sendNotification();
    } else {
      // Show validation errors as notification
      this.showValidationErrors = true;
      this.addNotification(
        'CONTACT.VALIDATION.TITLE',
        'validation',
        this.validationErrors
      );
    }
  }

  async sendNotification() {
    this.isSubmitting = true;

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_name: 'Tonny',
      };

      // Send email using EmailJS
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams
      );

      this.addNotification('CONTACT.NOTIFY.SUCCESS', 'success');
      this.resetForm();
    } catch (error) {
      console.error('Error sending notification:', error);
      this.addNotification('CONTACT.NOTIFY.ERROR', 'error');
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      consent: false,
    };
    this.showValidationErrors = false;
  }

  addNotification(
    message: string,
    type: 'success' | 'error' | 'validation',
    validationErrors?: string[]
  ) {
    const id = this.notificationIdCounter++;
    const notification = {
      id,
      message,
      type,
      validationErrors,
      visible: false, // Start as not visible
    };

    this.notifications.push(notification);

    // Show notifications up to the max visible limit
    this.updateVisibleNotifications();
  }

  updateVisibleNotifications() {
    const visibleCount = this.notifications.filter((n) => n.visible).length;

    // If we have room for more visible notifications, show them
    if (visibleCount < this.MAX_VISIBLE_NOTIFICATIONS) {
      const hiddenNotifications = this.notifications.filter(
        (n) => !n.visible && !n.fading
      );
      const slotsAvailable = this.MAX_VISIBLE_NOTIFICATIONS - visibleCount;

      // Make the next notifications visible
      hiddenNotifications.slice(0, slotsAvailable).forEach((notification) => {
        notification.visible = true;

        // Start the auto-remove timer only when notification becomes visible
        setTimeout(() => {
          this.removeNotification(notification.id);
        }, 5000);
      });
    }
  }

  removeNotification(id: number) {
    // Find the notification and mark it as fading
    const notification = this.notifications.find((n) => n.id === id);
    if (notification) {
      notification.fading = true;

      // Wait for fade animation to complete before removing
      setTimeout(() => {
        this.notifications = this.notifications.filter((n) => n.id !== id);

        // After removing, check if we can show more notifications
        this.updateVisibleNotifications();
      }, 300); // Match animation duration
    }
  }

  get visibleNotifications() {
    return this.notifications.filter((n) => n.visible);
  }
}

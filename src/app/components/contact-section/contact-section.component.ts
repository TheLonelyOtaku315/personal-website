import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  formData = {
    name: '',
    message: '',
  };

  validationErrors: string[] = [];
  showValidationErrors = false;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailjs.publicKey);
  }

  downloadResume() {
    // Use the full GitHub Pages URL for reliable download
    const link = document.createElement('a');
    link.href =
      'https://thelonelyotaku315.github.io/personal-website/assets/doc/Tonny-Zhao-Resume-CV.pdf';
    link.download = 'Tonny-Zhao-Resume-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  validateForm(): boolean {
    this.validationErrors = [];

    if (!this.formData.name.trim()) {
      this.validationErrors.push('Name is required');
    }

    if (!this.formData.message.trim()) {
      this.validationErrors.push('Message is required');
    }

    return this.validationErrors.length === 0;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.validateForm()) {
      // All fields are valid, proceed with sending notification
      this.showValidationErrors = false;
      this.sendNotification();
    } else {
      // Show validation errors
      this.showValidationErrors = true;
    }
  }

  async sendNotification() {
    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: this.formData.name,
        message: this.formData.message,
        to_name: 'Tonny',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);

      this.submitSuccess = true;
      this.submitMessage =
        "Thank you! Your message has been sent successfully. I'll get back to you soon.";
      this.resetForm();
    } catch (error) {
      console.error('Error sending notification:', error);
      this.submitSuccess = false;
      this.submitMessage =
        'Sorry, there was an error sending your message. Please try again or contact me directly via email at zhaotonny315@gmail.com.';
    } finally {
      this.isSubmitting = false;

      // Clear the message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      message: '',
    };
    this.showValidationErrors = false;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule, CommonModule, HttpClientModule],
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

  constructor(private http: HttpClient) {}

  downloadResume() {
    // Open PDF in new tab first
    window.open('/assets/doc/Tonny-Zhao-CV-Resume.pdf', '_blank');
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
      // Using Formspree - a free form backend service
      // You can sign up at https://formspree.io and get a form endpoint
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('message', this.formData.message);
      formData.append('_subject', `Contact from ${this.formData.name}`);

      const response = await this.http
        .post(formspreeEndpoint, formData)
        .toPromise();

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

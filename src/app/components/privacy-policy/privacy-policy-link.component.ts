import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyPolicyDialogComponent } from './privacy-policy-dialog.component';

@Component({
  selector: 'app-privacy-policy-link',
  standalone: true,
  template: `<button type="button" class="privacy-link" (click)="open()">
    {{ label }}
  </button>`,
  styles: `
    .privacy-link {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--link-color);
      text-decoration: underline;
      cursor: pointer;
    }
    .privacy-link:hover,
    .privacy-link:focus-visible {
      color: var(--accent-color);
    }
  `,
})
export class PrivacyPolicyLinkComponent {
  @Input() label = '';

  constructor(private dialog: MatDialog) {}

  open(): void {
    this.dialog.open(PrivacyPolicyDialogComponent, {
      width: '90%',
      maxWidth: '720px',
      maxHeight: '90vh',
      autoFocus: 'dialog',
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

// Privacy policy required by Québec's Law 25 for sites collecting personal
// information (the contact form). Text lives in assets/i18n/{en,fr}.json.
@Component({
  selector: 'app-privacy-policy-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, TranslateModule],
  template: `
    <h2 mat-dialog-title>{{ 'PRIVACY.TITLE' | translate }}</h2>
    <mat-dialog-content>
      <p class="updated">{{ 'PRIVACY.UPDATED' | translate }}</p>
      <section *ngFor="let section of 'PRIVACY.SECTIONS' | translate">
        <h3>{{ section.HEADING }}</h3>
        <p>{{ section.BODY }}</p>
      </section>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button type="button" class="close-btn" mat-dialog-close>
        {{ 'COMMON.CLOSE' | translate }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .updated {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
    h3 {
      color: var(--accent-color);
      font-size: 1.05em;
      margin: 1.2em 0 0.3em;
    }
    p {
      color: var(--text-color);
      line-height: 1.5;
      margin: 0;
    }
    .close-btn {
      background: transparent;
      padding: 5px 15px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid var(--accent-color);
      border-radius: 25px;
      color: var(--accent-color);
    }
  `,
})
export class PrivacyPolicyDialogComponent {}

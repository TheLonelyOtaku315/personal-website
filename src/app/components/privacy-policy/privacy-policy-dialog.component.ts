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
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--muted);
    }
    h3 {
      color: var(--ink);
      font-size: 1rem;
      font-weight: 600;
      margin: 1.4em 0 0.3em;
    }
    p {
      color: var(--text);
      line-height: 1.65;
      margin: 0;
    }
    .close-btn {
      min-height: 40px;
      padding: 0 16px;
      border: 1px solid var(--line-strong);
      border-radius: var(--radius);
      background: transparent;
      color: var(--ink);
      font: 500 0.9rem/1 var(--font-sans);
      cursor: pointer;
    }
    .close-btn:hover {
      border-color: var(--ink);
    }
  `,
})
export class PrivacyPolicyDialogComponent {}

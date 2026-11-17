import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RevealDirective } from '../../directives/reveal.directive';
import { openCvDialog } from '../cv-dialog/cv-dialog.component';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule, RevealDirective],
})
export class WelcomeSectionComponent implements OnInit, OnDestroy {
  // Split into letters so each one can react on hover
  readonly nameWords = ['Tonny', 'Zhao'].map((word) => word.split(''));

  localTime = '';
  private clock?: ReturnType<typeof setInterval>;
  private langSub?: Subscription;

  constructor(
    private dialog?: MatDialog,
    private translate?: TranslateService,
  ) {}

  ngOnInit(): void {
    this.updateTime();
    this.clock = setInterval(() => this.updateTime(), 15_000);
    this.langSub = this.translate?.onLangChange.subscribe(() =>
      this.updateTime(),
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.clock);
    this.langSub?.unsubscribe();
  }

  // Current time in Montréal, e.g. "5:42 p.m." or "17 h 42"
  updateTime(now: Date = new Date()): void {
    const lang = this.translate?.currentLang === 'fr' ? 'fr-CA' : 'en-CA';
    this.localTime = new Intl.DateTimeFormat(lang, {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Toronto',
    }).format(now);
  }

  openCv(): void {
    if (!this.dialog) return;
    openCvDialog(this.dialog, this.translate?.currentLang || 'en');
  }
}

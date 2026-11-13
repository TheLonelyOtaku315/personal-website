import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TimelineEvent } from '@models/shared-interfaces';
import { LocalizedDatePipe } from '../../../pipes/localized-date.pipe';
import { hasDay, isSingleDate } from '@utils/date';

@Component({
  selector: 'app-timeline-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, TranslateModule, LocalizedDatePipe],
  templateUrl: './timeline-dialog.component.html',
  // Shares the project dialog look so both pop-ups match
  styleUrls: [
    '../../projects-section/project-dialog/project-dialog.component.css',
    './timeline-dialog.component.css',
  ],
})
export class TimelineDialogComponent {
  readonly singleDate: boolean;
  // "November 11, 2026" / "11 novembre 2026" for a specific day
  readonly singleDateFormat: string;

  constructor(
    public dialogRef: MatDialogRef<TimelineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TimelineEvent,
  ) {
    this.singleDate = isSingleDate(data.startDate, data.endDate);
    this.singleDateFormat = hasDay(data.startDate) ? 'longDate' : 'MMMM yyyy';
  }

  close(): void {
    this.dialogRef.close();
  }
}

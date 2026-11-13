import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { parseLocalDate } from '@utils/date';

/**
 * Formats a date using the active ngx-translate language so month names
 * follow the selected language (e.g. "décembre 2025" in French).
 * Impure so it re-renders when the language changes.
 */
@Pipe({ name: 'localizedDate', standalone: true, pure: false })
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: unknown, format = 'MMMM yyyy'): string {
    const date = parseLocalDate(value);
    // Free-form values like "2017 – 2019" are shown as written
    if (!date) return typeof value === 'string' ? value : '';
    const lang = this.translate.currentLang === 'fr' ? 'fr' : 'en';
    return formatDate(date, format, lang);
  }
}

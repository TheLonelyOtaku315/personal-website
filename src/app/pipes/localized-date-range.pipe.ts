import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { formatDayRange } from '@utils/date';

/**
 * Formats a start and end day as one range in the active ngx-translate
 * language, e.g. "Nov 14 – 15, 2026" or "14–15 nov. 2026".
 * Impure so it re-renders when the language changes.
 */
@Pipe({ name: 'localizedDateRange', standalone: true, pure: false })
export class LocalizedDateRangePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(
    start: unknown,
    end: unknown,
    style: 'medium' | 'long' = 'medium',
  ): string {
    const lang = this.translate.currentLang === 'fr' ? 'fr' : 'en';
    return formatDayRange(start, end, lang, style);
  }
}

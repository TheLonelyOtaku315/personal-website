import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitle();
      this.updateLang();
      this.updateDescription();
    });
  }

  init() {
    this.updateTitle();
    this.updateLang();
    this.updateDescription();
  }

  updateTitle() {
    this.translate.get('META.TITLE').subscribe(title => {
      this.title.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
    });
  }

  updateLang() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.documentElement.lang = this.translate.currentLang;
    }
    const isFrench = this.translate.currentLang === 'fr';
    this.meta.updateTag({ property: 'og:locale', content: isFrench ? 'fr_CA' : 'en_CA' });
    this.meta.updateTag({
      property: 'og:locale:alternate',
      content: isFrench ? 'en_CA' : 'fr_CA',
    });
  }

  updateDescription() {
    this.translate.get('META.DESCRIPTION').subscribe(desc => {
      if (desc) {
        this.meta.updateTag({ name: 'description', content: desc });
        this.meta.updateTag({ property: 'og:description', content: desc });
      }
    });
  }
}

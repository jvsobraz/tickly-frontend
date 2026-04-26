import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<'pt' | 'en'>('pt');

  constructor(private translate: TranslateService) {
    const saved = (localStorage.getItem('lang') ?? 'pt') as 'pt' | 'en';
    this.lang.set(saved);
    translate.setDefaultLang('pt');
    translate.use(saved);
  }

  toggle(): void {
    const next = this.lang() === 'pt' ? 'en' : 'pt';
    this.lang.set(next);
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }
}

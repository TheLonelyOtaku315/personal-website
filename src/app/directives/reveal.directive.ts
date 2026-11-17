import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

// Fades an element up into place the first time it scrolls into view.
// Content stays visible if IntersectionObserver is missing or the visitor
// prefers reduced motion.
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  // Delay in ms, used to stagger items in a list
  @Input() revealDelay = 0;

  private static observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  private static getObserver(): IntersectionObserver {
    if (!RevealDirective.observer) {
      RevealDirective.observer = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
      );
    }
    return RevealDirective.observer;
  }

  ngAfterViewInit(): void {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.revealDelay) {
      node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }
    RevealDirective.getObserver().observe(node);
  }

  ngOnDestroy(): void {
    RevealDirective.observer?.unobserve(this.el.nativeElement);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// Image gallery for the project dialog. Slides advance on their own every
// few seconds, pause while the gallery is hovered or focused (or the tab is
// hidden), and stay put for visitors who prefer reduced motion. Arrows, dots,
// arrow keys and swipes move between images. Images that fail to load are
// dropped; `empty` fires when none are left.
@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css',
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  @Input() set images(value: string[] | null | undefined) {
    this.slides = (value || []).filter((src) => !!src && !!src.trim());
    this.index = 0;
    this.restart();
  }
  // Project title, used in the labels and alt text
  @Input() title = '';
  // Time each image stays before the next one slides in
  @Input() interval = 4500;
  @Output() empty = new EventEmitter<void>();

  slides: string[] = [];
  index = 0;
  readonly loaded = new Set<string>();

  private timer: ReturnType<typeof setInterval> | null = null;
  private hovered = false;
  private focused = false;
  private pageHidden = false;
  private started = false;
  private swipeStartX: number | null = null;
  private readonly reducedMotion: boolean;
  private removeVisibilityListener?: () => void;

  constructor(private zone: NgZone) {
    this.reducedMotion =
      typeof window !== 'undefined' &&
      !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }

  ngOnInit(): void {
    this.started = true;
    if (typeof document !== 'undefined') {
      const onVisibility = () => {
        this.pageHidden = document.visibilityState === 'hidden';
        this.restart();
      };
      document.addEventListener('visibilitychange', onVisibility);
      this.removeVisibilityListener = () =>
        document.removeEventListener('visibilitychange', onVisibility);
    }
    this.restart();
  }

  ngOnDestroy(): void {
    this.started = false;
    this.stop();
    this.removeVisibilityListener?.();
  }

  get hasMany(): boolean {
    return this.slides.length > 1;
  }

  // True while the slides are advancing on their own
  get playing(): boolean {
    return this.timer !== null;
  }

  next(): void {
    this.goTo(this.index + 1);
  }

  prev(): void {
    this.goTo(this.index - 1);
  }

  // Wraps around at both ends. A visitor's choice restarts the countdown
  // so the image they picked stays for a full interval.
  goTo(i: number, fromVisitor = true): void {
    const count = this.slides.length;
    if (!count) return;
    this.index = ((i % count) + count) % count;
    if (fromVisitor) this.restart();
  }

  onLoad(src: string): void {
    this.loaded.add(src);
  }

  onError(src: string): void {
    const at = this.slides.indexOf(src);
    if (at < 0) return;
    this.slides = this.slides.filter((s) => s !== src);
    if (at < this.index || this.index >= this.slides.length) {
      this.index = Math.max(0, this.index - 1);
    }
    if (!this.slides.length) this.empty.emit();
    this.restart();
  }

  setHovered(hovered: boolean): void {
    this.hovered = hovered;
    this.restart();
  }

  onFocusIn(): void {
    this.focused = true;
    this.restart();
  }

  onFocusOut(event: FocusEvent): void {
    const host = event.currentTarget as HTMLElement | null;
    const next = event.relatedTarget as Node | null;
    if (host && next && host.contains(next)) return;
    this.focused = false;
    this.restart();
  }

  // Touch swipes only; mouse users have the arrows
  onPointerDown(event: PointerEvent): void {
    this.swipeStartX = event.pointerType === 'mouse' ? null : event.clientX;
  }

  onPointerUp(event: PointerEvent): void {
    if (this.swipeStartX === null) return;
    const dx = event.clientX - this.swipeStartX;
    this.swipeStartX = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) this.next();
    else this.prev();
  }

  private restart(): void {
    this.stop();
    if (
      !this.started ||
      !this.hasMany ||
      this.reducedMotion ||
      this.hovered ||
      this.focused ||
      this.pageHidden
    ) {
      return;
    }
    // Tick outside Angular so an open dialog doesn't keep the app busy
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(
        () => this.zone.run(() => this.goTo(this.index + 1, false)),
        this.interval,
      );
    });
  }

  private stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

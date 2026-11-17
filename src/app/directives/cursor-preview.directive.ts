import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Shows an image that follows the mouse while hovering the host element.
// One floating preview is shared by every host. Mouse/trackpad only.
@Directive({
  selector: '[appCursorPreview]',
  standalone: true,
})
export class CursorPreviewDirective implements AfterViewInit, OnDestroy {
  @Input('appCursorPreview') src: string | null = null;

  private static box?: HTMLDivElement;
  private static img?: HTMLImageElement;
  private static x = 0;
  private static y = 0;
  private static targetX = 0;
  private static targetY = 0;
  private static frame = 0;
  private static activeHost: HTMLElement | null = null;

  private cleanup: Array<() => void> = [];

  constructor(
    private host: ElementRef<HTMLElement>,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit(): void {
    if (
      typeof window === 'undefined' ||
      !window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    ) {
      return;
    }
    const node = this.host.nativeElement;
    // Mouse moves fire constantly; keep them out of change detection
    this.zone.runOutsideAngular(() => {
      const enter = (e: PointerEvent) => this.show(e);
      const move = (e: PointerEvent) => CursorPreviewDirective.follow(e);
      const leave = () => this.hide();
      node.addEventListener('pointerenter', enter);
      node.addEventListener('pointermove', move);
      node.addEventListener('pointerleave', leave);
      this.cleanup.push(
        () => node.removeEventListener('pointerenter', enter),
        () => node.removeEventListener('pointermove', move),
        () => node.removeEventListener('pointerleave', leave),
      );
    });
  }

  ngOnDestroy(): void {
    this.cleanup.forEach((fn) => fn());
    if (CursorPreviewDirective.activeHost === this.host.nativeElement) {
      this.hide();
    }
  }

  private ensureBox(): void {
    if (CursorPreviewDirective.box) return;
    const box = this.document.createElement('div');
    box.className = 'cursor-preview';
    box.setAttribute('aria-hidden', 'true');
    const img = this.document.createElement('img');
    img.alt = '';
    img.decoding = 'async';
    box.appendChild(img);
    this.document.body.appendChild(box);
    CursorPreviewDirective.box = box;
    CursorPreviewDirective.img = img;
  }

  private show(e: PointerEvent): void {
    if (!this.src) return;
    this.ensureBox();
    const box = CursorPreviewDirective.box!;
    const img = CursorPreviewDirective.img!;
    CursorPreviewDirective.activeHost = this.host.nativeElement;

    // Start at the pointer so it doesn't fly in from the last position
    CursorPreviewDirective.x = CursorPreviewDirective.targetX = e.clientX;
    CursorPreviewDirective.y = CursorPreviewDirective.targetY = e.clientY;
    CursorPreviewDirective.tick();

    const src = this.src;
    const reveal = () => {
      if (CursorPreviewDirective.activeHost === this.host.nativeElement) {
        box.classList.add('is-visible');
      }
    };
    if (img.getAttribute('src') !== src) {
      box.classList.remove('is-visible');
      img.onload = reveal;
      img.src = src;
      if (img.complete) reveal();
    } else {
      reveal();
    }
  }

  private hide(): void {
    CursorPreviewDirective.activeHost = null;
    CursorPreviewDirective.box?.classList.remove('is-visible');
  }

  private static follow(e: PointerEvent): void {
    CursorPreviewDirective.targetX = e.clientX;
    CursorPreviewDirective.targetY = e.clientY;
    if (!CursorPreviewDirective.frame) {
      CursorPreviewDirective.frame = requestAnimationFrame(
        CursorPreviewDirective.tick,
      );
    }
  }

  // Eases the preview toward the pointer for a soft trailing motion
  private static tick = (): void => {
    const self = CursorPreviewDirective;
    self.frame = 0;
    self.x += (self.targetX - self.x) * 0.18;
    self.y += (self.targetY - self.y) * 0.18;
    const tilt = Math.max(-6, Math.min(6, (self.targetX - self.x) * 0.08));
    if (self.box) {
      self.box.style.transform = `translate3d(${self.x + 24}px, ${self.y - 90}px, 0) rotate(${tilt}deg)`;
    }
    if (
      Math.abs(self.targetX - self.x) > 0.5 ||
      Math.abs(self.targetY - self.y) > 0.5
    ) {
      self.frame = requestAnimationFrame(self.tick);
    }
  };
}

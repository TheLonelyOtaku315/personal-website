import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutMeSectionComponent implements AfterViewInit, OnDestroy {
  slideIndex = 0; // Start at 0 for better array indexing
  private autoSlideTimeout: any;
  private isBrowser = false;

  @ViewChild('carouselContainer', { static: false })
  carouselContainer!: ElementRef;

  @ViewChild('carouselTrack', { static: false })
  carouselTrack!: ElementRef;

  slideshowContent = [
    {
      numbertext: '1 / 3',
      title: 'About Me',
      date: '2025',
      description:
        'I am Tonny Zhao, a passionate student at Concordia University, eager to learn and grow in the field of technology.',
      tech: 'Personal • Student',
      text: 'About Me',
    },
    {
      numbertext: '2 / 3',
      title: 'Skills',
      date: '',
      description:
        'Proficient in HTML, CSS, JavaScript, and Angular. Experienced with web development and UI design.',
      tech: 'Web Development • UI/UX',
      text: 'Skills',
    },
    {
      numbertext: '3 / 3',
      title: 'Interests',
      date: '2025',
      description:
        'Interested in coding, gaming, and exploring new technologies. Enjoys collaborating on creative projects.',
      tech: 'Technology • Gaming',
      text: 'Interests',
    },
  ];

  ngAfterViewInit() {
    // Check if we're in browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.isBrowser = true;
      // Wait for DOM to be fully rendered
      setTimeout(() => {
        this.initializeCarousel();
        this.startAutoSlide();
      }, 200);
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // Initialize carousel
  private initializeCarousel(): void {
    if (!this.isBrowser || !this.carouselTrack) return;

    console.log('Initializing carousel...');
    console.log('Current slide index:', this.slideIndex);

    // Set initial position to first slide
    this.slideIndex = 0;
    this.updateCarouselPosition();
  }

  // Go to specific slide (called from template)
  currentSlide(slideNumber: number): void {
    if (slideNumber < 1 || slideNumber > this.slideshowContent.length) return;

    console.log('Going to slide:', slideNumber);

    this.slideIndex = slideNumber - 1; // Convert to 0-based index
    this.updateCarouselPosition();
    this.restartAutoSlide();
  }

  // Next slide
  nextSlide(): void {
    console.log('Next slide - Current index:', this.slideIndex);

    this.slideIndex++;
    if (this.slideIndex >= this.slideshowContent.length) {
      this.slideIndex = 0;
    }

    console.log('Next slide - New index:', this.slideIndex);

    this.updateCarouselPosition();
    this.restartAutoSlide();
  }

  // Previous slide
  prevSlide(): void {
    console.log('Previous slide - Current index:', this.slideIndex);

    this.slideIndex--;
    if (this.slideIndex < 0) {
      this.slideIndex = this.slideshowContent.length - 1;
    }

    console.log('Previous slide - New index:', this.slideIndex);

    this.updateCarouselPosition();
    this.restartAutoSlide();
  }

  // Update carousel position based on current slide index
  private updateCarouselPosition(): void {
    if (!this.isBrowser || !this.carouselTrack) return;

    const track = this.carouselTrack.nativeElement;
    const translateX = -this.slideIndex * 100;

    console.log('Updating position - Slide Index:', this.slideIndex, 'TranslateX:', translateX);

    track.style.transform = `translateX(${translateX}%)`;

    // Force a repaint to ensure the transform is applied
    track.offsetHeight;
  }

  // Auto slide functionality
  private startAutoSlide(): void {
    this.stopAutoSlide(); // Clear any existing timeout
    this.autoSlideTimeout = setTimeout(() => {
      this.nextSlide();
    }, 6000); // Change slide every 6 seconds
  }

  private stopAutoSlide(): void {
    if (this.autoSlideTimeout) {
      clearTimeout(this.autoSlideTimeout);
      this.autoSlideTimeout = null;
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  // Utility method to check if slide is active (for template)
  isSlideActive(index: number): boolean {
    return index === this.slideIndex;
  }
}

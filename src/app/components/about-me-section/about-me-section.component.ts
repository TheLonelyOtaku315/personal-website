import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Flickity
declare var Flickity: any;

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AboutMeSectionComponent implements AfterViewInit, OnDestroy {
  private flickity: any;
  private isBrowser = false;

  @ViewChild('flickityGallery', { static: false })
  flickityGallery!: ElementRef;

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
      // Wait for DOM to be fully rendered and scripts to load
      setTimeout(() => {
        this.initializeFlickity();
      }, 500); // Increased timeout to ensure Flickity is loaded
    }
  }

  ngOnDestroy() {
    // Destroy Flickity instance
    if (this.flickity) {
      this.flickity.destroy();
    }
  }

  private initializeFlickity(): void {
    if (!this.isBrowser || !this.flickityGallery) return;

    // Check if Flickity is available globally
    const Flickity = (window as any).Flickity;
    console.log('Attempting to initialize Flickity', {
      Flickity,
      element: this.flickityGallery.nativeElement,
      hasClass:
        this.flickityGallery.nativeElement.classList.contains('js-flickity'),
    });

    if (Flickity) {
      try {
        // Initialize Flickity with wrapAround option and peek effect
        this.flickity = new Flickity(this.flickityGallery.nativeElement, {
          wrapAround: true,
          autoPlay: 6000,
          pauseAutoPlayOnHover: true,
          pageDots: true,
          prevNextButtons: true,
          cellAlign: 'center',
          contain: false, // Allow cells to extend outside
          groupCells: false, // Don't group cells
          percentPosition: false, // Use pixel positioning for better control
        });
        console.log('Flickity initialized successfully', this.flickity);
      } catch (error) {
        console.error('Failed to initialize Flickity:', error);
      }
    } else {
      console.error(
        'Flickity not available. Available on window:',
        Object.keys(window).filter((k) => k.toLowerCase().includes('flick'))
      );
    }
  }
}

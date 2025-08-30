import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  let component: WelcomeSectionComponent;
  let fixture: ComponentFixture<WelcomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.welcome-title')?.textContent).toContain(
      component.welcomeMessage
    );
  });

  it('should display subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.welcome-subtitle')?.textContent).toContain(
      component.subtitle
    );
  });
});

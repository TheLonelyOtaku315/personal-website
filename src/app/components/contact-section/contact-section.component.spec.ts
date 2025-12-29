import { describe, it, expect } from 'vitest';
import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  it('should create', () => {
    const component = new ContactSectionComponent();
    expect(component).toBeTruthy();
  });
});

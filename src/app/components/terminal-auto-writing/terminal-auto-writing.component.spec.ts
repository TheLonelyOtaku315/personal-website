import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalAutoWritingComponent } from './terminal-auto-writing.component';

describe('TerminalAutoWritingComponent', () => {
  let component: TerminalAutoWritingComponent;
  let fixture: ComponentFixture<TerminalAutoWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalAutoWritingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalAutoWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

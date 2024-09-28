import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationDonneesTestComponent } from './generation-donnees-test.component';

describe('GenerationDonneesTestComponent', () => {
  let component: GenerationDonneesTestComponent;
  let fixture: ComponentFixture<GenerationDonneesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationDonneesTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationDonneesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

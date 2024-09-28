import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesDevoirsComponent } from './liste-des-devoirs.component';

describe('ListeDesDevoirsComponent', () => {
  let component: ListeDesDevoirsComponent;
  let fixture: ComponentFixture<ListeDesDevoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDesDevoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesDevoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

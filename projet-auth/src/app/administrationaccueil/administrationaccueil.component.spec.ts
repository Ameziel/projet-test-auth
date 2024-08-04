import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationaccueilComponent } from './administrationaccueil.component';

describe('AdministrationaccueilComponent', () => {
  let component: AdministrationaccueilComponent;
  let fixture: ComponentFixture<AdministrationaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationaccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

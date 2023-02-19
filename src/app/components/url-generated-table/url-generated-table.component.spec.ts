import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlGeneratedTableComponent } from './url-generated-table.component';

describe('UrlGeneratedTableComponent', () => {
  let component: UrlGeneratedTableComponent;
  let fixture: ComponentFixture<UrlGeneratedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlGeneratedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlGeneratedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

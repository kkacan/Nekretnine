import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemljistaComponent } from './zemljista.component';

describe('ZemljistaComponent', () => {
  let component: ZemljistaComponent;
  let fixture: ComponentFixture<ZemljistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemljistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZemljistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePanelComponent } from './upgrade-panel.component';

describe('UpgradePanelComponent', () => {
  let component: UpgradePanelComponent;
  let fixture: ComponentFixture<UpgradePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePanelComponent } from './game-panel.component';

describe('GamePanelComponent', () => {
  let component: GamePanelComponent;
  let fixture: ComponentFixture<GamePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

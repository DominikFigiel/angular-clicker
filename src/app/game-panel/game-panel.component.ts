import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {
  @Input()
  player: Player;


  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.player.workers.forEach(w => {
        this.player.money += w.addMoney()
      });
    }, 1000);
  }

}

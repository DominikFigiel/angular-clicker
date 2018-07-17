import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player';
import { Worker } from './worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  player: Player;
  title = 'Angular Clicker';

  ngOnInit() {
    this.player = {
      name: 'Gracz',
      money: 2000,
      workers: new Array<Worker>()
    }
    this.player.workers.push(new Worker('Kopacz', 0, 2, 55, 5, 10, 2, 'icon1'));
    this.player.workers.push(new Worker('Kupa', 0, 2, 10, 15, 10, 2, 'icon1'));
    this.player.workers.push(new Worker('Diss na szatana', 1, 2, 3, 25, 10, 2, 'icon1'));
  } 

}



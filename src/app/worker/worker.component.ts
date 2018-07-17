import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  @Input()
  worker: Worker;
  @Input()
  player: Player;

  constructor() { }

  ngOnInit() {
  }

}

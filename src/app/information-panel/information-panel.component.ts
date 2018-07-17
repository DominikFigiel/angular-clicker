import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit {
  @Input()
  player: Player;

  constructor() { }

  ngOnInit() {

  }

}

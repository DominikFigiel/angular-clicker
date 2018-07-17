import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { UpgradePanelComponent } from './upgrade-panel/upgrade-panel.component';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { WorkerComponent } from './worker/worker.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    InformationPanelComponent,
    UpgradePanelComponent,
    GamePanelComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerLvl: number;

  nextPowerLvl: number;

  onSubmit(){
    this.powerLvl = this.nextPowerLvl;
  }
}

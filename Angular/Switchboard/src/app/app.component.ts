import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean[] = [true,true,true,true,true,true,true,true];
  btn(i){
    if (this.status[i]){
      this.status[i] = false;
    } else {
      this.status[i] = true;
    }
  }
}

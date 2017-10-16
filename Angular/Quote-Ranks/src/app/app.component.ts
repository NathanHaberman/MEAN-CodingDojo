import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuotes = [];
  
  newQuote = new Quote();
  
  onSubmit(){
    this.allQuotes.push(this.newQuote);
    this.newQuote = new Quote();
  }

  addEmitter(i){
    this.allQuotes[i].rating ++;
  }

  subEmitter(i){
    this.allQuotes[i].rating --;
  }

  delEmitter(i){
    this.allQuotes.splice(i,1);
  }

}

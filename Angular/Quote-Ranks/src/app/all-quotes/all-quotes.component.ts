import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.css']
})
export class AllQuotesComponent implements OnInit {
  @Input() theQuote;
  @Input() i;

  @Output() addEmitter = new EventEmitter();
  @Output() subEmitter = new EventEmitter();
  @Output() delEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addRating(){
    this.addEmitter.emit(this.i);
  }
  
  subRating(){
    this.subEmitter.emit(this.i);
  }

  delete(){
    this.delEmitter.emit(this.i);
  }

}

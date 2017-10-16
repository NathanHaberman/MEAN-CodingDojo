import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-iii',
  templateUrl: './super-saiyan-iii.component.html',
  styleUrls: ['./super-saiyan-iii.component.css']
})
export class SuperSaiyanIiiComponent implements OnInit {
  @Input() ssiiiLvl

  lvl: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.lvl = this.ssiiiLvl * 250;
  }
}

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-ii',
  templateUrl: './super-saiyan-ii.component.html',
  styleUrls: ['./super-saiyan-ii.component.css']
})
export class SuperSaiyanIiComponent implements OnInit {
  @Input() ssiiLvl

  lvl: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.lvl = this.ssiiLvl * 150;
  }
}

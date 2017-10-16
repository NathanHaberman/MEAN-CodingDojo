import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-iv',
  templateUrl: './super-saiyan-iv.component.html',
  styleUrls: ['./super-saiyan-iv.component.css']
})
export class SuperSaiyanIvComponent implements OnInit {
  @Input() ssivLvl

  lvl: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.lvl = this.ssivLvl * 500;
  }
}

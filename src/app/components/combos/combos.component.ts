import { Component, OnInit } from '@angular/core';
import { Ifruitcombo } from 'src/app/Models/combos';
import { comboService } from 'src/app/services/combo';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent implements OnInit {

  fruitsJuices:Ifruitcombo[]=[]
  constructor(
    private _combo:comboService
  ) { }

  ngOnInit(): void {
this.getCombo()
  }
  getCombo(){
    this.fruitsJuices=this._combo.fruitsJuices

  }

}

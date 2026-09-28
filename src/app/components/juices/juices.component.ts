import { Component, OnInit } from '@angular/core';
import { Ijuices } from 'src/app/Models/juices';
import { juiceService } from 'src/app/services/juice';

@Component({
  selector: 'app-juices',
  templateUrl: './juices.component.html',
  styleUrls: ['./juices.component.scss']
})
export class JuicesComponent implements OnInit {
juices:Ijuices[]=[]
  constructor(
    private _juice:juiceService
  ) { }

  ngOnInit(): void {
    this.getjuices()
  }

  getjuices(){
    this.juices=this._juice.getjuice()
  }

}

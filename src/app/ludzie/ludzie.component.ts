import { LudzieM } from './mock-ludzie'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss']
})
export class LudzieComponent implements OnInit {
   listaLudzi=LudzieM;
  constructor() { }

  ngOnInit(): void {

  }

}

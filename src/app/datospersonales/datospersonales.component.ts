import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.scss']
})
export class DatospersonalesComponent implements OnInit {
obj_datospersonales: datosinterface []=[
  {
      nombre:'persona1',
      foto:'assets/persona1.jpg',
      grado: '3',
      telefono: '5545671687'
  },
  {
    nombre:'persona2',
    foto:'assets/persona2.jpg',
    grado:'ingeniero en sistemas',
    telefono: '5545679656'
  },
  {
    nombre:'persona3',
    foto:'assets/persona3.jpg',
    grado:'ingeniero en sistemas',
    telefono: '5545675467'
  },
  {
    nombre:'persona4',
    foto:'assets/persona4.jpg',
    grado:'ingeniero en sistemas',
    telefono: '5545675400'
  },
  {
    nombre:'persona5',
    foto:'assets/persona5.jpg',
    grado:'ingeniero en sistemas',
    telefono: '5545675478'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
export interface datosinterface{
  nombre:string;
  foto:string;
  grado:string;
  telefono:string;
}

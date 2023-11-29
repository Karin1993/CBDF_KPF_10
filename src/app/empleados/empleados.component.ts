import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    {id:1, nombre:"Juan", sueldo:444.67, activo:false},
    {id:2, nombre:"Amelia", sueldo:678.99, activo:true},
    {id:3, nombre:"Ximena", sueldo:5632.18, activo:true},
    {id:4, nombre:"Abraham", sueldo:193.77, activo:false},
    {id:5, nombre:"Abigail", sueldo:284.45, activo:false},
    {id:6, nombre:"Gin", sueldo:2839.5, activo:true},
    {id:7, nombre:"Frida", sueldo:2849.45, activo:true},
    {id:8, nombre:"Javier", sueldo:283.37, activo:false},
    {id:9, nombre:"Alex", sueldo:294.47, activo:false},
    {id:10, nombre:"Pablo", sueldo:2849.284, activo:true}
  ];
}

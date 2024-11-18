import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ProyectoTypeScript';
  
  public reloj: Reloj

  constructor() {
    this.reloj = new Reloj()
  }

  ngOnInit(): void {}

  moverSegundero(): void {
    this.reloj.moverSegundero();
  }

  moverMinutero(): void {
    this.reloj.moverMinutero();
  }

  moverHorario(): void {
    this.reloj.moverHorario();
  }
}

class Reloj { 
  protected segundos: number; 
  protected minutos: number; 
  protected horas: number; 
  constructor(segundos?: number, minutos?: number, horas?: number) { 
      this.segundos = segundos ?? 0; 
      this.minutos = minutos ?? 0; 
      this.horas = horas ?? 0; 
  } 
  /** Método de acceso a la propiedad segundos */ 
  public getSegundos(): number { 
      return this.segundos; 
  }
  /** Método de modificación a la propiedad segundos */ 
  public setSegundos(segundos: number): void { 
      this.segundos = segundos; 
  } 
  /** Método de acceso a la propiedad minutos */
  public getMinutos(): number { 
      return this.minutos; 
  } 
  /** Método de modificación a la propiedad minutos */ 
  public setMinutos(minutos: number): void { 
      this.minutos = minutos; 
  } 
  /** Método de acceso a la propiedad horas */ 
  public getHoras(): number { 
      return this.horas; 
  } 
  /** Método de modificación a la propiedad horas */ 
  public setHoras(horas: number): void { 
      this.horas = horas; 
  } 
  /** Método para mover el segundero */ 
  public moverSegundero(): void { 
      if (this.getSegundos() === 59) { 
          this.moverMinutero(); 
          this.segundos = 0; 
      } 
      else { 
          this.segundos++; 
      } 
  } 
  /** Método para mover el minutero */ 
  public moverMinutero(): void { 
      if (this.getMinutos() === 59) { 
          this.moverHorario(); this.minutos = 0; 
      } 
      else { 
          this.minutos++; 
      } 
  } 
  /** Método para mover el horario */ 
  public moverHorario(): void { 
      if (this.getHoras() === 12) { 
          this.horas = 1; 
      } 
      else { 
          this.horas++; 
      } 
  } 
}



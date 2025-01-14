import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-docente-lectura',
  templateUrl: './qr-docente-lectura.page.html',
  styleUrls: ['./qr-docente-lectura.page.scss'],
})
export class QrDocenteLecturaPage {
  tiempoRestante: number; // Tiempo restante en segundos
  intervalo: any;
  temporizadorIniciado: boolean = false;

  constructor() { }

  iniciarTemporizador() {
    this.tiempoRestante = 300; // 300 segundos (5 minutos)
    this.temporizadorIniciado = true;

    // Inicia el temporizador, se ejecuta cada 1 segundo
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.intervalo); // Detener el temporizador cuando llegue a 0
        this.temporizadorIniciado = false;
      }
    }, 1000);
  }

  // Método para convertir los segundos restantes a formato MM:SS
  get tiempoFormateado() {
    const minutos = Math.floor(this.tiempoRestante / 60);
    const segundos = this.tiempoRestante % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }
}

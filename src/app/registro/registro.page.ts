/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  public nombre: string = '';
  public apellido: string = '';
  public correo: string = '';
  public telefono: string = '';
  public cedula: string = '';
  public clave: string = '';

  public lista = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  cargar(){

    if (this.nombre !== '' || this.apellido !== '' || this.correo !== '' || this.correo !== '' || this.telefono !== '' || this.cedula !== '' || this.clave !== ''){
      this.http.post('https://adamix.net/defensa_civil/def/registro.php', {datos: this.nombre + 
      this.apellido + this.correo + this.cedula + this.clave }).subscribe((res) => {
        console.log(res);
      });
    }else{
      alert('LLENE TODOS LOS CAMPOS');
    }
  }

  limpiar(){
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.telefono = '';
    this.cedula = '';
    this.clave = '';
  }
}

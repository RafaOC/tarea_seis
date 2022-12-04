import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registro', url: '/registro', icon: 'home' },
    { title: 'Portada', url: '/portada', icon: 'send' },
    { title: 'Genero', url: '/genero', icon: 'people' },
    { title: 'Edad', url: '/edad', icon: 'happy' },
    { title: 'Universidad', url: '/universidades', icon: 'business' },
    { title: 'Clima', url: '/clima', icon: 'cloudy' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Defensa', url: '/prueba', icon: 'call' },
  ];

  constructor() {}
}

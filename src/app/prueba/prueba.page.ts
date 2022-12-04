import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  public lista = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.bucarFun();
  }

  bucarFun(){
    this.http
    .get<any>(
      'https://adamix.net/defensa_civil/def/servicios.php'
    )
    .subscribe((res) => {
      console.log(res);
      this.lista = res.datos;
    });
  }

}

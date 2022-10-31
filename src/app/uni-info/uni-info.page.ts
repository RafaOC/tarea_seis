import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uni-info',
  templateUrl: './uni-info.page.html',
  styleUrls: ['./uni-info.page.scss'],
})
export class UniInfoPage implements OnInit {

  public uniId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {

    // this.uniId = this.activatedRoute.snapshot.paramMap.get('name');
    // this.http.get('http://universities.hipolabs.com/search?country=chile/'+ this.uniId)
    // .subscribe(res => {
    //   console.log(res);
    // });
    // console.log(this.uniId = this.activatedRoute.snapshot.paramMap.get('name'));
  }
}

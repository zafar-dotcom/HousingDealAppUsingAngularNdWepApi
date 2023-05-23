import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertydetailid!: number;
/*  ActivatedRoute use to fetch the record or id from the url
and the url of this property-detail/:id so id would be fetching here
*/
  constructor(private urlvaluefetcher: ActivatedRoute, private router : Router) { }
  ngOnInit() {
    /*here id should be same as provide to the url in app.module.ts property-detail/:id*/
    this.propertydetailid = Number(this.urlvaluefetcher.snapshot.params['id']);
/*    this will executed when params value change in the route of this Component nd return that url*/
    this.urlvaluefetcher.params.subscribe(
      (params) => {
        this.propertydetailid = +params['id'];  //+ before params to make it integer
      }
    )
   /* this.propertydetailid = +this.urlvaluefetcher.snapshot.params['id'];*/
  }
  onSelectnext() {
    this.propertydetailid += 1;
    /*this.routertonavigate.navigate(['property-detail/' + this.propertydetailid]);*/
    this.router.navigate(['property-detail' , this.propertydetailid]);

  }
}

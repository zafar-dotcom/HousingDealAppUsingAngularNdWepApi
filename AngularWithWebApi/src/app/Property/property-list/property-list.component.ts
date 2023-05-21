import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];
  sellrent: number= 1;
  constructor(private housingservice: HousingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellrent = 2;
       /* means we are in rent property here for 2 else in sell*/
      //
    }
    this.housingservice.getallproperties(this.sellrent).subscribe(
      data => {
        console.log(data);
        this.properties = data;
      },
      error => {
        console.log(error);
      }
    );      
  }

    
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipropertybase } from '../../Model/ipropertybase';
import { HousingService } from '../../services/housing.service';
/*import { IProperty } from '../iproperty';*/

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<Ipropertybase> = [];
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
        let new_property_by_class_obj = localStorage.getItem('newproperty');
        const clasobjvalues = new_property_by_class_obj ? JSON.parse(new_property_by_class_obj) : [];
        if (clasobjvalues.sellrent == this.sellrent) {
          this.properties.push(clasobjvalues);
        }
      },
      error => {
        console.log(error);
      }
    );      
  }

    
}

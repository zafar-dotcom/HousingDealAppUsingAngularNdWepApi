import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
       "id": 1,
       "name": "DHA Rawalpindi house",
       "price": 11000000000000
    },
    {
      "id": 2,
      "name": "behrtia town korngi house",
      "price": 12000000000000
    },
    {
      "id": 3,
      "name": "DHA Karachi house",
      "price": 13000000000000
    },
    {
      "id": 4,
      "name": "DHA house",
      "price": 12000000000000
    },
    {
      "id": 5,
      "name": "behrtia town lahore phase 2 house",
      "price": 12000000000000
    },
    {
      "id": 6,
      "name": "DHA Multan house",
      "price": 120000000000000
    }
  ]
}

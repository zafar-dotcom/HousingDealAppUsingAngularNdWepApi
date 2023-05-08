import { Component } from "@angular/core";
/** component define behaviour of propert or class
 * decorator accept object as parameters
 */
@Component({
  selector: 'app-property-card',  
  // template: '<h1>im a card</h1>',
  templateUrl :'Property-card.component.html',
  // styles: ['h1{ font-weight:normal }']
  styleUrls :['Property-card.component.css'] 
})
export class PropertyCardComponent{
  property: any = {
    "id": 1,
    "name": "DHA house",
    "price" :12000000000000
  }
}

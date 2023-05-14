import { Component, Input } from "@angular/core";
import { IProperty } from "../iproperty";
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
  /** receive data from property_list by declaring input parameter property_name =type as following*/
  /**how to pass data from parent component to child using input decorator*/
  /**input will catch data from property list html where this ts selecter define and pass property*/
  @Input() property!: IProperty 
  
}

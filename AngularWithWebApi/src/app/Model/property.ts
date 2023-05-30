import { Ipropertybase } from "./ipropertybase";
//we can create the object of this class (this class fetch and pull data into database)
//  and assign it to obj of interface directly  Ipropertybase
//1st step :we can get values from form using interface Ipropertybase
// 2nd step :we created object of this class in ts file
//3rd step : define method to assing interface values from forms to the filed of class using its obj
export class Property implements Ipropertybase {

  id?: number;
  sellrent?: number;
  ptype?: string;
  ftype: string | undefined ;
  name?: string;
  price?: number;
  builtArea?: number;
  city?: string;
  RTM?: number;
  image?: string;

  // Additional properties in the class
  BHK?: number;
  CarpetArea?: number;
  Address?: string;
  Address2?: string;
  FloorNo?: string;
  TotalFloor?: string;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Description?: string;
  PostedOn?: string;
  PostedBy?: number;



  //id?: number | undefined;
  //sellrent?: number | undefined;
  //ptype?: string | undefined;
  //ftype!: string;
  //name!: string;
  //price?: number | undefined;
  //builtArea?: number | undefined;
  //city!: string;
  //image?: string | undefined;
  //BHK?: number;
  //CarpetArea?: number;
  //Address?: string;
  //Address2?: string;
  //FloorNo?: string;
  //TotalFloor?: string;
  //RTM?: number;
  //AOP?: string;
  //MainEntrance?: string;
  //Security?: number;
  //Gated?: number;
  //Maintenance?: number;
  //Possession?: string;
  //Description?: string;
  //PostedOn?: string;
  //PostedBy?: number;
}  

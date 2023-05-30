import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ipropertybase } from '../Model/ipropertybase';
import { Property } from '../Model/property';
import { IProperty } from '../Property/iproperty';


@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private http: HttpClient) { }

  getallproperties(sellrent: number): Observable<Ipropertybase[]> {
  return this.http.get('data/property.json').pipe(
    map((data: Record<string, any>) => {
      const propertyarray: Array<Ipropertybase> = [];
      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].sellrent === sellrent) {
          propertyarray.push(data[id]);
        }
      }
      return propertyarray;
    })
  );
  }
/*method to store class obj to local storage and that obj has already taken values
from ipropertbase interface through forms in addproperty ts file*/
  Addproperty(property: Property) {
    localStorage.setItem('newproperty', JSON.stringify(property));
  }
}



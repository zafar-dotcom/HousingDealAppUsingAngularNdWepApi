import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProperty } from '../Property/iproperty';


@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private http: HttpClient) { }

  getallproperties(sellrent: number): Observable<IProperty[]> {
  return this.http.get('data/property.json').pipe(
    map((data: Record<string, any>) => {
      const propertyarray: Array<IProperty> = [];
      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id].sellrent === sellrent) {
          propertyarray.push(data[id]);
        }
      }
      return propertyarray;
    })
  );
}

}



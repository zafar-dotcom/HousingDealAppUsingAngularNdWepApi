import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(succ: string) {
    alertify.success(succ);
  }
  warning(warningmessage: string) {
    alertify.waening(warningmessage);
  }
  error(errorrmessage: string) {
    alertify.error(errorrmessage);
  }
}

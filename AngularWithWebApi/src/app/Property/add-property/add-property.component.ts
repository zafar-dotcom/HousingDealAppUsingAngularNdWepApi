import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
/*  @ViewChild ('form') addpropertyform!: NgForm;*/
/*  router is useas a navigator to navigate to diffrent url it works like href but with function and navigate([])*/
  @ViewChild('formstab') formstab?: TabsetComponent;
  propertytype: Array<string> = ['House', 'Appartment', 'Duplex'];
  furnishproperty: Array<string> = ['Fully', 'Semi', 'Duplex'];
  gatedcommunity: Array<string> = ['Yes', 'No'];
  location: Array<string> = ['East', 'West', 'South', 'North'];
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  propertyview: IProperty = {
    id: undefined,
    name: '',
    price: undefined,
    sellrent: undefined,
    type: ''
};
  constructor(private router: Router) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
}

  ngOnInit() {

  }
/*  this even will navigate to base url bu using Router*/
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm) {
    console.log('congrates,form submitted');
    console.log(Form);
  }
  selectTab(tabId: number) {
    if (this.formstab?.tabs[tabId]) {
      this.formstab.tabs[tabId].active = true;
    }
  }

}

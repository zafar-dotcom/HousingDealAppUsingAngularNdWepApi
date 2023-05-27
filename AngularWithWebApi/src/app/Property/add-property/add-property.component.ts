import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../../Model/iproperty';
import { Ipropertybase } from '../../Model/ipropertybase';
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
  addpropertyform !: FormGroup;
  propertytype: Array<string> = ['House', 'Appartment', 'Duplex'];
  furnishproperty: Array<string> = ['Fully', 'Semi', 'Duplex'];
  gatedcommunity: Array<string> = ['Yes', 'No'];
  location: Array<string> = ['East', 'West', 'South', 'North'];
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  propertyview: Ipropertybase = {
      id: undefined,
      name: '',
      price: undefined,
      sellrent: undefined,
      ptype: '',
    ftype: '',
    BHK: undefined,
    builtArea: undefined,
    city: '',
    RTM: undefined
  };
  constructor(private router: Router, private fb: FormBuilder) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
}

  ngOnInit() {
    this.addpropertyformgroup();
  }
  addpropertyformgroup() {
    this.addpropertyform = this.fb.group({
      sellrent: [null, Validators.required],
      bhk: [null, Validators.required],
      proptype: [null, Validators.required],
      frtype: [null, Validators.required],
      name: [null, Validators.required],
      city: [null, Validators.required],
      price: [null, Validators.required],
      area: [null, Validators.required]

    });
  }
/*  this even will navigate to base url bu using Router*/
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log('congrates,form submitted');
    console.log(this.addpropertyform);
  }
  selectTab(tabId: number) {
    if (this.formstab?.tabs[tabId]) {
      this.formstab.tabs[tabId].active = true;
    }
  }

}

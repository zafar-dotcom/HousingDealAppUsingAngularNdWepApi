import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { retry } from 'rxjs';
import { Iproperty } from '../../Model/iproperty';
import { Ipropertybase } from '../../Model/ipropertybase';
import { Property } from '../../Model/property';
import { AlertifyService } from '../../services/alertify.service';
import { HousingService } from '../../services/housing.service';
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
  nextclick: boolean = false;
  //obj of class to assing values from forms to its flied of this class
  propobj = new Property();
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
  constructor(private router: Router,
    private fb: FormBuilder,
    private housing: HousingService,
    private alertify: AlertifyService

  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
}

  ngOnInit() {
    this.addpropertyformgroup();
  }
  //2nd step :method to mapp values from form to filed of class using its obj
  mapproperty(): void {
    this.propobj.sellrent = +this.sellrent?.value;
    this.propobj.BHK = +this.BHK?.value;
    this.propobj.name = this.propname?.value;
    this.propobj.city = this.city?.value;
    this.propobj.ftype = this.ftype?.value;
    this.propobj.price = this.price?.value;
    this.propobj.ptype = this.proptype?.value;
    this.propobj.Security = +this.security?.value;
    this.propobj.MainEntrance = this.entrance?.value;
    this.propobj.builtArea = +this.aria?.value;
    this.propobj.CarpetArea = +this.carpetarea?.value;
    this.propobj.FloorNo = this.floor?.value;
    this.propobj.TotalFloor = this.totalfloor?.value;
    this.propobj.Address = this.addresscontrol?.value;
    this.propobj.Address2 = this.landmark?.value;
    this.propobj.RTM = +this.rtm?.value;
    this.propobj.AOP = this.ageOfprop?.value;
    this.propobj.Gated = +this.gated?.value;
    this.propobj.Maintenance = this.mantain?.value;
    this.propobj.Description = this.description?.value;
    this.propobj.Possession = this.possession?.value;
    this.propobj.PostedOn = new Date().toString();

  }
 /* following is to group control of same form in diffrent group using fb to use reactive form
 BasicInfo and PricingAera are name of diff tabs  */
  addpropertyformgroup() {
    this.addpropertyform = this.fb.group({
      BasicInfo: this.fb.group({
        sellrent: ['1', Validators.required],
        bhk: [null, Validators.required],
        proptype: [null, Validators.required],
        frtype: [null, Validators.required],
        name: [null, Validators.required],
        city: [null, Validators.required],
      }),
      PricingAera: this.fb.group({
        price: [null, Validators.required],
        aria: [null, Validators.required],
        security: [null],
        mantaince: [null],
        carpetarea: [null],
      }),
      addresstab: this.fb.group({
        floor: [null, Validators.required],
        totalfloor:[null],
        address: [null, Validators.required],
        landmark: [null]   
      }),
      otherdetailtab: this.fb.group({
        rToMove: [null], 
        possession: [null],
        description: [null],
        ageOfprop: [null],
        gated: [null],
        entrance:[null]
      }),
     
     

    });
  }
/*  this even will navigate to base url by using Router*/
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    this.nextclick = true;
    if (this.alltabsvalid()) {
      //call maping method to assigned all values from the forms to obj of class
      this.mapproperty();
      //call method to store obj of class in local storage 
      this.housing.Addproperty(this.propobj);
      console.log("sellrent=" + this.addpropertyform.value.BasicInfo.sellrent);
      this.alertify.success('Form submitted successfully');
      console.log(this.addpropertyform);
      if (this.sellrent.value == 1) {
        this.router.navigate(['/']);
      }
      else {
        this.router.navigate(['rent-propery'])
      }
    }
    else {
      this.alertify.error("Please Review form and provide neccesary field")
    }
   
  }

  alltabsvalid(): boolean {
    if (this.BasicInfo.invalid) {

      if (this.formstab?.tabs[0]) {
        this.formstab.tabs[0].active = true;
      }
      return false;    //exit the function  
    }

    if (this.PricingArea.invalid) {
      if (this.formstab?.tabs[1]) {
        this.formstab.tabs[1].active = true;
      }
      return false;     //exit the function 
    }
    if (this.addressgetter.invalid) {
      if (this.formstab?.tabs[2]) {
        this.formstab.tabs[2].active = true;
      }
      return false;
    }
    return true;
}

//  guideline to get control and group
//  1st step get group as group
//2nd step access / get control of that group one by one
//3rd use accessed control or group as whole where needed

  //getter method to keep clean template
  // #region getter method

 

  
  //geter of addresstab
  get addressgetter() {
    return this.addpropertyform.controls['addresstab'] as FormGroup;
  }
  get addresscontrol() {
    return this.addressgetter.controls['address'] as FormControl;
  }
  //now get control of above get address method if needed
  get landmark() {
    return this.addressgetter.controls['landmark'] as FormControl;
  }
  //control of address 2nd step
  get floor() {
    return this.addressgetter.controls['floor'] as FormControl;
  }
  //total floor control
  get totalfloor() {
    return this.addressgetter.controls['totalfloor'] as FormControl;
  }
  get gated() {
    return this.otherdetail.controls['gated'] as FormControl;
  }
  get entrance() {
    return this.otherdetail.controls['entrance'] as FormControl;
  }
 
 
  //getter method for pricing area 1st step
  get PricingArea() {
    return this.addpropertyform.controls['PricingAera'] as FormGroup;
  }
  get price() {
    return this.PricingArea.controls['price'] as FormControl;
  }
  get security() {
    return this.PricingArea.controls['security'] as FormControl;
  }
  //otherdetail control
  get mantain() {
    return this.PricingArea.controls['mantaince'] as FormControl;
  }
  //otherdetail control
  get aria() {
    return this.PricingArea.controls['aria'] as FormControl;
  }
  //pricing controlbuiltarea

  get carpetarea() {
    return this.PricingArea.controls['carpetarea'] as FormControl;
  }
 

 
  get ageOfprop() {
    return this.otherdetail.controls['ageOfprop'] as FormControl;
  }
 
  //getter method for other details 1st step
  get otherdetail() {
    return this.addpropertyform.controls['otherdetailtab'] as FormGroup;
  }
  
  get possession() {
    return this.otherdetail.controls['possession'] as FormControl;
  }
  get description() {
    return this.otherdetail.controls['description'] as FormControl;
  }
  //getter for ready to move p 2nd step
  get rtm() {
    return this.otherdetail.controls['rToMove'] as FormControl;
  }
  //get control of Priceing area p 2nd step
 
  //area control of pricing area group p 2nd step

  get BasicInfo() {
    return this.addpropertyform.controls['BasicInfo'] as FormGroup;
  }
  get propname() {
    return this.BasicInfo.controls['name'] as FormControl;
  }
  get BHK() {
    return this.BasicInfo.controls['bhk'] as FormControl;
  }

  //get property type control of bsic info group p 2nd step
  get proptype() {
    return this.BasicInfo.controls['proptype'] as FormControl;
  }
  //get furnish type of basic info group p 2nd step

  //get access of property name controll of basic info group p 2nd step

  //get access of city control of basic info group 2nd step
  get city() {
    return this.BasicInfo.controls['city'] as FormControl;
  }
  //we can also get access of single control of specific group  2nd step
  get sellrent() {
    return this.BasicInfo.controls['sellrent'] as FormControl;
  }
  get ftype() {
    return this.BasicInfo.controls['frtype'] as FormControl;
  }
  selectTab(tabId: number, iscurrenttabvalid: boolean) {
   this.nextclick = true;
    if (iscurrenttabvalid) {
      if (this.formstab?.tabs[tabId]) {
        this.formstab.tabs[tabId].active = true;
       
      }
      this.nextclick = false;
      }
   
  }
  selectTabback(tabId: number) {

    if (this.formstab?.tabs[tabId]) {
      this.formstab.tabs[tabId].active = true;
    }

  }
}

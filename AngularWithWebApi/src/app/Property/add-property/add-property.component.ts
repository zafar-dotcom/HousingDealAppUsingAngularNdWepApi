import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

/*  router is useas a navigator to navigate to diffrent url it works like href but with function and navigate([])*/
  constructor(private router: Router) { }

  ngOnInit() {

  }
/*  this even will navigate to base url bu using Router*/
  onBack() {
    this.router.navigate(['/']);
  }
}

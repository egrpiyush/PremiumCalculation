import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculation-premium',
  templateUrl: './calculation-premium.component.html',
  styleUrls: ['./calculation-premium.component.css']
})
export class CalculationPremiumComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    dob: new FormControl(''),    
    coverAmount: new FormControl(''),
    occupation: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}

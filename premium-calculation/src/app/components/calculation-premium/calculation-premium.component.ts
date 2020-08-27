import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Occupation } from '../../../app/models/occupation'
import { CalculatePremiumService } from '../../services/calculate-premium.service';

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
  public occupations: Occupation[] = [];
  constructor(private calculatePremiumService: CalculatePremiumService) { }

  ngOnInit() {

    this.calculatePremiumService.getOccupations().subscribe((o) => {
      this.occupations = o;
    })

  }

  onOccupationSelected(occupationId: any){
    debugger;
  }

}

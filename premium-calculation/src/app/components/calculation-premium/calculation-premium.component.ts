import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Occupation } from '../../../app/models/occupation'
import { MonthlyPremium } from '../../../app/models/monthly-premium'
import { PremiumCalculationInput } from '../../../app/models/premium-calculation-input'
import { CalculatePremiumService } from '../../services/calculate-premium.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calculation-premium',
  templateUrl: './calculation-premium.component.html',
  styleUrls: ['./calculation-premium.component.css']
})
export class CalculationPremiumComponent implements OnInit {

  currentDate: moment.Moment = moment();
  public occupations: Occupation[] = [];
  public premiumCalculationInput = new PremiumCalculationInput();
  monthlyPremiumAmount: number = 0;
  constructor(private calculatePremiumService: CalculatePremiumService) { }

  ngOnInit() {
    this.calculatePremiumService.getOccupations().subscribe((occupations) => {
      this.occupations = occupations;
    })
  }

  onCoverAmountChanged(coverAmount: any){
    this.premiumCalculationInput.coverAmount = coverAmount;    
  }

  onOccupationSelected(occupationId: any){
    this.premiumCalculationInput.occupationId = occupationId;
    this.calculatePremiumService.getMonthlyPremium(this.premiumCalculationInput.coverAmount, 
      this.premiumCalculationInput.occupationId, this.premiumCalculationInput.age).subscribe((monthlyPremium) => {
      this.monthlyPremiumAmount = monthlyPremium.amount;
    })    
  }

  onDOBSelected(dob: any){
    var endDate = moment(dob)
    this.premiumCalculationInput.age = this.currentDate.diff(endDate, 'years'); 
  }

}

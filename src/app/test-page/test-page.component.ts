import { Component, OnInit } from '@angular/core';
import * as BigNumbers from 'big-numbers';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  numbers;
  sonuc;


  constructor() {
    this.numbers = new BigNumbers({
      decimalSeparator: ',',
      thousandsSeparator: '.',
      precision: 2,
      roundingMode: BigNumbers.RoundingMode.HALF_UP
    });
   }


  ngOnInit() {
    this.hesapla('0,33', '0,33');
    //http://bignumbers.tech/tutorials/angular

  }

  hesapla(a,b){

    var aNumber = this.numbers.of(a);
    var bNumber = this.numbers.of(b);
    const result = aNumber.multiply(bNumber);

    console.log(this.numbers.format(result));
    console.log(result);
    
  }

}

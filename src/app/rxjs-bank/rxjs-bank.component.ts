import { Component, OnInit } from '@angular/core';
import { Observable, filter, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-bank',
  templateUrl: './rxjs-bank.component.html',
  styleUrls: ['./rxjs-bank.component.scss']
})
export class RxjsBankComponent {

  result: any;

  bank$ = new Observable(observer => {  
    fetch('https://random-data-api.com/api/v2/banks')  
      .then(response => response.json())  
      .then(bank => {  
        observer.next(bank);  
        observer.complete();  
      })  
      .catch(err => observer.error(err))  
  });

  buttonClick() {
    this.bank$ = of(
      this.bank$.pipe(
        filter((b: any) => b.response.bank_name.includes("Santander"))
      )
    );
    this.bank$
      .subscribe( (resData) => 
      {
        console.log(resData);
        this.result += JSON.stringify(resData);
      } );

  }
}

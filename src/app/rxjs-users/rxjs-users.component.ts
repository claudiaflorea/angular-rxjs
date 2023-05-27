import { Component } from '@angular/core';
import { Observable, catchError, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-users',
  templateUrl: './rxjs-users.component.html',
  styleUrls: ['./rxjs-users.component.scss']
})
export class RxjsUsersComponent {

  result: any;

  user$ = new Observable(observer => {  
    fetch('https://random-data-api.com/api/v2/users')  
      .then(response => response.json())  
      .then(user => {  
        observer.next(user);  
        observer.complete();  
      })  
      .catch(err => observer.error(err))  
  });

  buttonClick() {
    this.user$
      .pipe(  
        filter((res: any) => res.response.gender == "Male"),
        map((rs: any) =>  rs.response.first_name.toUpperCase())
        )
      .subscribe( (resData) => {
        console.log(resData);
        
        this.result += JSON.stringify(resData);
      } );

  }

}




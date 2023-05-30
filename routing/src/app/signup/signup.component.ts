import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private router: Router){}
    submit(){
      this.router.navigate(['/login'])
    }
    home2(){
      this.router.navigate(['/home'])
      
    }
}

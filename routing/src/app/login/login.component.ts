import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router){} // libraries used for client-side or server-side routing in web applications.


home1(){
  this.router.navigate(['/home'])
}
}

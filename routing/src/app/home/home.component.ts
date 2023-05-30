import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: Router){}

  sup(){
    this.route.navigate(['/signup'])
  }
  log(){
    this.route.navigate(['/login'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    alert("Registered!");
    this.router.navigateByUrl('/inicio');
  }

  enter(): void {
    this.router.navigateByUrl('/inicio');
  }

}

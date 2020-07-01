import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba1';
  ocultarNav: boolean = true;


  constructor(
    private loginService: LoginService,
    private router : Router
    ) {

  }
  ngOnInit(): void {
    this.loginService.ocultarNav.subscribe((res: boolean) => {
      this.ocultarNav = res;
    })
  }
  onCerrarSesion(): void {
    this.router.navigate(["/login"]);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  imports: [
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule],
  selector: 'app-top-menu',
  styleUrl: './top-menu.scss',
  templateUrl: './top-menu.html',
})
export class TopMenu implements OnInit, OnDestroy {
  appLogo = "assets/logo-agendador-javanauta.png";
  currentRoute: string = "";
  routeInscription!: Subscription;

  constructor(private router: Router) {
  
  }

    ngOnInit(): void {
      this.currentRoute = this.router.url
      this.routeInscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((evento: NavigationEnd) => {
        this.currentRoute = evento.url
      });
    }
 
  ngOnDestroy(): void {
    this.routeInscription.unsubscribe();
  }

  isOnRouteRegister() :boolean {
    return this.currentRoute === '/register'
  }
}

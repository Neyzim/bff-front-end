import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  imports: [MatIcon, MatToolbar, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  selector: 'app-top-menu',
  styleUrl: './top-menu.scss',
  templateUrl: './top-menu.html',
})
export class TopMenu {
  appLogo = "assets/logo-agendador-javanauta.png";
}

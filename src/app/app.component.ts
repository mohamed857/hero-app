import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AjoutComponent } from "./ajout/ajout.component";
import { ListComponent } from "./list/list.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AjoutComponent, ListComponent, HeaderComponent]
})
export class AppComponent {
  title = 'hero-app';
}

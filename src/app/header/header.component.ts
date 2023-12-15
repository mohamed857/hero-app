import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

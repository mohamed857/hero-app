import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // heros: any[]=[];

constructor(public _shared: SharedService){}

}

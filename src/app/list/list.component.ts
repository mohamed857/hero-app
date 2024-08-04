import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  heros: any;

constructor(public _shared: SharedService){}
ngOnInit(): void {
  this._shared.getAllHeros().subscribe(
    res=>{
      this.heros=res;
      console.log(res);
    },
    err=>{
      console.log("erroe",err);
      
    }
  )
}
deleteHero=(id :any)=>{
  this._shared.deleteHero(id).subscribe(
    res=>{
      console.log(res);
      this.ngOnInit();
    },
    err=>{
      console.error("error",err);   
    }
  );
}

}

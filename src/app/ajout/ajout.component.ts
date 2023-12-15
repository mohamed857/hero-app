import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  hero={
    name: '',
    power: 0,
    image: ''
  }
  // heros: any[]=[];
  ajout=()=>{
    // this._shared.heros.push(this.hero)
    // // this.heros.push(this.hero);
    // console.log("hellow")
    // this.hero={
    //   name: '',
    //   power: 0,
    //   imgUrl: ''
    // }
    this._shared.createNewHero(this.hero)
      .subscribe(
        res=>{
            this.hero={
            name: '',
            power: 0,
            image: ''
            }  
        },
        err=>{
          console.error("error"+err);
          
        }
      );
  }
  setName=(hName:any)=>{
    this.hero.name=hName
  }
  setPower=(hPower:any)=>{
    this.hero.power=hPower
  }
  setImg=(hImg:any)=>{
    this.hero.image=hImg
  }
  constructor(public _shared: SharedService){}
}

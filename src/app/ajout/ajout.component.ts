import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit {

  ngOnInit(): void {
    
  }
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
    let formData = new FormData();
    formData.append('name',this.hero.name);
    formData.append('power',this.hero.power.toString());
    formData.append('image',this.image);

    this._shared.createNewHero(formData)
    // this._shared.createNewHero(formData)
      .subscribe(
        res=>{
            this.hero={
            name: '',
            power: 0,
            image: ''
            }  
            this.image=''
            this.router.navigate(['/list']);

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
    // this.hero.image=hImg
  }
  image:any;
  selectImage=(e:any)=>{
  this.image=e.target.files[0];

  console.log(this.image);
  
}
  constructor(public _shared: SharedService,private router:Router){}
}

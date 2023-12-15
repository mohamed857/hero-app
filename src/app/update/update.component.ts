import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
hero:any;
id:any;
constructor(private act:ActivatedRoute,private _shared: SharedService,private router : Router){}
ngOnInit(): void {
  this.id=this.act.snapshot.paramMap.get('id');
  // console.log(this.id);
  this._shared.getHero(this.id).subscribe(
    res=>{
      this.hero=res;
    },
    err=>{
      console.error("error"+err);
      
    }
  )
}
update=()=>{
this._shared.updateHero(this.id,this.hero).subscribe(
  res=>{
    console.log(res);
    this.router.navigate(['/list']);
  },
  err=>{
    console.error("error"+err);
    
  }
)
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
}

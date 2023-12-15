import { Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {path:'', redirectTo:'/ajout', pathMatch:'full'},
    { path: 'ajout' , component: AjoutComponent},
    { path: 'list' , component: ListComponent},
    { path: 'update/:id' , component: UpdateComponent}

    // { path: '**' , component: NotfoundComponent}


];

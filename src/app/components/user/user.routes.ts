import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailUserComponent } from './detail-user.component';
import { EditUserComponent } from './edit-user.component';
import { NewUserComponent } from './new-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'detail', component: DetailUserComponent },
    { path: '**', pathMatch: 'prefix', redirectTo: 'edit' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(USER_ROUTES)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}

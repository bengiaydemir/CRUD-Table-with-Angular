import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'update/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ContactusComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ContactRoutes { }

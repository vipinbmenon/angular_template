import { NgModule } from '@angular/core';
import { components } from './components';
import { ContactRoutes } from './contact-routing.module';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ContactRoutes
    ]
})
export class ContactModule { }

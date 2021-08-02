import { NgModule } from '@angular/core';
import {components } from './components'

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [...components],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }

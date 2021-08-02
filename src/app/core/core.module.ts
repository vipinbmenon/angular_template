/*
 Resources which are once loaded such
  as route guards, HTTP interceptors,
   and application level services, 
   such as the ThemeService and 
   logging belong in this directory.
*/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TokenInterceptor } from '@core/interceptor';
import { services as guard, throwIfAlreadyLoaded } from '@core/guard'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers:[
    ...guard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]

})
export class CoreModule { 
constructor(@Optional() @SkipSelf() parentModule: CoreModule){
  throwIfAlreadyLoaded(parentModule,'CoreModule');
}

}

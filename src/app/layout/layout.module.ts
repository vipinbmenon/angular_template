import { NgModule, Optional, SkipSelf } from '@angular/core';
import { components} from './components'
import { throwIfAlreadyLoaded } from '@core/guard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...components,
  ],
  imports:[RouterModule],
})
export class LayoutModule { 

constructor(@Optional() @SkipSelf() layoutmodule:LayoutModule){
  throwIfAlreadyLoaded(layoutmodule,'LayoutModule')
}

}

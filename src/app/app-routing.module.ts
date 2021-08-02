import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoauthGuard } from '@core/guard'
import { ContentlayoutComponent } from '@layout/components'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContentlayoutComponent,
    canActivate: [NoauthGuard], // no authentication applied
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'auth',
    component: ContentlayoutComponent,
    canActivate: [NoauthGuard], // no authentication applied
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

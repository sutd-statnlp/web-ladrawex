import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DEBUG_INFO_ENABLED } from './app.constants';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

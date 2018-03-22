import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_CONFIG} from "./pages/@core/core.module";

const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  {path: '**', redirectTo: 'pages/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, ROUTE_CONFIG)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

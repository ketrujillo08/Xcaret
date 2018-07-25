import {Routes, RouterModule} from '@angular/router/';
import { InicioComponent } from './pages/inicio/inicio.component';

const appRoutes: Routes = [
    {path: '**', component: InicioComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

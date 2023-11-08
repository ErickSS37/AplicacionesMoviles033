import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePage } from './home.page';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { CambioContraComponent } from '../cambio-contra/cambio-contra.component';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'cambio-contra',
    component: CambioContraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

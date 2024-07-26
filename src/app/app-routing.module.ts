import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  {path:'tarefas', component: TarefasComponent, canActivate:[AuthGuardService]},
  {path: 'detalhes/:id', component: DetalhesComponent, canActivate:[AuthGuardService]},
  {path: 'cadastro', component: CadastroComponent, canActivate:[AuthGuardService]},
  {path: 'editar/:id', component: EditarComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/Tarefas.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  btnAcao:string = "Cadastrar!";
  btnTitulo:string = "Cadastrar Tarefa";

  constructor(private tarefaService:TarefaService, private router:Router){}

  createTarefa(tarefa:Tarefa){
    this.tarefaService.AddTask(tarefa).subscribe((data) =>{
      this.router.navigate(["/tarefas"]);
    })
  }

}

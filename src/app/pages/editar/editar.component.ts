import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/Tarefas.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  btnAcao:string = "Editar!";
  btnTitulo:string = "Editar tarefa";
  tarefa!:Tarefa;
  id!:number;

  constructor(private tarefaService:TarefaService, private route:ActivatedRoute, private router:Router){}


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.tarefaService.GetTask(this.id).subscribe((data) =>{
      this.tarefa = data;
    })
  }


  editarTarefa(tarefa:Tarefa){
    this.tarefaService.UpdateTask(tarefa).subscribe((data) =>{
      this.router.navigate(['tarefas']);
    })
  }


}

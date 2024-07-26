import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/Tarefas.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

  id!:number;
  tarefa!:Tarefa;
  dueDatePicker_value!:Date;
  creationDatePicker_value!:Date;

  constructor(private tarefaService:TarefaService, private route:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    

    this.tarefaService.GetTask(this.id).subscribe((data) =>{
      this.dueDatePicker_value = new Date(data.dueDate!);
      this.creationDatePicker_value = new Date(data.creationDate!);

      data.creationDate = new Date(data.creationDate!).toLocaleDateString('pt-BR');
      data.dueDate = new Date(data.dueDate!).toLocaleDateString('pt-BR');

      this.tarefa = data;
      
    });

  }

}

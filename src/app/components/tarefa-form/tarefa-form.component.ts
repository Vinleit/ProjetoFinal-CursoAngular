import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from 'src/app/models/Tarefas.model';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Tarefa>();
  @Input() btnAcao!:string;
  @Input() btnTitulo!:string;
  @Input() dadosTarefa:Tarefa|null = null;

  tarefaForm!:FormGroup;
  minDate:Date = new Date();
  

  constructor(){}
  ngOnInit(): void {
    this.tarefaForm = new FormGroup({
      id: new FormControl(this.dadosTarefa? this.dadosTarefa.id : 0),
      title: new FormControl(this.dadosTarefa? this.dadosTarefa.title : '', [Validators.required]),
      description: new FormControl(this.dadosTarefa? this.dadosTarefa.description : ''),
      creationDate: new FormControl(new Date(), [Validators.required]),
      dueDate: new FormControl(this.dadosTarefa? this.dadosTarefa.dueDate : new Date(), [Validators.required]),
      isCompleted: new FormControl(this.dadosTarefa? this.dadosTarefa.isCompleted : false, [Validators.required]),
    })

    
  }

  submit(){
    this.onSubmit.emit(this.tarefaForm.value);
  }

}

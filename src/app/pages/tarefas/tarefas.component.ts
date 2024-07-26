import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/Tarefas.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas:Tarefa[] = [];
  tarefasGeral:Tarefa[] = [];
  colunas = ['isCompleted', 'title', 'Acoes', 'Excluir'];

  constructor(private tarefaService:TarefaService){}

  ngOnInit(): void {
    this.tarefaService.GetAllTasks().subscribe((data) =>{
      data.map((item) =>{
        item.creationDate = new Date(item.creationDate!).toLocaleDateString('pt-BR');
        item.dueDate = new Date(item.dueDate!).toLocaleDateString('pt-BR');
      })

      this.tarefas = data;
      this.tarefasGeral = data;
    })
  }

  search(event:Event):void{
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.tarefas = this.tarefasGeral.filter(tarefa =>{
      return tarefa.title.toLocaleLowerCase().includes(value);
    })
  }

  concluirTarefa(id:number):void{
    this.tarefaService.MarkTaskAsCompleted(id).subscribe((data)=>{
      this.tarefas = data;
      Swal.fire({
        title: "Concluída!",
        text: "A tarefa foi concluída com sucesso.",
        icon: "success"
      });
    })
  }

  excluirTarefa(id:number):void{
    Swal.fire({
      title: "Deseja deletar a tarefa?",
      text: "Essa tarefa será excluída da base de dados e a ação não poderá ser revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F44A3E",
      cancelButtonColor: "#797A7B",
      confirmButtonText: "Confirmar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tarefaService.DeleteTask(id).subscribe((data) =>{
          this.tarefas = data;
          Swal.fire({
            title: "Deletada!",
            text: "A tarefa foi deletada com sucesso.",
            icon: "success"
          });
        })
      }
    });
  }
}

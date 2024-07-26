import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tarefa } from '../models/Tarefas.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = `${environment.apiUrl}/Tarefa`;

  constructor(private http:HttpClient) { }

  GetAllTasks():Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.apiUrl}`);
  }

  GetTask(id:number):Observable<Tarefa>{
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  AddTask(tarefa:Tarefa):Observable<Tarefa[]>{
    return this.http.post<Tarefa[]>(`${this.apiUrl}/new`, tarefa);
  }

  MarkTaskAsCompleted(id:number):Observable<Tarefa[]>{
    return this.http.patch<Tarefa[]>(`${this.apiUrl}/complete/${id}`, id);
  }

  UpdateTask(tarefa:Tarefa):Observable<Tarefa[]>{
    return this.http.put<Tarefa[]>(`${this.apiUrl}/update`, tarefa);
  }

  DeleteTask(id:number):Observable<Tarefa[]>{
    return this.http.delete<Tarefa[]>(`${this.apiUrl}/delete/${id}`);
  }
}

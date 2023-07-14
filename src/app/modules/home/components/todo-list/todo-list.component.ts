import { Component, DoCheck } from '@angular/core';
//Interface
import { Tasklist } from '../../model/tasklist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{
  public taskList: Array<Tasklist> = JSON.parse(localStorage.getItem("list") || '[]')

  constructor() { }

  ngDoCheck(){
    this.setLocalStorage()
  }

  public setEmitItemTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja realmente excluir todas as tarefas?")

    if (confirm){
      this.taskList = []
    }
  }

  public validationInput(event: string, index: number) {

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?")

      if (confirm){
        this.deleteItemTaskList(index)
      }
    }

  }

  public setLocalStorage(){

    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }

  }
}

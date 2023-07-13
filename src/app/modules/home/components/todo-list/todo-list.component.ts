import { Component } from '@angular/core';
//Interface
import { Tasklist } from '../../model/tasklist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Array<Tasklist> = [
  ] 

  constructor() { }

  ngOnInit(): void {
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

}

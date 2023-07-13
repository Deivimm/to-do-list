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
      { task: "Minha nova Task", checked: true },
      { task: "Minha nova Task 2", checked: false }
  ] 

  constructor() { }

  ngOnInit(): void {
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

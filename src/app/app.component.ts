import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'; // this package was needed in order to bind to HTML file
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task=''; // created to store list of tasks from the input field
  taskList: {id:number, name:string, isDone: boolean}[]= [] //created to show the stored tasks 
  trackTaskId(index: number, task: any): number { //functiona created for checkbox 
    return task.id;
  }
  

addTask(){
this.taskList.push({id:this.taskList.length+1,name:this.task, isDone:false}) // function to create id and list the tasks when the button is clicked
console.log(this.taskList);
this.task = ''; //it makes the inputbox empty when clicked

}

// Function to delete a task by its id
deleteTask(id:number){ 

  //function removes the task from the list using the id. using filter array method
  this.taskList = this.taskList.filter((item) => item.id !== id);
  //If the id of the task is not equal to the provided id, it returns true (meaning the task should be included in the filtered array).
//If the id of the task is equal to the provided id, it returns false (meaning the task should not be included in the filtered array).
   

}

taskDone(task: { id: number, name: string, isDone: boolean }) {
  task.isDone = !task.isDone; // This is the function that handles marking a task as done or not done.
}

}

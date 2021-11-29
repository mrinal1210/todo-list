/* eslint-disable prefer-const */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskName: any = '';
  taskList = [];
  enteredTask: string;

  constructor(
    private alertCtrl: AlertController
  ) {}

  addTask() {
    if(this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  updateTask(index) {
    this.alertCtrl.create({
      header: 'Update task?',
      subHeader: 'Type in your new task to update.',
      inputs: [
        {
          name: 'enteredTask',
          type: 'text',
          placeholder: 'Task'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: (task) => {
            this.taskList[index] = task.enteredTask;
          }
        },
      ]
    }).then(alertEle => {
      alertEle.present();
    });
  }
}

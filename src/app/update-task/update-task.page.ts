import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  categories = []
  categorySelectedCategory

  newTaskObj ={}
  itemName
  itemDueDate
  itemPriority
  itemCategory



  constructor(public modalCtrl:ModalController, public todoService:TodoService) { }

  ngOnInit() {
    this.categories.push('School')
    this.categories.push("Personal")
    this.categories.push('Spritual')
    

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory


  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);

}

async dismis(){
  await this.modalCtrl.dismiss()

}
async update(){
  this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority: this.itemPriority, itemCategory:this.categorySelectedCategory})
  let wid = this.task.key
  await this.todoService.updateTask(wid,this.newTaskObj)
  this.dismis()

}
}
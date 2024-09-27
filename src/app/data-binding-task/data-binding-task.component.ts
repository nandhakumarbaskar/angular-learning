import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-task',
  templateUrl: './data-binding-task.component.html',
  styleUrls: ['./data-binding-task.component.css']
})
export class DataBindingTaskComponent {
  title: string
  description: string
  imgUrl: string
  siteUrl: string
  addBackground: boolean

}

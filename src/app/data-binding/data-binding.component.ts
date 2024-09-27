import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title= "Data Binding"
  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3qiEQFXxzJ_8tDjj4_hh8XU7pzMjVuUdLA&s"
  changeColor= true
  applyClass = true

  username = "Nandha"

  eventBinding($event: any){
    if($event.keyCode == 13){      
    console.log("event", $event.target.value)
    }

  }

  eventFiltering($event: any){
    console.log("event", $event.target.value)
  }

  templateRef($event: HTMLInputElement){
    console.log($event.value)

  }

}

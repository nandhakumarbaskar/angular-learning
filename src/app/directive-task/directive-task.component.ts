import { Component } from '@angular/core';
interface UserDetails {
  name: string
  email: string
  address: string
}

@Component({
  selector: 'app-directive-task',
  templateUrl: './directive-task.component.html',
  styleUrls: ['./directive-task.component.css']
})
export class DirectiveTaskComponent {
  userDetails: UserDetails[] = []
  name: string
  email: string
  address: string

  saveData(){
    this.userDetails.push({
      name: this.name,
      email: this.email,
      address: this.address
    })
    

  }

  removeItem(i: number){
    this.userDetails.splice(i, 1)

  }

}

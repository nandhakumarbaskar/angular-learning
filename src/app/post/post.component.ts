import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit {
  parentMessage = 'Message from parent'
  @ViewChild(PostListComponent) childComp: any
  childMessage: string
  outputChildMessage: string

  constructor(){
    console.log(this.childComp)
  }

  ngAfterViewInit(): void {
    console.log("afterview init", this.childComp)
    this.childMessage = this.childComp.childMessage
  }

  fromEvent($event: string){
    this.outputChildMessage = $event

  }

}

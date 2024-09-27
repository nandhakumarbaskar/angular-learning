import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit  {
  @Input() fromParent: string
  childMessage: string = "Message from child"
  outputChildMessage: string = "Message from output child"

  @Output() eventMessage = new EventEmitter<string>()

  constructor(){
    console.log("fromParent", this.fromParent)
  }
ngOnInit(): void {
  console.log("fromParent", this.fromParent)
}
outputChild(){
  this.eventMessage.emit(this.outputChildMessage)
}

}

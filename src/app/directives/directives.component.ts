import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

divVal: string = "default"
  changeDiv(val: string){
    this.divVal = val
  }

}

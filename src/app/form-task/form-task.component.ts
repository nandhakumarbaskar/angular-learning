import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  form1 = "Template driven form"
  form2 = "Reactive form"

  form: any

  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ] ),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')
      ]),
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl("", Validators.required),
        contactNo: new FormControl("", [
          Validators.required,
          Validators.pattern('[0-9]')
        ])
      }),
      skills: new FormArray([])
    })
    
  }

  onSubmit(f: NgForm){
    console.log("form:", f)

  }

  onChange(fullName: NgModel){
    console.log("fullName", fullName)

  }

  onReactiveSubmit(){
    console.log("form", this.form.value)
  }

  get FullName(){
    return this.form.get("fullName")
  }
  get Email(){
    return this.form.get("email")
  }
  get Address(){
    return this.form.get("contactDetails.address")
  }

  get shippingAddress(){
    return this.form.get("contactDetails.shippingAddress")
  }
  get contactNo(){
    return this.form.get("contactDetails.contactNo")
  }

  addSkills(skill: HTMLInputElement){
    
    this.Skills.push(new FormControl(skill.value))
    console.log(this.form.value)
    skill.value = ''

  }

  get Skills(){
    return (this.form.get("skills") as FormArray)
  }

}

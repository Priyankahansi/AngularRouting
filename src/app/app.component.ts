import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}

  title = 'newangular';
  name="Praju"
  inputData:string="" ;
  nameError:string="";
  imgPhoto="../assets/Images/image2.jpeg"

 clickweb(){
  window.open("http://www.bridgelabz.com")
}

  inputName()
  { 
  console.log(this.inputData);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.inputData))
  {
  this.nameError="";
  return;
}
this.nameError="Name is incorrect";
}
 onClick(){
  this.router.navigate(['/first'])
}
click(){
  this.router.navigate(['/second'])
}
}
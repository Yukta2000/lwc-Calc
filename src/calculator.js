import { LightningElement } from "lwc";

export default class calculator extends LightningElement{
  num1=0;
  num2=0;
  answer;

  setNum1(event){
   this.num1 = Number(event.target.value);
  }

  setNum2(event){
   this.num2 = Number(event.target.value);
  }

  add(){
   this.answer = this.num1 + this.num2;
  }

  subtract(){
    this.answer = this.num1 - this.num2;
  }

  multiply(){
   this.answer = this.num1 * this.num2;
  }

  divide(){
    this.answer = this.num1 / this.num2;
  }

  clear(){
    this.num1="";
    this.num2="";
    this.template.querySelector(".num1").value="";
    this.template.querySelector(".num2").value="";
    this.answer="";
  }
}
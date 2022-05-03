import { LightningElement } from "lwc";
import {add,subtract,multiply,divide} from "c/calcOperations.js";

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

  clear(){
    this.num1="";
    this.num2="";
    this.template.querySelector(".num1").value="";
    this.template.querySelector(".num2").value="";
    this.answer="";
  }
  
  setAnswer(event){
    let op = event.target.classList[0];
    switch(op){
      case "sum": this.answer=add(this.num1,this.num2);
                  break;
      case "sub": this.answer= subtract(this.num1,this.num2);
      break;
      case "mul": this.answer=multiply(this.num1,this.num2);
      break;
      case "divide": this.answer=divide(this.num1,this.num2);
      break;
      case "clear": this.clear();
    }
  }

}
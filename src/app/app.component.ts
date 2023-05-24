import { Component,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('displayText') inputName:any;

  title = 'app';
  show=false
  count=0;
  showdata=false
  inputText: any='';
  display(){
    if(this.show===true)
      this.show=false;
    else
      this.show=true;
    this.count++;
    console.log(`The display button is clicked ${this.count} times`);
  }

  countnumber=0;
  displayText='';
  names='';
  displayData(value:string)
  {
    // console.log(value)
    let ele=document.getElementById('displayPara');
    if(value.trim()!=='')
    {
      this.countnumber++;
      if(this.countnumber%5===0)
      {
        let span=document.createElement('span');
        span.innerHTML=' '+value;
        span.style.color='blue';
        ele?.appendChild(span);
      }
      else
      {
        let span=document.createElement('span');
        span.innerHTML=' '+value;
        ele?.appendChild(span);
      }
    this.inputName.nativeElement.value = ' ';
    }
    else
    {
      alert('Please enter a non empty text');
    }
    
    
  }
}

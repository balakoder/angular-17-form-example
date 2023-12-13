import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 17 forms Example';
  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'Israel'),
    new country('4', 'Denmark'),
    new country('5', 'England'),
    new country('6', 'Egypt'),
    new country('7', 'Germany'),
    new country('8', 'Iceland'),
    new country('9', 'Indonesia'),
    new country('10', 'Ireland')
   
    
  ];
}
 

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: []
})
export class ErrorComponent implements OnInit {
  
  @Input() errorMessage: string;
  constructor() { }

  ngOnInit(): void {
  }

}

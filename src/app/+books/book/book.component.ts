import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit() {
  }

}

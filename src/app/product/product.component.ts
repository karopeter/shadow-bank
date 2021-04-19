import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productName: String = 'A Tree';
  @Output() productClicked = new EventEmitter();
  operations = 'Analysis';

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(): void {
     this.productClicked.emit();
  }

}

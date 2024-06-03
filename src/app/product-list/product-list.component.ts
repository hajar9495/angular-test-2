import { Component, Input } from '@angular/core';
import { ListAngular } from '../list-angular';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // listOfString: string[] = ['mark', 'paul', 'jacques', 'mickeal'];

  @Input() listAngular!: ListAngular;
}

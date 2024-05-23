import {Component} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "Milosz@.pl", 50000),
    new SalesPerson("John", "Doe", "An@.pl", 40000),
    new SalesPerson("Claire", "Murphy", "El@.pl", 90000),
    new SalesPerson("Mai", "Truong", "Al@.pl", 60000),
  ]
}

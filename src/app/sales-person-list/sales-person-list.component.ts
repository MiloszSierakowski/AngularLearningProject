import {Component} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Milosz", "Sierakowski", "Milosz@.pl", 5000),
    new SalesPerson("Andrzej", "Sierakowski", "An@.pl", 4000),
    new SalesPerson("Ela", "Sierakowska", "El@.pl", 3000),
    new SalesPerson("Ala", "Sierakowska", "Al@.pl", 2000),
  ]
}

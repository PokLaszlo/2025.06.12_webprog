import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  employeeList = [
    {id: 1, name: "unknown", city: "unknown", salary: 1},
    {id: 2, name: "Almási Andrea", city: "Szolnok", salary: 10},
    {id: 3, name: "Békesi Béla", city: "Szeged", salary: 100},
    {id: 4, name: "Cinkotai Cecília", city: "Szekszárd", salary: 200},
    {id: 5, name: "Dinka Dénes", city: "Szilvásvárad", salary: 300},
    {id: 6, name: "Egri Endre", city: "Szentes", salary: 400}
  ]
}

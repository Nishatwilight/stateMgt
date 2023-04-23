import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/models/customer';
import { SelectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit{  // 12 intha component store a eruka property a eduthu kaatum so dependence inject pannanum

 customers$!: Observable<Customers[]> //14

  constructor( private store: Store){ // 13
    this.customers$ = this.store.pipe(select(SelectCustomers))  // 15 Store la erunthu data vanga pipe use aaguthu  // select - store la data eduka help pannum
  }
  ngOnInit() : void{

  }
}


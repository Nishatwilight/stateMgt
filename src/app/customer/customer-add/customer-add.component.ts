import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customers } from 'src/app/models/customer';
import { CustomerState } from '../store/reducer/customer.reducer';
import { addCustomers } from '../store/action/customer.actions';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
 constructor(
  private store: Store<CustomerState>,  //21  CustomerState - reducer file la erunthu kedaikum
  ){ 

 }

  addCustomerss(customerName: string){ //18
    // console.log('customerName', customerName);
    
    const customers = new Customers() //19
        console.log('customerName', customers);

    customers.name = customerName  //20
    console.log('customer.name', customers.name);
    
    this.store.dispatch(addCustomers(customers))   // 21 dispatch kulla ethachi action function a call pannanum  //arg-customer -kulla eruka data than state kulla poi serapothu  --go to html

    console.log('**',  this.store.dispatch(addCustomers(customers)));
    
  } 
}

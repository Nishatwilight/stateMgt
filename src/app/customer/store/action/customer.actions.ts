import { createAction, props } from '@ngrx/store';
import { Customers } from 'src/app/models/customer';

export const addCustomers = createAction(
  '[Customer] Add Customers',
  (customerr:Customers) =>({customerr}) //1 - go to customer.reducer.ts
);





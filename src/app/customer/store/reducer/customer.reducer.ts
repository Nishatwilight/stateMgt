import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from 'src/app/customer/store/action/customer.actions';//3
import { Customers } from 'src/app/models/customer';

export const customerFeatureKey = 'Whatever';

export interface CustomerState {
  customer: Customers[]; //2
}

export const initialState: CustomerState = {
  customer: [] //3
};

export const reducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers, (states: CustomerState, {customerr})=>( //4
    {
      ...states, //5
      customers:[...states.customer,customerr] //6 - go to customer.selector.ts
    }

  ))
);


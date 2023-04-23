import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer'; //8  --reducer file la erunthu than state vanganum so reducer a import pandrom  (fromCustomer - namba vakkura name)


export const SelectCustomerState = createFeatureSelector<fromCustomer.CustomerState> (   //7
    fromCustomer.customerFeatureKey //8
)

export const SelectCustomers = createSelector(  //9
    SelectCustomerState, //10
    (state: fromCustomer.CustomerState) => state.customer //11 - then create ng g c customer-view
)
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customers: Customer[] = [];

  customerform!: FormGroup;
  searchText: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }


  ngOnInit(): void {
    this.customerform = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      subscriptionType: ['', Validators.required],
      contactNumber: ['', Validators.required]
    })

    this.getCustomers();

  }

  private getCustomers() {
    this.api.getCustomersList().subscribe(data=> {
      this.customers = data;
    })
  }

  deleteCustomer(id:number) {
    this.api.deleteCustomer(id).subscribe(data=> {
      console.log(data);
      this.getCustomers();
    })
  }
  

editCustomer(id: number) {
    this.router.navigate(['/update', id]);
}
  
  
  
addCustomer(customerData: Customer) {
  this.api.addCustomer(customerData).subscribe(
    (response) => {
      console.log('Customer added successfully:', response);
      this.customerform.reset();
      this.getCustomers(); // Refresh customer list after addition
    },
    (error) => {
      console.error('Error adding customer:', error);
      // Handle error appropriately, e.g., show an error message
    }
  );
}

onSubmit() {
  if (this.customerform.valid) {
    const newCustomer = this.customerform.value;
    this.addCustomer(newCustomer);
  } else {
    console.error('Form invalid');
    // Handle invalid form submission, e.g., show a validation message
  }
}
}

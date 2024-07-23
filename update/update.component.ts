import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { Customer } from '../customer';




@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{

  public customerID!: number;
  public customer!: Customer;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:Params) => {

      this.customerID= param['get']("id");
      //console.log("customer id is", this.customerID);

    })
    this.api.fetchData(this.customerID).subscribe((data: Customer)=> {
      this.customer = data;
    })

  }

  updateCustomer(): void {
    this.api.updateCustomer(this.customer, this.customerID).subscribe((res: Customer) => {
      this.router.navigate(['/list']);
    });
  }

  backToList() {
    this.router.navigate(['/list']);
}



}


 

  




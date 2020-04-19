import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  allCustomer: HeenaElectronics.Customer[];
  tableType = 'report';
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'address', header: 'Address' },
    { field: 'contactNumber', header: 'Contact Number' },
    { field: 'createdDate', header: 'Created Date' },
    { field: 'electronicCard.number', header: 'Card Number' },
    { field: 'electronicCard.point', header: 'Avalable Point' },
    // { field: 'electronicCard.number', header: 'Card Number', display: 'object' },
  ];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      (allCust) => {
        this.allCustomer = allCust;
      });
  }

}

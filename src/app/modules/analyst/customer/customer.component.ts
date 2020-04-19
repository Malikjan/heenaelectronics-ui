import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Subscription, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  showForm = false;
  customerForm: FormGroup;
  subscribtion: Subscription;
  allCustomer: HeenaElectronics.Customer[];
  showInEdit = false;
  tableType = 'customer';
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'address', header: 'Address' },
    { field: 'contactNumber', header: 'Contact Number' },
    { field: 'createdDate', header: 'Created Date', isDate: true },
    { field: 'electronicCard.number', header: 'Card Number', type: 'object', object: 'number' }
  ];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getAllCustomer();
  }

  showCreateForm() {
    this.showInEdit = false;
    this.showForm = true;
    this.initForm();
  }

  initForm() {
    this.showInEdit = false;
    this.customerForm = this.fb.group({
      id: [''],
      name: ['', Validators.compose([Validators.required])],
      contactNumber: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      createdDate: [''],
      electronicCard: this.fb.group({
        number: ['', Validators.compose([Validators.required])],
        point: [''],
        addPoint: ['', Validators.compose([Validators.required])],
        redeemPoint: ''
      }),
      history: this.fb.group({
        createdDate: [''],
        addPoint: ['100'],
        redeemPoint: ''
      })
    });
  }

  editForm(customer: HeenaElectronics.Customer) {
    this.showInEdit = true;
    this.customerForm = this.fb.group({
      id: [customer.id],
      name: [customer.name],
      contactNumber: [customer.contactNumber],
      address: [customer.address],
      createdDate: [new Date(customer.createdDate)],
      electronicCard: this.fb.group({
        number: [customer.electronicCard.number],
        point: [customer.electronicCard.point],
        redeemPoint: '',
        addPoint: ''
      })
    });
  }

  create() {
    let id = this.customerForm.get('id').value;
    if (id == '') {
      let avalabelPoint = this.customerForm.get('electronicCard').get('addPoint').value;
      this.customerForm.get('electronicCard').get('point').patchValue(avalabelPoint);
      // this.customerForm.get('electronicCard').get('addPoint').patchValue(null);
      this.customerForm.get('createdDate').setValue(new Date());
      this.customerForm.get('history').patchValue({
        createdDate: new Date()
      });
      this.subscribtion = this.customerService.create(this.customerForm.value).subscribe(
        (result) => {
          this.showForm = false;
          this.getAllCustomer();
          this.toastr.success('New customer added successfully !', 'Customer Added');
        });
    } else {
      this.subscribtion = this.customerService.update(this.customerForm.value).subscribe(
        (result) => {
          this.showForm = false;
          this.getAllCustomer();
          this.toastr.info('customer updated successfully !', 'Customer Update');
        });
    }
  }

  clear() {
    this.customerForm.reset();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(
      (allCust) => {
        this.allCustomer = allCust;
      });
  }

  deleteCustomerById(id: String) {
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(
      (data) => {
        this.getAllCustomer();
        this.toastr.success('Customer deleted successfully !', 'Customer Deleted');
      });
  }

  editCustomer(customer: HeenaElectronics.Customer) {
    this.showForm = true;
    console.log(customer.id);

    this.getAllHistoryByCustomerID(customer.id);
    console.log(customer);
    this.editForm(customer);
    this.toastr.info('', 'Edit Customer');
  }

  calculateRedeemAmount() {
    console.log(this.customerForm.controls['address'].value);
  }

  calculateAddAmount() {
    console.log(this.customerForm.get('electronicCard').get('addPoint').value);
  }

  getAllHistoryByCustomerID(customerID: String) {
    this.customerService.getAllHistoryByCustomerID(customerID).subscribe();
  }

  ngOnDestroy() {
    //  if (this.showForm)
    // this.subscribtion.unsubscribe();
  }
}

import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
  providers: [ConfirmationService, DatePipe]
})
export class GridListComponent implements OnInit {

  @Input() records = [];
  @Input() cols;
  @Input() tableType;
  @Output() deleteEvent = new EventEmitter<String>();
  @Output() editEvent = new EventEmitter<HeenaElectronics.Customer>();

  constructor(
    private confirmationService: ConfirmationService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.records.map(element => {
    //   // return element.createdDate.  
    //   return element.createdDate = new Date(this.datePipe.transform(element.createdDate, 'dd-MM-yyyy'));
    // });


    // this.records.forEach(record => {
    //   this.cols.forEach(element => {
    //     if (element['isDate']) {
    //       record[element] = this.datePipe.transform(record[element.field], 'MMM d, y');
    //     }

    //     if (element['type'] == 'object') {
    //       record[element]['object'] = this.datePipe.transform(record[element.field], 'MMM d, y');
    //     }
    //   });

    // });
  }

  confirm(customer: HeenaElectronics.Customer) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this customer?',
      accept: () => {
        console.log(customer);
        this.deleteEvent.emit(customer.id);
      },
      reject: () => {

      }
    });
  }

  edit(customer: HeenaElectronics.Customer) {
    this.editEvent.emit(customer);
  }
}

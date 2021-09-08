import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TransportManagerService} from "../../../../_service/transport-manager.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-item-passenger-delivery',
  templateUrl: './item-passenger-delivery.component.html',
  styleUrls: ['./item-passenger-delivery.component.css']
})
export class ItemPassengerDeliveryComponent implements OnInit {

  @ViewChild('itemForm', {static: true}) public itemForm: NgForm;
  @ViewChild('passengerForm', {static: true}) public passengerForm: NgForm;
  deliveryDetail = {
    deliveryPersonName: '',
    deliveryPersonNic: '',
    contactNumber: '',
    address: '',
    companyName: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryDateTime: '',
    deliveryItemDetails: [],
    deliveryPassengerDetails: []
  };

  item;
  btnTextItem = 'Add';
  tblIndexItem;

  passenger;
  btnTextPassenger = 'Add';
  tblIndexPassenger;

  constructor(private transportManagerService: TransportManagerService, private router: Router, private notifierService: NotifierService) {
    this.item = this.getNewItem();
    this.passenger = this.getNewPassenger();
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.deliveryDetail.deliveryDateTime = this.deliveryDetail.deliveryDate + 'T' + this.deliveryDetail.deliveryTime
    this.transportManagerService.addPassengerItemDelivery(this.deliveryDetail).subscribe((deliveryDetail) => {
      this.router.navigate(['/main/view_item_passenger_delivery'])
    })
  }

  onSubmitItem() {
    if (this.deliveryDetail.deliveryItemDetails.length === 0) {
      this.deliveryDetail.deliveryItemDetails.push(this.item);
      this.notifierService.notify("success", "Item added successfully");
      this.setNewItem();
    } else {
      let count = 0;
      for (let i = this.deliveryDetail.deliveryItemDetails.length - 1; i >= 0; i--) {
        if (this.btnTextItem === 'Update' && i === this.tblIndexItem) {
          continue;
        }
        let item = this.deliveryDetail.deliveryItemDetails[i];
        if (
          (item.itemName !== '' && item.itemName === this.item.itemName)
        ) {
          count++;
        }
        if (item.itemName === this.item.itemName) {
          this.notifierService.notify("error", "Duplicate Item Name found");
          break;
        }
      }
      if (this.btnTextItem === 'Add' && count === 0) {
        this.deliveryDetail.deliveryItemDetails.push(this.item);
        this.notifierService.notify("success", "Item added successfully");
        this.setNewItem();
      } else if (this.btnTextItem === 'Update' && count === 0) {
        this.deliveryDetail.deliveryItemDetails[this.tblIndexItem] = this.item
        this.notifierService.notify("success", "Item updated successfully");
        this.setNewItem();
      }
    }
  }

  onSubmitPassenger() {
    if (this.deliveryDetail.deliveryPassengerDetails.length === 0) {
      this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
      this.notifierService.notify("success", "Passenger added successfully");
      this.setNewPassenger();
    } else {
      let count = 0;
      for (let i = this.deliveryDetail.deliveryPassengerDetails.length - 1; i >= 0; i--) {
        if (this.btnTextPassenger === 'Update' && i === this.tblIndexPassenger) {
          continue;
        }
        let passenger = this.deliveryDetail.deliveryPassengerDetails[i];
        if (
          (passenger.passengerNic !== '' && passenger.passengerNic === this.passenger.passengerNic) ||
          (passenger.contactNumber !== '' && passenger.contactNumber === this.passenger.contactNumber)
        ) {
          count++;
        }
        if (passenger.passengerNic === this.passenger.passengerNic && passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate NIC and Contact No found");
          break;
        } else if (passenger.contactNumber === this.passenger.contactNumber) {
          this.notifierService.notify("error", "Duplicate Contact No found");
          break;
        } else if (passenger.passengerNic === this.passenger.passengerNic) {
          this.notifierService.notify("error", "Duplicate NIC found");
          break;
        }
      }
      if (this.btnTextPassenger === 'Add' && count === 0) {
        this.deliveryDetail.deliveryPassengerDetails.push(this.passenger);
        this.notifierService.notify("success", "Passenger added successfully");
        this.setNewPassenger();
      } else if (this.btnTextPassenger === 'Update' && count === 0) {
        this.deliveryDetail.deliveryPassengerDetails[this.tblIndexPassenger] = this.passenger
        this.notifierService.notify("success", "Passenger updated successfully");
        this.setNewPassenger();
      }
    }
  }

  setItem(item, i) {
    this.tblIndexItem = i;
    this.item.itemName = item.itemName;
    this.item.itemType = item.itemType;
    this.item.itemQty = item.itemQty;
    this.btnTextItem = 'Update';
  }

  setPassenger(passenger, i) {
    this.tblIndexPassenger = i;
    this.passenger.passengerName = passenger.passengerName;
    this.passenger.passengerNic = passenger.passengerNic;
    this.passenger.contactNumber = passenger.contactNumber;
    this.passenger.passengerType = passenger.passengerType;
    this.btnTextPassenger = 'Update';
  }

  setNewItem() {
    this.item = this.getNewItem();
    this.itemForm.resetForm(this.item);
    this.btnTextItem = 'Add';
  }

  setNewPassenger() {
    this.passenger = this.getNewPassenger();
    this.passengerForm.resetForm();
    this.btnTextPassenger = 'Add';
  }

  getNewItem() {
    return {
      itemName: '',
      itemType: '',
      itemQty: 1
    };
  }

  getNewPassenger() {
    return {
      passengerName: '',
      passengerNic: '',
      contactNumber: '',
      passengerType: ''
    };
  }
}

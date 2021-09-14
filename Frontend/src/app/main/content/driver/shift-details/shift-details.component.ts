import { Component, OnInit } from '@angular/core';
import {DriverService} from '../../../../_service/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {
  isModalTable = {
    text: '',
    openTable: false,
    foundUser: ''
  };

  shiftDetails = [];

  shift = {
    shiftId: '',
    attendance: '',
    endingTime: '',
    shiftDate: '',
    startingTime: '',
    driver_driverid: ''
  };

  constructor(private driverService: DriverService, private router: Router) {

  }


  ngOnInit(): void {
    this.getMyShift();
  }

  setOT(shiftDetails) {
    this.shift = shiftDetails;
    this.isTrueOrFalse(true);
  }

  goToUpdate(shiftDetails) {
    this.driverService.shift = shiftDetails;
    this.isTrueOrFalse(true);
  }

  isTrueOrFalse(reply) {
    this.isModalTable.openTable = reply;
  }

  getMyShift() {
    this.driverService.getMyShift(JSON.parse(localStorage.getItem('user'))['employeeID']).subscribe((myShift) => {
      this.shift = myShift;
      console.log(this.shift);
    });
  }
}

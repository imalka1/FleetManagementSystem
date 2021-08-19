import {Component, OnInit} from '@angular/core';
import {NavbarService} from "../_service/navbar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  topic;
  username;

  constructor(private navBarService: NavbarService, private router: Router) {
    if (this.router.url !== '/login') {
      navBarService.navTopic.subscribe((topic) => {
        this.topic = topic;
      });
    }
  }

  ngOnInit(): void {
    this.username = this.navBarService.username;
  }

}

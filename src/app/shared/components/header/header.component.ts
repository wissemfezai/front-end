
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services';
import { User } from '../../../_models';

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
    
export class HeaderComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string

  @Output() rightSidebarEvent = new EventEmitter<boolean>();
    currentUser: User;

    constructor(
        public navServices: NavService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
    }


    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit() {
  this.onProfile();
}

  onProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  onAddress() {
    this.router.navigate(['address'], { relativeTo: this.route });
  }

  onOrderHistory() {
    this.router.navigate(['order-history'], { relativeTo: this.route });
  }

  onFavorites() {
    this.router.navigate(['favorites'], { relativeTo: this.route });
  }
}

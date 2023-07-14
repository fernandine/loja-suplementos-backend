import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  path: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.generateBreadcrumb(this.activatedRoute.root);
      }
    });
  }

  generateBreadcrumb(route: ActivatedRoute | null): void {
    if (!route) {
      return;
    }

    this.path = [];
    let currentRoute: ActivatedRoute | null = route;
    while (currentRoute) {
      const routeData = currentRoute.snapshot.data;
      if (routeData && routeData['title']) {
        this.path.unshift(routeData['title']);
      }
      currentRoute = currentRoute.firstChild;
    }
  }
}

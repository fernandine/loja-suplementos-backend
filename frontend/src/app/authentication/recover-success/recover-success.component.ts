import { Location} from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recover-success',
  templateUrl: './recover-success.component.html',
  styleUrls: ['./recover-success.component.scss']
})
export class RecoverSuccessComponent {

  @Input() email: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
    });
  }

  onCancel() {
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      cpf: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.userService.getAuthenticatedUser().subscribe(
      (user: User) => {
        this.userForm.patchValue(user);
      },
      (error) => {
        console.log(error);
      }
    );
    this.updateUser();
  }

  updateUser() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.userService.updateUser(user.id, user).subscribe(() => {
        this.loadUserData();
        this.userForm.reset();
      });
    }
  }

  cancelEdit() {
    this.userForm.reset();
  }
}


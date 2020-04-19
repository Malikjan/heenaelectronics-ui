import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api'
import { LoginService } from 'src/app/services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  subscribtion: Subscription;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  initForm() {
    this.userForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.initForm();
  }

  checkCurrentLoggedInUser() {
    this.subscribtion = this.loginService.checkCurrentLoggedInUser(this.userForm.value).subscribe(
      (user: HeenaElectronics.User) => {
        if (user != null) {
          localStorage.setItem('User', JSON.stringify(user));
          this.toastr.info('Login Successfully !', user.name);
          this.router.navigateByUrl('/' + user.role + '/' + 'dashboard');
        } else {
          this.toastr.error('Please enter valid details !', 'Invalid User');
          this.initForm();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

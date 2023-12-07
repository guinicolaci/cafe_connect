import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private LoginService: LoginService) {}


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: '',
      senha: ''
    })
  }

  fazerLogin(): void {
  this.LoginService.login(this.formGroup.value);
  this.onClean();
  }

  onClean(): void {
    this.formGroup.reset();
  }
}

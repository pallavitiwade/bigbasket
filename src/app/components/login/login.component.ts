import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 registrationForm!: FormGroup;



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.registrationForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      Number: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]

    });
  }


  onSubmit(): void {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;
    }
      const formData = this.registrationForm.value;

    console.log('Form Data:', formData);

    /*
      Save login information through AuthService
    */

    const result =this.authService.login(
      formData.name,
      formData.Number,
      formData.email
    );

    console.log('login result',result)
    /*
      After successful login
      directly go to HomeComponent
    */
if(result){

    this.router.navigate(['/home']);
  }

  }
  
}



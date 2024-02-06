import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm!: FormGroup;

  /*constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void{
    if (this.loginForm.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.error('Form validation failed!');
    }
  }*/
  submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
}

handleSubmit = function(e: { preventDefault: () => void; }) {
    setTimeout(() => { 
        alert("Submitted");          
    }, 1000);

    e.preventDefault();
}
}
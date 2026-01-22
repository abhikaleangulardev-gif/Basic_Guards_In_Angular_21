import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private authservice:Auth) {}

  onSubmit() {
    // debugger;
    // Simple authentication logic (replace with real authentication)
    if (this.username === 'admin' && this.password === 'admin123') {
      // Navigate to a protected route or dashboard
      this.authservice.login(this.username);
      this.router.navigate(['/dashboard']);
    }else if(this.username === 'user' && this.password === 'user123'){
       this.authservice.login(this.username);
      this.router.navigate(['/dashboard']);
    }else {
      alert('Invalid credentials');
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  name: string = 'Varun L';
  title: string = 'frontend developer';
  mailId: string = 'varunl.3696@gmail.com';
  mobile: string = '+91 9551799309';
  DOB: string = '03-06-1996';
  location: string = 'Chennai, Tamil Nadu';

  openInstagram(): void {
    window.open(
      'https://www.instagram.com/varunl95/',
      '_blank'
    );
  }

  openLinkedIn(): void {
    window.open(
      'https://www.linkedin.com/in/varunl95/',
      '_blank'
    );
  }

  openTwitter(): void {
    window.open(
      'https://x.com/varunl95?t=7eJo3dUxE4jwp31DUwT_6w&s=08',
      '_blank'
    );
  }

  openGithub(): void {
    window.open(
      'https://github.com/varunl-dev',
      '_blank'
    );
  }
}

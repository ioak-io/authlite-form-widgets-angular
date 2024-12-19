import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css'],
})
export class GoogleSigninComponent implements OnInit {
  @Output() onGoogleAuth = new EventEmitter();
  user: any;
  isLoggedIn = false;
  constructor() {}

  ngOnInit() {}

  handleGoogleLogin() {
    const clientId =
      '1080184469568-apl20tffhv0fthvevi6uh44bqlj7ambk.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:6006/';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';
    const responseType = 'code';

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=${responseType}&scope=${encodeURIComponent(
      scope
    )}&include_granted_scopes=true`;

    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open the new popup window
    const newWindow = window.open(
      oauthUrl,
      'GoogleLogin',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    // Check if the popup window was closed by the user
    const checkWindowClosed = setInterval(() => {
      if (newWindow && newWindow.closed) {
        clearInterval(checkWindowClosed);
        console.log('OAuth window closed');
        this.onGoogleAuth.emit();

        const code = localStorage.getItem('code');
        if (code) {
          console.log('code', localStorage.getItem('code'));
          fetch(`http://localhost:4000/api/auth?code=${code}`)
            .then((response) => response.json())
            .then((data) => {
              this.user = data.userDetails;
              this.isLoggedIn = !this.isLoggedIn;
              console.log('Fetched data:', this.user);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
      }
    }, 500);
  }

  handleMissingImage(event: any) {
    event.target.src = this.user.picture;
  }
}

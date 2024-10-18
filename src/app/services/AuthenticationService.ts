import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface SigninRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  given_name: string;
  family_name: string;
  email: string;
  password: string;
  retype_password: string;
}

interface ForgotPasswordRequest {
  email: string;
}

interface ResendVerifyLinkRequest {
  email: string;
}

interface SigninResponse {
  outcome: string;
  success: boolean;
  errorCode?: string;
  errorMessages: string;
  data: any;
}

interface ForgotPasswordResponse {
  success: boolean;
  errorCode?: string;
  errorMessages: string;
  data: any;
}

interface ResendVerifyLinkResponse {
  outcome: string;
  success: boolean;
  errorCode?: string;
  errorMessages: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_URL_PRODUCTION = "https://api.ioak.io:8010/api";
  private BASE_URL_LOCAL = "http://api.ioak.io:8010/api";

  constructor(private http: HttpClient) { }

  signin(environment: 'local' | 'production', realm: number | string, payloadRequest: SigninRequest): Observable<SigninResponse> {
    const payload: SigninRequest = {
      email: payloadRequest.email?.trim(),
      password: payloadRequest.password
    };

    const url = environment === 'local' ? this.BASE_URL_LOCAL : this.BASE_URL_PRODUCTION;

    const validationError = this.validateSigninForm(payload);
    if (validationError) {
      return throwError(validationError);
    }
    const headers = new HttpHeaders({
      "Content-type": "application/json; charset=UTF-8"
    });

    return this.http.post<SigninResponse>(`${url}/${realm}/user/auth/signin`, { response_type: "token", ...payload }, { headers })
      .pipe(
        catchError(error => this.processSigninResponse(error))
      ) as Observable<SigninResponse>;
  }

  signup(environment: 'local' | 'production', realm: number | string, payloadRequest: SignupRequest): Observable<SigninResponse> {
    const payload: SignupRequest = {
      given_name: payloadRequest.given_name?.trim(),
      family_name: payloadRequest.family_name?.trim(),
      email: payloadRequest.email?.trim(),
      password: payloadRequest.password,
      retype_password: payloadRequest.retype_password
    };

    const url = environment === 'local' ? this.BASE_URL_LOCAL : this.BASE_URL_PRODUCTION;

    const validationError = this.validateSignupForm(payload);
    if (validationError) {
      return throwError(validationError);
    }

    const headers = new HttpHeaders({
      "Content-type": "application/json; charset=UTF-8",
    });

    return this.http.post<SigninResponse>(`${url}/${realm}/admin/auth/signup`, { response_type: "token", ...payload }, { headers })
      .pipe(
        catchError(error => this.processSignupResponse(error))
      ) as Observable<SigninResponse>;
  }

  ForgotPasswordForm(environment: 'local' | 'production', realm: number | string, payloadRequest: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
    const payload: ForgotPasswordRequest = {
      email: payloadRequest.email?.trim(),
    };

    const url = environment === 'local' ? this.BASE_URL_LOCAL : this.BASE_URL_PRODUCTION;

    const validationError = this.validateForgotPasswordForm(payload);
    if (validationError) {
      return throwError(validationError);
    }

    return this.http.post<ForgotPasswordResponse>(`${url}/${realm}/user/auth/reset-password-link`, payload)
      .pipe(
        catchError(error => this.processForgotPasswordResponse(error))
      ) as Observable<ForgotPasswordResponse>;
  }

  resendVerifyLink(environment: 'local' | 'production', realm: number | string, payloadRequest: ResendVerifyLinkRequest): Observable<ResendVerifyLinkResponse> {
    const payload: ResendVerifyLinkRequest = {
      email: payloadRequest.email?.trim(),
    };

    const url = environment === 'local' ? this.BASE_URL_LOCAL : this.BASE_URL_PRODUCTION;

    const validationError = this.validateResendVerifyLinkForm(payload);
    if (validationError) {
      return throwError(validationError);
    }

    return this.http.post<ResendVerifyLinkResponse>(`${url}/${realm}/user/auth/verify-email/resend`, payload)
      .pipe(
        catchError(error => this.processResendVerifyLinkResponse(error))
      ) as Observable<ResendVerifyLinkResponse>;
  }

  private validateSigninForm(payload: SigninRequest): any {
    if (!payload.email || !payload.password) {
      return { error: 'Email and password are required.' };
    }
    return null;
  }

  private validateSignupForm(payload: SignupRequest): any {
    if (!payload.given_name) {
      return { error: 'Given name is required.' };
    }
    if (!payload.family_name) {
      return { error: 'Family name is required.' };
    }

    if (!payload.email) {
      return { error: 'Email address is required.' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return { error: 'Invalid email address.' };
    }
    if (!payload.password) {
      return { error: 'Password is required.' };
    }

    if (!payload.retype_password) {
      return { error: 'Please retype your password.' };
    }
    if (payload.password !== payload.retype_password) {
      return { error: 'Passwords do not match.' };
    }
    return null;
  }

  private validateForgotPasswordForm(payload: ForgotPasswordRequest): any {
    if (!payload.email) {
      return { error: 'Email address is required.' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return { error: 'Invalid email address.' };
    }
    return null;
  }

  private validateResendVerifyLinkForm(payload: ResendVerifyLinkRequest): any {
    if (!payload.email) {
      return { error: 'Email address is required.' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return { error: 'Invalid email address.' };
    }
    return null;
  }

  private processSigninResponse(error: any): Observable<SigninResponse> {
    if (error.status === 401) {
      return throwError({ error: 'Invalid email or password.', errorCode: 'incorrectPassword' });
    } else if (error.status === 404) {
      return throwError({ error: 'User not found.', errorCode: 'userNotFound' });
    } else {
      return throwError({ error: 'An unexpected error occurred. Please try again later.' });
    }
  }

  private processSignupResponse(error: any): any {
    if (error.status === 400 && error.error && error.error.message) {
      return { error: error.error.message };
    } else {
      return { error: 'An unexpected error occurred. Please try again later.' };
    }
  }

  private processForgotPasswordResponse(error: any): any {
    if (error.status === 404) {
      return throwError({ error: 'User does not exist.', errorCode: 'userNotFound' });
    } else if (error.status === 400) {
      return { error: 'Invalid Email request. Please try again later.' };
    } else {
      return { error: 'An unexpected error occurred. Please try again later.' };
    }
  }

  private processResendVerifyLinkResponse(error: any): any {
    if (error.status === 404) {
      return { error: 'User not found. Please check your email address.' };
    } else if (error.status === 403) {
      return { error: 'Access forbidden. Please try again later.' };
    } else if (error.status === 400) {
      return { error: 'Invalid request. Please try again later.' };
    } else {
      return { error: 'An unexpected error occurred. Please try again later.' };
    }
  }
}

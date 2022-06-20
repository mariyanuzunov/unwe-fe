import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDto } from './dto/register-user.dto';
import { environment } from 'src/environments/environment';
import { LoginUserDto } from './dto/login-user.dto';
import { IUser } from '../shared/interfaces/user.interface';
const RESOURCE_URL = environment.API_URL + 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(private http: HttpClient) {}

  register(data: RegisterUserDto) {
    return this.http.post(`${RESOURCE_URL}/register`, data);
  }

  login(data: LoginUserDto) {
    return this.http.post<IUser>(`${RESOURCE_URL}/login`, data);
  }

  getProfile(id: string) {
    return this.http.get<IUser>(`${RESOURCE_URL}/profile/${id}`);
  }
}

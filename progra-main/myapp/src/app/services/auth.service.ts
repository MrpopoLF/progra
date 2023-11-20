import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Cambia la URL según la configuración de tu servidor JSON

  constructor(private http: HttpClient) {}

  login(userCredentials: { username: string; password: string }) {
    // Realizar la solicitud POST al servidor JSON para verificar las credenciales del usuario
    return this.http.get(`${this.apiUrl}?username=${userCredentials.username}&password=${userCredentials.password}`);
  }
}
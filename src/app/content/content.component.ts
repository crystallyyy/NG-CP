import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private axiosService:AxiosService){}
  onLogin(input:any): void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    );
  }

    onRegister(input: any): void {
      console.log('onRegister()')
      this.axiosService.request(
        "POST",
        "/register",
        {
          username: input.username,
          password: input.password
        }
      )
    }
}

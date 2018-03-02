//import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  onSaveData(){
      this.dataStorageService.storeRecipes().subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
  
  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogOut(){
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

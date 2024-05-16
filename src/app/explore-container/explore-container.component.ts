import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']

})
export class ExploreContainerComponent implements OnInit {

  @Input() name?: string;

  users: any[] = [];

  constructor(private apiService: ApiService) {}
 
  ngOnInit() {
    this.apiService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
        
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
}

console.log ("FIN");
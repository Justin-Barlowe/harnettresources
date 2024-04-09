// home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../resource.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resources: any[] = [];

  constructor(private resourceService: ResourceService) { }

  // Fetch resources from the service
  ngOnInit() {
    this.resourceService.getResources().subscribe({
      next: (data) => {
        this.resources = data;
      },
      error: (error) => {
        console.error('Error fetching resources', error);
      }
    });
  }

}

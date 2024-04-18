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
  resourcesByCategory = new Map<string, any[]>();

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getResources().subscribe({
      next: (data) => {
        this.groupResourcesByCategory(data);
      },
      error: (error) => {
        console.error('Error fetching resources', error);
      }
    });
  }

  private groupResourcesByCategory(resources: any[]) {
    resources.forEach(resource => {
      const category = resource.Category;
      if (!this.resourcesByCategory.has(category)) {
        this.resourcesByCategory.set(category, []);
      }
      const categoryResources = this.resourcesByCategory.get(category);
      if (categoryResources) {
        categoryResources.push(resource);
      }
    });
  }
}

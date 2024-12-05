import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPage {

}
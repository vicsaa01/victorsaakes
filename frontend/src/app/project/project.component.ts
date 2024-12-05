import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string = 'Undefined project'
  @Input() description: string = ''
  @Input() icon: string = ''
  @Input() link: string = '/projects'
}

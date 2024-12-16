import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cventry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cventry.component.html',
  styleUrl: './cventry.component.css'
})
export class CVEntryComponent {
  @Input() institution!: string
  @Input() role!: string
  @Input() duration!: string
  @Input() bulletPoints!: string[]
}

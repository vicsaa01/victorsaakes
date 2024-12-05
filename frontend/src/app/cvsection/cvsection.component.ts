import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CVEntryComponent } from '../cventry/cventry.component';
import { CVEntry } from '../cventry/entry';

@Component({
  selector: 'app-cvsection',
  standalone: true,
  imports: [CommonModule, CVEntryComponent],
  templateUrl: './cvsection.component.html',
  styleUrl: './cvsection.component.css'
})
export class CVSectionComponent {
  @Input() title: string = ''
  @Input() entries: CVEntry[] = []
}

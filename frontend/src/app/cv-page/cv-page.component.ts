import { Component } from '@angular/core';
import { CVSectionComponent } from '../cvsection/cvsection.component';
import { CVEntry } from '../cventry/entry';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [CVSectionComponent],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CVPage {
  entries: CVEntry[] = [
    new CVEntry('F1-Connecting', 'Feb 2024 - Jun 2024', ['Python', 'PHP']),
    new CVEntry('Universitat Politècnica de València', 'Sep 2020 - Sep 2024', ['Java', 'Javascript', 'React.js']),
    new CVEntry('University of Texas at Austin', 'Aug 2022 - Dec 2022', ['Python', 'React.js']),
    new CVEntry('Erasmus Student Network', 'Sep 2023 - now', ['Teamwork skills', 'Leadership skills'])
  ]
}

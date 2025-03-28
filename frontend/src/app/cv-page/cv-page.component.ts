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
    new CVEntry('F1-Connecting', 'Intern', 'Feb 2024 - Jun 2024', [
      'Contributed to the development of an internal website used by call operators',
      'Wrote Python scripts to automate the refund processing workflow',
      'Designed the architecture for a future full-stack and distributed application'
    ]),
    new CVEntry('Universitat Politècnica de València', 'Degree in Computer Engineering', 'Sep 2020 - Sep 2024', [
      'Learned programming with Java',
      'Learned C and Javascript',
      'Developed a full-stack React app for the final degree project'
    ]),
    new CVEntry('University of Texas at Austin', 'BSc Computer Science (as exchange student)', 'Aug 2022 - Dec 2022', [
      'Learned Python',
      'Learned web development with React'
    ]),
    new CVEntry('Universidad Autónoma de Madrid', 'Degree in Physics', 'Sep 2019 - Jun 2020', [
      'Acquired mathematical and problem solving skills'
    ]),
    new CVEntry('Erasmus Student Network', 'Collaborator and head of culture', 'Sep 2023 - now', [
      'Improved team work and organizational skills by organizing student events',
      'Acquired leadership and management skills by leading the culture committee'
    ])
  ]
}

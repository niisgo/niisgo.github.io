import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'preussenstadion-cam',
      subtitle: 'Automatischer Bild-Archiver · LVM-Preußenstadion Umbau',
      description:
        'Skript das stündlich das aktuelle Bild der Hellmich-Baustellen-Webcam ' +
        'abruft und lokal mit Zeitstempel speichert — ' +
        'als persönliches digitales Bautagebuch des Stadionumbaus an der Hammer Straße.',
      tags: ['Automation', 'Webcam', 'SC Preußen Münster', 'Task Scheduler'],
      githubUrl: 'https://github.com/niisgo/preussenstadion-cam',
      featured: true,
      stats: [
        { label: 'Kamera', value: '1' },
        { label: 'Interval', value: 'stündlich' },
        { label: 'Format', value: 'JPG' },
      ]
    }
    // Weitere Projekte einfach hier als Objekt ergänzen
  ];
}

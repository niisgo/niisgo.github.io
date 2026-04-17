import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

export interface Skill {
  name: string;
  level: number;   // 0–100
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
    {
      label: 'Frontend',
      skills: [
        { name: 'HTML & CSS',           level: 90 },
        { name: 'JavaScript',           level: 80 },
        { name: 'TypeScript',           level: 70 },
        { name: 'Angular',              level: 65 },
        { name: 'React',                level: 60 },
      ]
    },
    {
      label: 'Backend',
      skills: [
        { name: 'Java',                 level: 70 },
        { name: 'Python',               level: 65 },
        { name: 'Node.js / Express',    level: 60 },
        { name: 'SQL / PostgreSQL',     level: 60 },
        { name: 'REST APIs',            level: 72 },
      ]
    },
    {
      label: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub',         level: 85 },
        { name: 'JetBrains IDEs',       level: 88 },
        { name: 'GitHub Copilot',       level: 90 },
        { name: 'Docker (Grundlagen)',  level: 45 },
        { name: 'Linux CLI',            level: 58 },
      ]
    }
  ];

  tools = [
    'IntelliJ IDEA', 'WebStorm', 'PyCharm',
    'GitHub Copilot', 'Git CLI', 'Postman',
    'Figma', 'Vercel', 'npm / pnpm',
    'ESLint', 'Prettier', 'Docker'
  ];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectBadge {
  label: string;
  kind: 'live' | 'wip';
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge?: ProjectBadge;
  featured?: boolean;      // Layout-Hervorhebung (grüner Hintergrund)
  repoPrivate?: boolean;   // Repo privat → „Code privat"-Hinweis statt totem Link
  liveUrl?: string;        // nur echte, öffentlich erreichbare Demo
  githubUrl?: string;      // nur setzen, wenn das Repo öffentlich ist
  stats?: ProjectStat[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [

    // ── 01 · Chrome-Extension (fertig, v1.0) ───────────────
    {
      title: 'matchday-ticket-overview',
      subtitle: 'Chrome-Extension (MV3) · Live-Ticketverfügbarkeit',
      description:
        'Chrome-Extension, die auf den Saalplan-Seiten von Eventim & Ticket-Onlineshop ' +
        'die aktuell freien Tickets als kleines Live-Overlay einblendet — Sitz-, Steh- und ' +
        'Gesamtplätze getrennt, mit Heim-/Gast-Wappen und Spieltermin. Gedacht für ' +
        'Restkarten und Nachverkäufe bei Fußballspielen.',
      tags: ['JavaScript', 'Chrome Extension', 'Manifest V3', 'Eventim', 'DOM-Overlay'],
      badge: { label: 'Fertig · v1.0', kind: 'live' },
      featured: true,
      repoPrivate: true,
      stats: [
        { label: 'Plattform', value: 'Chrome' },
        { label: 'Manifest', value: 'V3' },
        { label: 'Version', value: '1.0' },
      ]
    },

    // ── 02 · Next.js Full-Stack-Dashboard (fertig) ─────────
    {
      title: 'steam-stats-dashboard',
      subtitle: 'FragBoard · CS2-Statistik-Dashboard',
      description:
        'Full-Stack-Dashboard, das CS2-Statistiken über die Steam Web API abruft — K/D, ' +
        'Headshot-Quote, Winrate, Top-Waffen und Map-Verteilung als Charts. Login per ' +
        'Steam OpenID, Edge-Runtime auf Vercel, saubere Fehlerbehandlung bei privaten Profilen.',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'Recharts', 'Steam API', 'Edge'],
      badge: { label: 'Fertig', kind: 'live' },
      featured: true,
      repoPrivate: true,
      stats: [
        { label: 'Framework', value: 'Next.js' },
        { label: 'Charts', value: 'Recharts' },
        { label: 'Login', value: 'Steam' },
      ]
    },

    // ── 03 · Live-Dashboard PWA (in Arbeit) ────────────────
    {
      title: 'preussen-tracker',
      subtitle: 'Live-Dashboard (PWA) · SC Preußen Münster',
      description:
        'Installierbare Progressive Web App mit Ergebnissen, Tabelle, Spielplan, ' +
        'Spielerstatistiken und KI-Prognosen. Ein Puppeteer-Scraper im Express-Backend ' +
        'sammelt die Daten per Cronjob, das React-Frontend stellt sie offline-fähig dar.',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Express', 'Puppeteer', 'PWA'],
      badge: { label: 'In Arbeit', kind: 'wip' },
      repoPrivate: true,
      stats: [
        { label: 'Frontend', value: 'React' },
        { label: 'Backend', value: 'Express' },
        { label: 'Typ', value: 'PWA' },
      ]
    },

    // ── 04 · Angular-Browsergame (in Arbeit) ───────────────
    {
      title: 'ultras-infinity',
      subtitle: 'Ultras Infinity · Idle-/Clicker-Fußballgame',
      description:
        'Ein Idle-/Clicker-Browsergame rund um Fußball — gebaut als Angular-19-App ' +
        '(Standalone) mit strikt typisiertem TypeScript, Tailwind und sauberer, ' +
        'skalierbarer Architektur inklusive Linting und CI.',
      tags: ['Angular 19', 'TypeScript', 'Tailwind', 'SCSS', 'ESLint', 'Game'],
      badge: { label: 'In Arbeit', kind: 'wip' },
      repoPrivate: true,
      stats: [
        { label: 'Framework', value: 'Angular 19' },
        { label: 'Style', value: 'Tailwind' },
        { label: 'Typ', value: 'Idle-Game' },
      ]
    },

    // ── 05 · Webcam-Bildarchiv (fertig) ────────────────────
    {
      title: 'preussenstadion-cam',
      subtitle: 'Multi-Cam-Bildarchiv · LVM-Preußenstadion Umbau',
      description:
        'Web-App, die die Baustellen-Webcams des Stadionumbaus stündlich abruft und mit ' +
        'Zeitstempel archiviert — ein digitales Bautagebuch von West-, Ost- und Nordkurve. ' +
        'Läuft lokal per Node und fällt auf GitHub Pages auf versionierte Bild-Manifeste zurück.',
      tags: ['Python', 'JavaScript', 'Node.js', 'Automation', 'SC Preußen Münster'],
      badge: { label: 'Automation', kind: 'live' },
      featured: true,
      repoPrivate: true,
      stats: [
        { label: 'Kameras', value: '4' },
        { label: 'Interval', value: 'stündlich' },
        { label: 'Format', value: 'JPG' },
      ]
    },

  ];
}

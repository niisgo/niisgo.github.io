import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  visible = signal(false);

  ngOnInit(): void {
    requestAnimationFrame(() => {
      setTimeout(() => this.visible.set(true), 60);
    });
  }

  onImgError(event: Event): void {
    // Foto nicht vorhanden — img verstecken, Platzhalter zeigen
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const fallback = document.getElementById('photo-fallback');
    if (fallback) fallback.style.display = 'flex';
  }
}

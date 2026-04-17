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
    // Staggered entry — wait one frame so CSS transition fires
    requestAnimationFrame(() => {
      setTimeout(() => this.visible.set(true), 60);
    });
  }
}

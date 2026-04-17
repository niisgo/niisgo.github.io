import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor(public modal: ModalService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 48);
  }

  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollTo(id: string): void {
    this.closeMenu();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  }
}

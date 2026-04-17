import { Injectable, signal } from '@angular/core';

export type ModalId = 'impressum' | 'datenschutz' | null;

@Injectable({ providedIn: 'root' })
export class ModalService {
  active = signal<ModalId>(null);

  open(id: 'impressum' | 'datenschutz') {
    this.active.set(id);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.active.set(null);
    document.body.style.overflow = '';
  }
}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('revealed');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    observer.observe(this.el.nativeElement);
  }
}

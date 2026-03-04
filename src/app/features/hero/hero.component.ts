import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  loaded = signal(false);
  scrollIndicator = signal(true);
  private scrollSub!: () => void;

  readonly slides = [
    {
      image: 'assets/img/hall.avif',
      title: 'Una Mesa',
      titleItalic: 'para el placer',
      subtitle: 'Donde la buena cocina y el ambiente perfecto se encuentran.',
    },
    {
      image: 'assets/img/hero2.avif',
      title: 'Sabores',
      titleItalic: 'que perduran',
      subtitle: 'Platos que conquistan desde el primer bocado.',
    },
    {
      image: 'assets/img/hero.avif',
      title: 'El',
      titleItalic: 'buen comer',
      subtitle: 'Una experiencia pensada para disfrutar, compartir y volver.',
    },
  ];

  currentSlide = signal(0);
  private slideInterval!: ReturnType<typeof setInterval>;

  ngOnInit() {
    setTimeout(() => this.loaded.set(true), 300);

    this.slideInterval = setInterval(() => {
      this.currentSlide.update((i) => (i + 1) % this.slides.length);
    }, 5500);

    const onScroll = () => {
      this.scrollIndicator.set(window.scrollY < 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    this.scrollSub = () => window.removeEventListener('scroll', onScroll);
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
    this.scrollSub?.();
  }

  scrollDown() {
    const next = document.querySelector('#experiencia');
    next?.scrollIntoView({ behavior: 'smooth' });
  }

  goToSlide(i: number) {
    this.currentSlide.set(i);
  }
}

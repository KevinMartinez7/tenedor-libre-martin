import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
}

const SITE_URL = 'https://lodemartintandil.com.ar';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly doc = inject(DOCUMENT);

  /** Call once at app bootstrap with the default landing-page values */
  setDefault(): void {
    this.set({
      title: 'Lo de Martín — Restaurante en Tandil | Cocina de Autor',
      description:
        'Lo de Martín, restaurante de cocina de autor en Tandil, Buenos Aires. ' +
        'Reservas online, menú almuerzo y cena, catering y eventos. Las Heras 560, Tandil.',
      url: SITE_URL + '/',
      image: SITE_URL + '/assets/img/preview.jpg',
      imageAlt: 'Interior del restaurante Lo de Martín en Tandil',
      type: 'restaurant',
    });
  }

  set(config: SeoConfig): void {
    // ─ Title
    this.title.setTitle(config.title);

    // ─ Standard
    this.meta.updateTag({ name: 'description', content: config.description });

    // ─ Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Lo de Martín' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });
    if (config.url) this.meta.updateTag({ property: 'og:url', content: config.url });
    if (config.image) this.meta.updateTag({ property: 'og:image', content: config.image });
    if (config.imageAlt)
      this.meta.updateTag({ property: 'og:image:alt', content: config.imageAlt });

    // ─ Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    if (config.image) this.meta.updateTag({ name: 'twitter:image', content: config.image });
    if (config.imageAlt)
      this.meta.updateTag({ name: 'twitter:image:alt', content: config.imageAlt });

    // ─ Canonical
    if (config.url) this.updateCanonical(config.url);
  }

  private updateCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}

import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backdropAnimation, modalAnimation } from '../../shared/animations';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
}

const BASE = 'assets/img/gallery';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  animations: [modalAnimation, backdropAnimation],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  selectedItem = signal<GalleryItem | null>(null);

  readonly categories = ['Todos', 'Entradas', 'Principales', 'Postres', 'Sushi'];
  activeCategory = signal('Todos');
  animating = signal(false);

  readonly items: GalleryItem[] = [
    { id: 1, category: 'Entradas', image: `${BASE}/entrada/entrada1.avif` },
    { id: 2, category: 'Entradas', image: `${BASE}/entrada/entrada2.avif` },
    { id: 3, category: 'Entradas', image: `${BASE}/entrada/entrada3.avif` },
    { id: 4, category: 'Entradas', image: `${BASE}/entrada/entrada4.avif` },
    { id: 5, category: 'Principales', image: `${BASE}/principales/principales1.avif` },
    { id: 6, category: 'Principales', image: `${BASE}/principales/principales2.avif` },
    { id: 7, category: 'Principales', image: `${BASE}/principales/principales3.avif` },
    { id: 8, category: 'Principales', image: `${BASE}/principales/principales4.avif` },
    { id: 9, category: 'Principales', image: `${BASE}/principales/principales5.avif` },
    { id: 10, category: 'Principales', image: `${BASE}/principales/principales6.avif` },
    { id: 11, category: 'Postres', image: `${BASE}/postres/postre1.avif` },
    { id: 12, category: 'Postres', image: `${BASE}/postres/postre2.avif` },
    { id: 13, category: 'Postres', image: `${BASE}/postres/postre3.avif` },
    { id: 14, category: 'Postres', image: `${BASE}/postres/postre4.avif` },
    { id: 15, category: 'Postres', image: `${BASE}/postres/postre5.avif` },
    { id: 16, category: 'Sushi', image: `${BASE}/sushi/sushi1.avif` },
    { id: 17, category: 'Sushi', image: `${BASE}/sushi/sushi2.avif` },
    { id: 18, category: 'Sushi', image: `${BASE}/sushi/sushi3.avif` },
    { id: 19, category: 'Sushi', image: `${BASE}/sushi/sushi4.avif` },
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Todos' ? this.items : this.items.filter((i) => i.category === cat);
  });

  setCategory(cat: string) {
    if (cat === this.activeCategory()) return;
    this.animating.set(true);
    setTimeout(() => {
      this.activeCategory.set(cat);
      requestAnimationFrame(() => this.animating.set(false));
    }, 280);
  }

  openModal(item: GalleryItem) {
    this.selectedItem.set(item);
  }
  closeModal() {
    this.selectedItem.set(null);
  }
}

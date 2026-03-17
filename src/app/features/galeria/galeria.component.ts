import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backdropAnimation, modalAnimation } from '../../shared/animations';

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  type?: 'image' | 'video'; // Tipo de contenido: imagen o video
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

  readonly categories = ['Todos', 'Entradas', 'Principales', 'Pastas', 'Sushi', 'Parrilla', 'Postres'];
  activeCategory = signal('Todos');
  animating = signal(false);

  readonly items: GalleryItem[] = [
    { id: 1, category: 'Entradas', image: `${BASE}/entrada/entrada1.avif` },
    { id: 2, category: 'Entradas', image: `${BASE}/entrada/entrada2.avif` },
    { id: 3, category: 'Entradas', image: `${BASE}/entrada/entrada3.avif` },
    { id: 4, category: 'Entradas', image: `${BASE}/entrada/entrada4.avif` },
    { id: 5, category: 'Principales', image: `${BASE}/principales/principales1.png` },
    { id: 6, category: 'Principales', image: `${BASE}/principales/principales2.avif` },
    { id: 7, category: 'Principales', image: `${BASE}/principales/principales3.avif` },
    { id: 8, category: 'Principales', image: `${BASE}/principales/principales4.avif` },
    { id: 9, category: 'Principales', image: `${BASE}/principales/principales5.png` },
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
    { id: 20, category: 'Entradas', image: `${BASE}/entrada/entrada5.webp` },
    { id: 21, category: 'Entradas', image: `${BASE}/entrada/entrada6.jpg` },
    { id: 22, category: 'Entradas', image: `${BASE}/entrada/entrada7.jpg` },
    { id: 23, category: 'Entradas', image: `${BASE}/entrada/entrada8.jpg` },
    { id: 24, category: 'Entradas', image: `${BASE}/entrada/entrada9.jpg` },
    { id: 25, category: 'Entradas', image: `${BASE}/entrada/entrada10.jpg` },
    { id: 26, category: 'Entradas', image: `${BASE}/entrada/entrada11.jpg` },
    { id: 27, category: 'Entradas', image: `${BASE}/entrada/entrada12.jpg` },
    { id: 28, category: 'Principales', image: `${BASE}/principales/principales7.jpg` },
    { id: 29, category: 'Principales', image: `${BASE}/principales/principales8.jpg` },
    { id: 30, category: 'Principales', image: `${BASE}/principales/principales9.jpg` },
    { id: 31, category: 'Principales', image: `${BASE}/principales/principales10.jpg` },
    { id: 32, category: 'Principales', image: `${BASE}/principales/principales11.jpg` },
    { id: 33, category: 'Principales', image: `${BASE}/principales/principales12.jpg` },
    { id: 34, category: 'Entradas', image: `${BASE}/entrada/entrada13.jpg` },
    { id: 35, category: 'Postres', image: `${BASE}/postres/postre6.jpg` },
    { id: 36, category: 'Postres', image: `${BASE}/postres/postre7.jpg` },
    { id: 37, category: 'Postres', image: `${BASE}/postres/postre8.jpg` },
    { id: 38, category: 'Postres', image: `${BASE}/postres/postre9.png` },
    { id: 39, category: 'Postres', image: `${BASE}/postres/postre10.png` },
    { id: 40, category: 'Postres', image: `${BASE}/postres/postre11.png` },
    { id: 41, category: 'Postres', image: `${BASE}/postres/postre12.png` },
    { id: 42, category: 'Postres', image: `${BASE}/postres/postre13.png` },
    { id: 43, category: 'Postres', image: `${BASE}/postres/postre14.png` },
    { id: 44, category: 'Sushi', image: `${BASE}/sushi/sushi5.jpg` },
    { id: 45, category: 'Sushi', image: `${BASE}/sushi/sushi6.webp` },
    { id: 46, category: 'Sushi', image: `${BASE}/sushi/sushi7.jpg` },
    { id: 47, category: 'Sushi', image: `${BASE}/sushi/sushi8.jpg` },
    { id: 48, category: 'Sushi', image: `${BASE}/sushi/sushi9.jpg` },
    { id: 49, category: 'Sushi', image: `${BASE}/sushi/sushi10.jpg` },
    { id: 50, category: 'Parrilla', image: `${BASE}/parrilla/parrilla1.jpg` },
    { id: 51, category: 'Parrilla', image: `${BASE}/parrilla/parrilla2.jpg` },
    { id: 52, category: 'Parrilla', image: `${BASE}/parrilla/parrilla3.png` },
    { id: 53, category: 'Parrilla', image: `${BASE}/parrilla/parrilla4.jpg` },
    { id: 54, category: 'Parrilla', image: `${BASE}/parrilla/parrilla5.png` },
    { id: 55, category: 'Parrilla', image: `${BASE}/parrilla/parrilla6.mov`, type: 'video' },
    { id: 56, category: 'Parrilla', image: `${BASE}/parrilla/parrilla7.png` },
    { id: 57, category: 'Pastas', image: `${BASE}/pastas/pasta1.jpeg` },
    { id: 58, category: 'Pastas', image: `${BASE}/pastas/pasta2.jpeg` },
    { id: 59, category: 'Pastas', image: `${BASE}/pastas/pasta3.jpeg` },
    { id: 60, category: 'Principales', image: `${BASE}/principales/principales13.jpeg` },
    { id: 61, category: 'Sushi', image: `${BASE}/sushi/sushi11.jpg` },
    { id: 62, category: 'Pastas', image: `${BASE}/pastas/pasta4.jpeg` },
    { id: 63, category: 'Sushi', image: `${BASE}/sushi/sushi12.jpg` },
    { id: 64, category: 'Sushi', image: `${BASE}/sushi/sushi13.jpg` },
    { id: 65, category: 'Sushi', image: `${BASE}/sushi/sushi14.jpg` },
    { id: 66, category: 'Sushi', image: `${BASE}/sushi/sushi15.jpg` },
    { id: 67, category: 'Entradas', image: `${BASE}/entrada/entrada14.jpg` },
    { id: 68, category: 'Entradas', image: `${BASE}/entrada/entrada15.jpg` },
    { id: 69, category: 'Entradas', image: `${BASE}/entrada/entrada16.jpg` },
    { id: 70, category: 'Postres', image: `${BASE}/postres/postre15.jpg` },
    { id: 71, category: 'Principales', image: `${BASE}/principales/principales13.jpg` },

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

  // Reproducir video al hacer hover
  onVideoHover(event: Event, play: boolean) {
    const video = event.target as HTMLVideoElement;
    if (play) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }
}

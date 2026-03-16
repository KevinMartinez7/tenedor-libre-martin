import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diferencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferencias.component.html',
  styleUrl: './diferencias.component.scss',
})
export class DiferenciasComponent {
  readonly items = [
    {
      icon: '🏆',
      title: 'Calidad Premium',
      desc: 'Insumos de primera calidad con proveedores certificados. Nunca comprometemos el sabor.',
    },
    {
      icon: '🔄',
      title: 'Renovación Constante',
      desc: 'Nuestro menú rota regularmente para que siempre tengas algo nuevo que descubrir.',
    },
    {
      icon: '🍷',
      title: 'Variedad en bebidas',
      desc: 'Ofrecemos una amplia selección de bebidas para acompañar tu experiencia gastronómica.',
    },
    {
      icon: '🎭',
      title: 'Experiencias Únicas',
      desc: 'Vive momentos inolvidables con nuestra gastronomía única y variada.',
    },
    {
      icon: '🌱',
      title: 'Compromiso con la atención',
      desc: 'En Lo De Martin siempre tenes atención personalizada y dedicada.',
    },
    {
      icon: '👶',
      title: 'Tenemos en cuenta a todos',
      desc: 'Ofrecemos opciones y atención especial para los más pequeños de la familia.',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly destacados = [
    {
      icon: '🥩',
      name: 'Parrilla Argentina',
      description:
        'Asado de tira, vacío, entraña, costillas y chorizos. Cortes tradicionales a la parrilla.',
      price: 'Incluido',
      tag: 'Lo más pedido',
    },
    {
      icon: '🦞',
      name: 'Sabores Marinos',
      description: 'Rabas, pulpo, pescados del día y más delicias del mar. Frescura garantizada.',
      price: 'Incluido',
      tag: 'Temporada',
    },
    {
      icon: '🍝',
      name: 'Pastas Artesanales',
      description: 'Elaboradas en el momento, con salsas clásicas y de autor que enamoran.',
      price: 'Incluido',
      tag: "Chef's pick",
    },
    {
      icon: '🍱',
      name: 'Estación de Sushi',
      description: 'Rolls, nigiris y sashimi preparados al momento por nuestro sushiman.',
      price: 'Incluido',
      tag: 'Fans favorito',
    },
    {
      icon: '🍫',
      name: 'Fondue de Chocolate',
      description: 'Chocolate fundido de primera calidad con frutas frescas y marshmallows. Irresistible.',
      price: 'Incluido',
      tag: 'Dulce tentación',
    },
    {
      icon: '🍮',
      name: 'Postres Artesanales',
      description: 'Flan casero, tortas, helado y mucho más. Variedad para todos los gustos.',
      price: 'Incluido',
      tag: 'Favorito',
    },
  ];
}

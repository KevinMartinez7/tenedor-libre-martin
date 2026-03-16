import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loaderOut } from '../../shared/animations';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  animations: [loaderOut],
  template: `
    @if (visible()) {
      <div class="loader" [@loaderOut]>
        <div class="loader__inner">
          <div class="loader__fork">
            <img
              src="assets/icons/martin_logo2.svg"
              alt="Logo de Tenedor Libre Premium"
              class="loader__logo"
            />
          </div>
          <div class="loader__bar">
            <div class="loader__bar-fill"></div>
          </div>
          <p class="loader__text">Preparando tu experiencia…</p>
        </div>
      </div>
    }
  `,
  styles: [
    `
      @use '../../../styles/variables' as *;

      .loader {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: $color-dark;
        display: flex;
        align-items: center;
        justify-content: center;

        &__inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        &__fork {
          font-size: 3rem;
          animation: pulse 1.2s ease-in-out infinite;
        }

        &__logo {
          height: 120px;
          width: auto;
        }

        &__bar {
          width: 200px;
          height: 3px;
          background: rgba(#fff, 0.1);
          border-radius: 99px;
          overflow: hidden;
        }

        &__bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #08205e, #db3445);
          border-radius: 99px;
          animation: loadFill 1.8s ease-in-out forwards;
        }

        &__text {
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(#fff, 0.45);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1) rotate(0deg);
        }
        50% {
          transform: scale(1.15) rotate(-10deg);
        }
      }

      @keyframes loadFill {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    `,
  ],
})
export class LoaderComponent implements OnInit {
  visible = signal(true);

  ngOnInit() {
    setTimeout(() => this.visible.set(false), 2200);
  }
}

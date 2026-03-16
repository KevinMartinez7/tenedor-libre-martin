import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="ubicacion" id="ubicacion">
      <div class="container">
        <div class="ubicacion__header">
          <p class="section-label" data-aos="fade-up">Ubicación</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Encuéntranos</h2>
        </div>
        <div class="ubicacion__inner" data-aos="fade-up" data-aos-delay="200">
          <div class="ubicacion__map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12692.140711742251!2d-59.145739!3d-37.3179944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f85ad4ea001%3A0x13e054d12fef1237!2sLo%20de%20Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1771554463120!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de Lo de Martín en Tandil, Buenos Aires"
            ></iframe>
          </div>
          <div class="ubicacion__info">
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📍</span>
              <div>
                <h4>Dirección</h4>
                <p>Las Heras 560, Tandil<br />Buenos Aires, Argentina</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">🕐</span>
              <div>
                <h4>Horarios</h4>
                <p>Martes a domingo<br />Mediodía: 12:00 – 15:00<br />Noche: 20:30 – 00:00</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📞</span>
              <div>
                <h4>Reservas directas</h4>
                <p>+54 249 421-0572</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📱</span>
              <div>
                <h4>Redes sociales</h4>
                <p class="social-links">
                  <a
                    href="https://www.instagram.com/lodemartintandil/?hl=es"
                    target="_blank"
                    class="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    &#64;lodemartintandil
                  </a>
                  <a
                    href="https://www.facebook.com/Lodemartinoficial1?locale=es_LA"
                    target="_blank"
                    class="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Lo de Martín
                  </a>
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/maps?q=Lo+de+Mart%C3%ADn+Tandil"
              target="_blank"
              class="btn-primary ubicacion__btn"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use '../../../styles/variables' as *;
      @use '../../../styles/mixins' as *;

      .ubicacion {
        @include section-padding;
        background: $color-dark-3;

        &__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        &__inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;

          @include lg {
            grid-template-columns: 1.4fr 1fr;
          }
        }

        &__map-wrap {
          border-radius: $radius-xl;
          overflow: hidden;
          height: 420px;
          border: 1px solid rgba(#fff, 0.07);
          box-shadow: $shadow-lg;

          iframe {
            filter: invert(0.85) hue-rotate(180deg) saturate(0.8);
          }
        }

        &__info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        &__detail {
          display: flex;
          gap: 1rem;
          align-items: flex-start;

          &-icon {
            font-size: 1.5rem;
            line-height: 1;
          }

          h4 {
            font-family: $font-body;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: $color-red;
            margin-bottom: 0.3rem;
          }

          p {
            font-size: 0.9rem;
            color: rgba(#fff, 0.65);
            line-height: 1.6;
          }
        }

        &__btn {
          align-self: flex-start;
        }
      }

      .social-links {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .social-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: rgba(#fff, 0.65);
        transition: color 0.2s ease;
        text-decoration: none;

        &:hover {
          color: $color-red;

          .social-icon {
            transform: scale(1.1);
          }
        }
      }

      .social-icon {
        flex-shrink: 0;
        transition: transform 0.2s ease;
      }
    `,
  ],
})
export class UbicacionComponent {}

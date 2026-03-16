import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer__top">
        <div class="container">
          <div class="footer__grid">
            <!-- Brand -->
            <div class="footer__brand" data-aos="fade-up">
              <div class="footer__logo">
                <span>🍴</span>
                <div>
                  <span class="footer__logo-name">Lo de Martín</span>
                  <span class="footer__logo-tag">Tandil</span>
                </div>
              </div>
              <p class="footer__brand-desc">
                Una experiencia gastronómica sin límites en el corazón de Tandil, diseñada para
                quienes aprecian lo mejor de la cocina.
              </p>
              <!-- Social -->
              <div class="footer__social">
                <a
                  href="https://www.instagram.com/lodemartintandil/?hl=es"
                  target="_blank"
                  class="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Lodemartinoficial1?locale=es_LA"
                  target="_blank"
                  class="footer__social-link"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/542494210572"
                  target="_blank"
                  class="footer__social-link footer__social-link--wa"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor">
                    <path
                      d="M16 3C8.837 3 3 8.837 3 16c0 2.344.637 4.636 1.845 6.641L3 29l6.535-1.82C11.324 28.365 13.63 29 16 29c7.163 0 13-5.837 13-13S23.163 3 16 3zm0 2c6.075 0 11 4.925 11 11s-4.925 11-11 11c-2.139 0-4.225-.625-6.003-1.808l-.418-.27-4.33 1.207 1.238-4.21-.283-.433C4.675 20.225 5 18.122 5 16 5 9.925 9.925 5 16 5zm-3.33 7.006c-.195 0-.508.073-.775.366-.267.293-1.018 1.001-1.018 2.44s1.042 2.832 1.188 3.027c.146.195 2.04 3.168 4.949 4.316.69.268 1.23.428 1.65.555.692.21 1.323.18 1.822.109.556-.08 1.713-.705 1.955-1.386.24-.681.24-1.265.169-1.385-.073-.122-.268-.195-.56-.34-.293-.147-1.728-.855-1.996-.953-.267-.098-.46-.146-.653.146-.195.293-.754.953-.924 1.147-.17.195-.341.22-.633.073-.292-.147-1.233-.456-2.348-1.453-.867-.777-1.452-1.736-1.623-2.03-.17-.292-.018-.45.127-.594.131-.131.291-.34.437-.51.145-.17.193-.293.291-.488.098-.195.05-.365-.024-.51-.073-.147-.654-1.584-.897-2.17-.24-.573-.485-.495-.654-.504z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Links -->
            <div class="footer__col" data-aos="fade-up" data-aos-delay="100">
              <h5 class="footer__col-title">Navegación</h5>
              <ul>
                <li><a (click)="scrollTo('#hero')">Inicio</a></li>
                <li><a (click)="scrollTo('#experiencia')">Experiencia</a></li>
                <li><a (click)="scrollTo('#galeria')">Galería</a></li>
                <li><a (click)="scrollTo('#menu')">Menú</a></li>
                <li><a (click)="scrollTo('#resenas')">Reseñas</a></li>
              </ul>
            </div>

            <div class="footer__col" data-aos="fade-up" data-aos-delay="200">
              <h5 class="footer__col-title">Servicios</h5>
              <ul>
                <li><a href="#">Tenedor libre</a></li>
                <li><a href="#">Menú corporativo</a></li>
                
            
                <li><a (click)="scrollTo('#reservas')">Reservas</a></li>
              </ul>
            </div>

            <div class="footer__col" data-aos="fade-up" data-aos-delay="300">
              <h5 class="footer__col-title">Contacto</h5>
              <ul class="footer__contact-list">
                <li>📍 Las Heras 560, Tandil, Buenos Aires</li>
                <li>📞 +54 249 421-0572</li>
                <li>🕐 Lun-Dom 12:00–15:00 / 20:30–00:00</li>
              </ul>
            </div>
          </div>

          <!-- Map -->
          <!-- <div class="footer__map" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12692.140711742251!2d-59.145739!3d-37.3179944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f85ad4ea001%3A0x13e054d12fef1237!2sLo%20de%20Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1771554463120!5m2!1ses!2sar"
              width="100%"
              height="280"
              style="border:0; display:block; border-radius: 16px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de Lo de Martín en Tandil, Buenos Aires"
            ></iframe>
          </div> -->
        </div>
      </div>

      <div class="footer__bottom">
        <div class="container">
          <p>© {{ year }} Lo de Martín · Tandil. Todos los derechos reservados.</p>
          <div class="footer__bottom-links">
            <a href="https://www.instagram.com/lodemartintandil/?hl=es" target="_blank"
              >Instagram</a
            >
            <a href="https://www.facebook.com/lodemartintandil/?locale=es_LA" target="_blank"
              >Facebook</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      @use '../../../styles/variables' as *;
      @use '../../../styles/mixins' as *;

      .footer {
        &__top {
          background: $color-blue-dark;
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(#fff, 0.06);
        }

        &__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;

          @include md {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
          }
        }

        &__logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
          font-size: 1.4rem;

          &-name {
            display: block;
            font-family: $font-display;
            font-size: 1.2rem;
            font-weight: 700;
            color: $color-white;
          }
          &-tag {
            display: block;
            font-size: 0.62rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: $color-red;
          }
        }

        &__brand-desc {
          font-size: 0.85rem;
          color: rgba(#fff, 0.55);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        &__social {
          display: flex;
          gap: 0.75rem;
        }

        &__social-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          @include glass(8px, rgba(#fff, 0.07));
          border: 1px solid rgba(#fff, 0.1);
          @include flex-center;
          color: rgba(#fff, 0.65);
          transition: $transition-base;

          svg {
            width: 16px;
            height: 16px;
          }

          &:hover {
            background: $color-red;
            border-color: $color-red;
            color: #fff;
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba($color-red, 0.35);
          }

          &--wa:hover {
            background: #25d366;
            border-color: #25d366;
            box-shadow: 0 6px 16px rgba(#25d366, 0.35);
          }
        }

        &__col-title {
          font-family: $font-body;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: $color-red;
          margin-bottom: 1.25rem;
        }

        &__col {
          ul {
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
          }

          a {
            font-size: 0.88rem;
            color: rgba(#fff, 0.6);
            cursor: pointer;
            transition: $transition-fast;
            &:hover {
              color: #fff;
              padding-left: 4px;
            }
          }
        }

        &__contact-list {
          li {
            font-size: 0.82rem;
            color: rgba(#fff, 0.55);
            line-height: 1.6;
          }
        }

        &__map {
          margin-top: 3rem;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(#fff, 0.07);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

          iframe {
            filter: invert(0.85) hue-rotate(180deg) saturate(0.8);
          }
        }

        &__bottom {
          background: color-mix(in srgb, $color-blue-dark 80%, black);
          padding: 1.25rem 0;
          border-top: 1px solid rgba(#fff, 0.05);

          .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }

          p {
            font-size: 0.78rem;
            color: rgba(#fff, 0.4);
          }

          &-links {
            display: flex;
            gap: 1.5rem;

            a {
              font-size: 0.78rem;
              color: rgba(#fff, 0.4);
              transition: $transition-fast;
              &:hover {
                color: rgba(#fff, 0.8);
              }
            }
          }
        }
      }
    `,
  ],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}

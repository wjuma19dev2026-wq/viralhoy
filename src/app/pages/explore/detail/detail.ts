import { Location } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styles: `
    /* Estilos generales del cuerpo */
    .detail-body {
      // background-color: #f0f2f5; /* Un fondo gris muy claro para el fondo */
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; /* Tipografía tipo iOS/Android */
    }

    /* Contenedor que simula la pantalla del móvil */
    .contenedor-movil {
      width: 375px; /* Ancho típico de un móvil */
      height: 812px; /* Alto típico de un móvil (ej: iPhone X) */
      // background-color: white;
      display: flex;
      flex-direction: column;
    }

    /* --- SECCIÓN DE LA CABECERA (Imagen) --- */
    .seccion-cabecera {
      height: 40%; /* Altura de la sección de la imagen */
      flex-shrink: 0;
    }

    .imagen-fondo {
      object-position: top; /* Centrar la imagen en la parte superior del rostro */
    }

    /* Superposición oscura para que el texto sea legible */
    .superposicion-negra {
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%);
    }

    /* Ajuste del título del artículo */
    .titulo-articulo {
      line-height: 1.2;
    }

    /* Estilos de los botones de acción flotantes */
    .action-icon-btn {
      width: 45px;
      height: 45px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none !important;
    }

    .action-icon-btn i {
      font-size: 1.2rem;
    }

    /* --- SECCIÓN DEL CUERPO DEL ARTÍCULO --- */
    .cuerpo-articulo {
      flex-grow: 1; /* Ocupa el espacio restante */
      overflow-y: auto; /* Permite scroll dentro del artículo */
      margin-top: -30px; /* Sube el cuerpo sobre la cabecera */
      padding-bottom: 70px !important; /* Espacio extra para que el scroll no choque con el footer */
    }

    /* Estilo para la letra capitular (Drop Cap) */
    .capitular {
      font-size: 3.5rem;
      line-height: 0.8;
    }

    /* Ajustes del texto del contenido */
    .texto-contenido p {
      line-height: 1.6;
      margin-bottom: 1.2rem;
    }

    /* --- BARRA DE COMENTARIOS --- */
    .barra-comentarios {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
    }

    .barra-comentarios input {
      font-size: 0.9rem;
    }

    /* Ocultar la barra de scroll para un aspecto más limpio (Opcional) */
    .cuerpo-articulo::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    label {
      display: block;
      margin-bottom: 8px;
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
    }

    .form-control,
    .form-select {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      padding: 0.75rem 3.5rem 0.75rem 1.5rem;
      font-size: 1.05rem;
      font-weight: 500;
      color: #212529;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.08);
    }

    .form-control::placeholder,
    .form-select::placeholder {
      color: #adb5bd;
      font-weight: 400;
    }

    .form-control:hover,
    .form-select:hover {
      border-color: #0dcaf0;
      box-shadow: 0 6px 20px rgba(13, 202, 240, 0.15);
    }

    .form-control:focus,
    .form-select:focus {
      outline: none;
      border-color: #0dcaf0;
      background: linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%);
      box-shadow:
        0 0 0 0.25rem rgba(13, 202, 240, 0.25),
        0 6px 20px rgba(13, 202, 240, 0.15);
    }
  `,
})
export class Detail implements OnInit {
  noticeId = signal<string>('');

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.noticeId.set(params['noticeId']);
      console.log(`El parametro en la url es: ${this.noticeId()}`);
    });
  }

  navigateTo() {
    this.location.back();
  }
}

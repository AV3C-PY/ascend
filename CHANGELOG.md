# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-08

### Added
- **Core Architecture**: Inicializado proyecto base con Astro para SSG y 0kb de Javascript inicial.
- **Design System**: Integrado Tailwind CSS v4 acoplado a tokens de diseño estrictos inyectados por CSS Variables (`src/styles/global.css`).
- **UI Components**: Construidos componentes fundacionales (`PrimaryButton`, `SecondaryButton`, `Card`, `Badge`, `Input`) bajo las directrices estéticas "Silicon Valley Premium".
- **The Market Engine**: Sistema de cambio de mercado instantáneo y sin recarga construido 100% con Vanilla JS y Nano Stores. Soporte para ES (EUR), FR (EUR) y PE (PEN). Actualiza de forma asíncrona textos (`data-i18n-key`), precios (`data-base-price`) y enlaces de compra.
- **Lemon Squeezy Integration**: Integración del script nativo de Lemon Squeezy en `BaseLayout` y atributos `data-lemon-checkout` listos en los planes de precios.
- **Sales Funnel (Home Page)**: Flujo inamovible diseñado para conversión (Header, Hero animado, Problemas, Soluciones, Planes reactivos, Servicios, Proceso interactivo, Portfolio, WhyUs, Suscripciones Ascend Care, FAQ interactivo y CTA masivo).
- **Internal Routes**:
  - `/soluciones`: Explicación narrativa y propuesta de valor de los sistemas Ascend.
  - `/planes`: Comparativa tipo SaaS detallada.
  - `/contacto`: Formulario con validación en tiempo real en cliente y submit preparado para enviar JSON a `/api/contact` (diseñado para Cloudflare Workers).
  - `/portfolio` y `/servicios/[slug]`: Configuración de Content Collections dinámicas de Astro, preparadas para escalado SEO y generación de páginas estáticas a partir de archivos Markdown/JSON.
  - `/404`: Error page minimalista y elegante.
- **SEO & Performance**: 
  - Archivo `BaseLayout` preparado para 100/100 en Core Web Vitals.
  - Etiquetas `hreflang` dinámicas.
  - Metadatos OpenGraph y Twitter Cards configurados.
  - Implementado sistema nativo ligero para Scroll Reveal mediante `IntersectionObserver`.

### Changed
- Reemplazo absoluto del concepto de desarrollo web estándar por "Digitalización de negocios" y "Ascend OS". 

### Security
- Carga de scripts externos optimizada con propiedades `defer`. 
- Todo el entorno preparado para SSG (Static Site Generation), eliminando vectores de ataque sobre bases de datos en runtime y dependencias dinámicas pesadas.

# The Ascend OS (Base)

The Ascend OS es la arquitectura fundacional "Silicon Valley Premium" para la plataforma de digitalización de pequeños negocios. Este repositorio es la base que escalará desde una web corporativa hiper-optimizada hasta un SaaS completo.

## 🚀 Stack Tecnológico

- **Framework**: [Astro](https://astro.build) (Static Site Generation para 0kb de JS innecesario).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com) (con CSS Variables inyectadas en `:root` para tokens de diseño estrictos).
- **Gestión de Estado (Market Engine)**: [Nano Stores](https://github.com/nanostores/nanostores) + Vanilla JS (Súper ligero, ultra rápido).
- **Pagos**: [Lemon Squeezy](https://www.lemonsqueezy.com/) (Vía Checkout Overlays nativos).

## 📦 Instalación y Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construir para producción (SSG):
   ```bash
   npm run build
   ```

## 🎨 Sistema de Diseño y Personalización

El sistema está construido bajo principios de "Autoridad Visual". No utilices colores o estilos sueltos. Todo debe consumir de los Design Tokens centrales.

**Para modificar colores o estilos base:**
1. Abre `src/styles/global.css`.
2. Modifica los valores en `:root` (e.g. `--color-primary-val`). 
3. Tailwind CSS absorberá automáticamente estos valores gracias al bloque `@theme`.

*Nota: La fuente oficial es "Inter". Las transiciones y microinteracciones (250ms - 300ms) están pre-configuradas.*

## 🌍 The Market Engine (Multi-país y Multi-moneda)

Hemos implementado un sistema "Market-Aware" revolucionario que no requiere recargar la página (SPA-like experience) ni inyectar librerías pesadas (0kb de React/Vue), manteniendo el SEO y SSG.

### ¿Cómo funciona?
1. **Estado Global**: `src/lib/store.ts` mantiene el mercado activo (FR, ES, PE).
2. **Diccionarios**: `src/i18n/` (fr.json, es.json, pe.json) almacenan las traducciones de la interfaz.
3. **El Motor Vanilla (BaseLayout.astro)**: Un script de Vanilla JS escucha los cambios del `store`. Al detectar un cambio:
   - Busca todo el HTML con `[data-i18n-key]` y actualiza su `textContent`.
   - Busca elementos con `[data-base-price]` y recalcula el precio en base a la moneda del mercado.
   - Busca `[data-lemon-checkout]` y reescribe la URL para apuntar a la tienda (fr/es/pe) de Lemon Squeezy correspondiente.

**Para añadir nuevos mercados:**
- Añade el país a `MARKETS` en `src/lib/store.ts`.
- Crea el diccionario `[codigo].json` en `src/i18n/`.
- Actualiza `src/i18n/ui.ts` con el nuevo import.

## 🚀 Despliegue en Cloudflare Pages

El proyecto está diseñado para funcionar en la red perimetral (Edge) como sitio 100% estático, ofreciendo latencia cero.

1. Conecta tu repositorio de GitHub a Cloudflare Pages.
2. Configura los siguientes parámetros en Cloudflare:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. ¡Despliega! Cloudflare servirá tu plataforma globalmente a máxima velocidad.

## 📝 Backend (Formulario de contacto)
El formulario de contacto (`/contacto`) está pre-configurado con validación estricta en el cliente (UI premium) y envía un POST JSON a `/api/contact`.
Para procesar esto en producción:
- Crea un Cloudflare Worker montado en `/api/contact` que reciba el JSON y utilice la API de **Resend** (o similar) para enviar el correo.

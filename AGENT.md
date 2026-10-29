# AGENT INSTRUCTIONS — FUERA DE CARTA / 1ONE CHEF

## 1. Misión del Proyecto
Desarrollar la landing page oficial, vanguardista e interactiva para **Fuera de Carta | 1ONE CHEF**, una plataforma gastronómica profesional enfocada en gestión de costos (escandallo), duelos culinarios en vivo, recetario y visibilidad para chefs de oficio.

## 2. Puntos Clave & Contexto
- **Entorno:** Arch Linux con Vite + React + Tailwind CSS v4 (`@tailwindcss/postcss`).
- **Comando de Dev:** `npx vite` (servidor activo en `http://localhost:5173/`).
- **Skills Habilitadas:** Usar activamente `@sentiolabs/pi-frontend-design`, `pi-frontend-create` y `pi-frontend-check` para maquetar, generar y auditar el código visualmente.

---

## 3. Identidad Visual Estricta (Manual de Marca)

### A. Paleta de Colores
- **Dominante (80%):** `#0B0B0B` (Negro Profundo) y `#000000` (Negro Puro).
- **Estructura y Acero (15%):** `#8A8A8A` (Gris Metálico) y `#252525` (Gris Oscuro).
- **Acento de Marca (5% Máximo):** `#FF5A00` (Naranja Intenso).  
  *Regla Inquebrantable:* Un solo elemento/acento naranja por pantalla (ej. el "1" del logo `1ONE CHEF` o el botón CTA principal).

### B. Tipografías
- **Títulos / Quotes de Impacto:** `font-anton` (`Anton`, sans-serif condensada, All-Caps, bold 800).
- **Manifiesto / Storytelling:** `font-playfair` (`Playfair Display`, serif elegante, centrada).
- **Cuerpo / Textos Técnicos:** `font-sans` (`Inter`, geométrica, limpia, regular 400).

### C. Filosofía de Diseño Brutalista Industrial
- **Bordes:** 100% rectos (`rounded-none` / `border-radius: 0px`). Todo es recto, como una mesada de acero inoxidable.
- **Iconografía:** NO utilizar iconos ilustrativos ni brillantez decorativa. Utilizar jerarquía tipográfica, líneas metálicas de 1px y fotografía documental de cocina.

---

## 4. Referencias Visuales y Recursos (Logos / Imágenes)
- **Logotipos de Marca:** El isotipo oficial circular metálico `FDC` con punto naranja se encuentra en la ruta de imágenes del proyecto (`src/assets/images/` o `public/`).
- **Uso del Logo:** Renderizar la versión en código/SVG o imagen directa respetando el fondo negro sólido y el acento naranja `#FF5A00` en la letra "1" de `1ONE CHEF`.

---

## 5. Tareas a Ejecutar por el Agente
Crea y refina los siguientes componentes modulares en `src/`:

1. **`src/components/Navbar.jsx`:**
   - Navegación superior fija con fondo `#0B0B0B`/95 y borde inferior `#252525`.
   - Branding: Isotipo `FDC` en caja recta + texto `FUERA DE CARTA | 1ONE CHEF`.
   - Botón CTA directo en naranja `#FF5A00`.

2. **`src/sections/Hero.jsx`:**
   - Título impactante en `Anton` All-Caps: `"HAY TALENTO QUE TODAVÍA NO ESTÁS VIENDO"`.
   - Bloque contenedor negro recto con borde `#252525` y texto en `Playfair Display` para el manifiesto.
   - Botón principal de llamada a la acción.

3. **`src/sections/GridFeed.jsx`:**
   - Grilla estilo mosaico Instagram (3 columnas, gap de 1px a 4px).
   - Mezcla de tarjetas de manifiesto, bloques para reels/cocina de oficio y tarjetas de herramientas (Escandallo, Duelos, Comunidad).

4. **`src/sections/Tools.jsx`:**
   - Mapeo de herramientas principales: Calculadora de escandallo, margen de ganancia, gestión de insumos y duelos culinarios.

5. **`src/components/Footer.jsx`:**
   - Pie de página industrial con links comunitarios, estética sobria de acero y copyright.

6. **Integración:**
   - Unificar todo en `src/App.jsx` asegurando cero errores de compilación de PostCSS/Tailwind.

---

## 6. Verificación Final
Al finalizar la generación de código, ejecuta la verificación de frontend (`pi-frontend-check`) para confirmar que el sitio compila correctamente, los estilos se aplican sin fallas y la experiencia en desktop/mobile sea fluida.

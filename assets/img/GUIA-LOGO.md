# Logo CardioSmart IPS - Guía de Uso

## 📁 Archivos Creados

El logo de CardioSmart IPS está disponible en formato SVG (escalable) en las siguientes variantes:

### 1. **logo.svg** - Logo Principal
- **Ubicación:** `assets/img/logo.svg`
- **Uso:** Navegación principal, headers, documentos
- **Características:**
  - Incluye texto "CardioSmart IPS"
  - Tagline "Cuidamos tu Corazón"
  - Colores: Azul primario (#0066CC), Azul secundario (#00A8E8)
  - Dimensiones: 280x80px (escalable)

### 2. **logo-white.svg** - Logo Blanco
- **Ubicación:** `assets/img/logo-white.svg`
- **Uso:** Fondos oscuros, hero sections, footers
- **Características:**
  - Versión monocromática blanca
  - Para fondos oscuros o con color
  - Mantiene legibilidad en fondos azules/oscuros

### 3. **logo-icon.svg** - Ícono Solo
- **Ubicación:** `assets/img/logo-icon.svg`
- **Uso:** Favicon, apps móviles, redes sociales, iconos pequeños
- **Características:**
  - Solo el ícono circular con corazón y pulso
  - Dimensiones: 60x60px (cuadrado)
  - Perfecto para favicons y app icons

---

## 🎨 Elementos del Logo

### Componentes Visuales:

1. **Corazón Estilizado**
   - Forma geométrica moderna
   - Gradiente azul (#0066CC → #00A8E8)
   - Representa el cuidado cardiovascular

2. **Línea de Pulso Cardíaco (ECG)**
   - Línea dinámica que representa latido del corazón
   - Gradiente animable
   - Simboliza monitoreo y tecnología

3. **Cruz Médica**
   - Elemento sutil en el centro del corazón
   - Representa el sector salud
   - Color blanco para contraste

4. **Tipografía**
   - **Cardio:** Bold (700) - Enfatiza especialización
   - **Smart:** Light (300) - Modernidad y tecnología
   - **IPS:** SemiBold (600) - Institucional
   - Tipografía: Montserrat (similar a All Round Gothic oficial)

---

## 🎯 Especificaciones Técnicas

### Colores Oficiales:

| Color | Hex | RGB | CMYK | Uso |
|-------|-----|-----|------|-----|
| Azul Primario | #0066CC | 0, 102, 204 | 100, 50, 0, 20 | Títulos, CTA |
| Azul Secundario | #00A8E8 | 0, 168, 232 | 70, 15, 0, 0 | Acentos, gradientes |
| Gris Oscuro | #1A1A1A | 26, 26, 26 | 0, 0, 0, 90 | Textos principales |
| Gris Medio | #666666 | 102, 102, 102 | 0, 0, 0, 60 | Textos secundarios |
| Blanco | #FFFFFF | 255, 255, 255 | 0, 0, 0, 0 | Fondos, contraste |

### Espaciado y Proporciones:

- **Área de protección:** Mínimo 20px alrededor del logo
- **Tamaño mínimo:** 120px de ancho
- **Proporción:** 3.5:1 (ancho:alto)
- **Ícono proporción:** 1:1 (cuadrado)

---

## 📐 Usos Correctos

### ✅ Permitido:

1. **Escalado proporcional** - Mantener ratio de aspecto
2. **Uso en fondos blancos** - Logo principal con colores
3. **Uso en fondos oscuros** - Logo blanco
4. **Uso digital** - Web, apps, presentaciones
5. **Uso impreso** - Documentos, papelería, merchandising

### ❌ No Permitido:

1. ❌ Cambiar colores del logo
2. ❌ Distorsionar proporcionalmente
3. ❌ Agregar efectos (sombras, resplandores)
4. ❌ Rotar el logo
5. ❌ Cambiar tipografía
6. ❌ Reorganizar elementos
7. ❌ Usar en fondos con bajo contraste

---

## 💾 Formato SVG - Ventajas

### ¿Por qué SVG?

- ✅ **Escalable sin pérdida de calidad** - Perfecto para pantallas retina
- ✅ **Tamaño de archivo pequeño** - Carga rápida
- ✅ **Editable con código** - Fácil de modificar colores
- ✅ **Responsive** - Se adapta a cualquier tamaño
- ✅ **Soporta animaciones** - CSS y JavaScript
- ✅ **SEO friendly** - Indexable por buscadores
- ✅ **Accesible** - Compatible con lectores de pantalla

---

## 🔄 Conversiones Adicionales

Si necesitas otros formatos:

### PNG (para redes sociales):
```bash
# Instalar ImageMagick o usar herramientas online
convert logo.svg -resize 1200x1200 logo-1200.png
convert logo.svg -resize 512x512 logo-512.png
```

### Tamaños Recomendados PNG:

| Uso | Tamaño | Nombre Archivo |
|-----|--------|----------------|
| Open Graph | 1200x630px | logo-og.png |
| Twitter Card | 1200x600px | logo-twitter.png |
| Favicon 32x32 | 32x32px | favicon-32x32.png |
| Favicon 16x16 | 16x16px | favicon-16x16.png |
| Apple Touch Icon | 180x180px | apple-touch-icon.png |
| Android Chrome | 192x192px | android-chrome-192x192.png |
| Android Chrome | 512x512px | android-chrome-512x512.png |

---

## 🌐 Implementación Web

### HTML:
```html
<!-- Logo principal en navbar -->
<img src="assets/img/logo.svg" alt="CardioSmart IPS" class="logo">

<!-- Logo blanco para footer -->
<img src="assets/img/logo-white.svg" alt="CardioSmart IPS" class="logo">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="assets/img/logo-icon.svg">
```

### CSS:
```css
.logo {
    height: 60px;
    width: auto;
    transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
    .logo {
        height: 45px;
    }
}
```

---

## 📱 Favicon Setup

Para implementar el favicon correctamente:

1. **Agregar al `<head>` del HTML:**
```html
<!-- Favicon SVG (navegadores modernos) -->
<link rel="icon" type="image/svg+xml" href="assets/img/logo-icon.svg">

<!-- Fallback PNG -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="manifest" href="/site.webmanifest">
```

---

## 🎨 Personalización del SVG

Si necesitas cambiar colores programáticamente:

### Con CSS:
```css
.logo path {
    fill: #NEW_COLOR;
}

.logo .gradient-element {
    stop-color: #NEW_COLOR;
}
```

### Con JavaScript:
```javascript
const logo = document.querySelector('.logo');
logo.style.fill = '#NEW_COLOR';
```

---

## 📋 Checklist de Implementación

- [x] Logo SVG principal creado
- [x] Logo blanco para fondos oscuros
- [x] Ícono circular para favicon
- [x] Logo integrado en navbar
- [ ] Generar versiones PNG (si es necesario)
- [ ] Crear favicon.ico para IE
- [ ] Generar logos para redes sociales
- [ ] Crear manifest.json para PWA
- [ ] Documentar en manual de marca

---

## 🎓 Basado en Manual de Marca

Este logo fue creado siguiendo las especificaciones del **Manual de marca CS.pdf**:
- Tipografía oficial: All Round Gothic (alternativa: Montserrat)
- Paleta de colores institucional
- Elementos visuales: corazón, pulso, cruz médica
- Estilo moderno y profesional

---

## 📞 Contacto

Para modificaciones o versiones adicionales del logo:
- Contactar al departamento de diseño
- Seguir lineamientos del manual de marca oficial
- Mantener coherencia visual en todos los medios

---

**CardioSmart IPS** - Identidad visual creada con tecnología SVG escalable

# Tipografía Oficial - CardioSmart IPS

## 🔤 Fuente del Manual de Marca

Según el **Manual de marca CS.pdf**, la tipografía oficial de CardioSmart IPS es:

### **All Round Gothic**

#### Variantes utilizadas:
- **All Round Gothic Bold Oblique** (Negrita Cursiva)
- **All Round Gothic XLig** (Extra Light)
- **All Round Gothic XLig Oblique** (Extra Light Cursiva)
- **All Round Gothic Book** (Regular)
- **All Round Gothic Book Oblique** (Regular Cursiva)

---

## 🌐 Implementación Actual

Actualmente el sitio web utiliza **Montserrat** de Google Fonts como alternativa, ya que es una fuente:
- ✅ Geométrica y moderna (similar a All Round Gothic)
- ✅ Gratuita y disponible en web
- ✅ Excelente legibilidad
- ✅ Múltiples pesos disponibles
- ✅ Compatible con todos los navegadores

### Fuentes Actuales:
- **Primaria:** Montserrat (títulos, encabezados)
- **Secundaria:** Lato (textos, párrafos)

---

## 📥 Cómo Instalar la Tipografía Oficial

Si deseas usar la tipografía oficial **All Round Gothic**, sigue estos pasos:

### Opción 1: Instalar en el Servidor (Recomendado)

1. **Obtener los archivos de fuente:**
   - Contacta con el departamento de diseño/marketing de CardioSmart
   - Solicita los archivos `.woff`, `.woff2`, `.ttf` o `.otf` de All Round Gothic

2. **Crear carpeta de fuentes:**
   ```
   cardioSmartIps/
   └── assets/
       └── fonts/
           ├── AllRoundGothic-Bold.woff2
           ├── AllRoundGothic-Bold.woff
           ├── AllRoundGothic-Book.woff2
           ├── AllRoundGothic-Book.woff
           ├── AllRoundGothic-XLig.woff2
           └── AllRoundGothic-XLig.woff
   ```

3. **Agregar a CSS (styles.css):**
   Añade esto al inicio del archivo CSS, antes de las variables:

   ```css
   /* ============================================
      ALL ROUND GOTHIC - TIPOGRAFÍA OFICIAL
      ============================================ */

   @font-face {
       font-family: 'All Round Gothic';
       src: url('../assets/fonts/AllRoundGothic-XLig.woff2') format('woff2'),
            url('../assets/fonts/AllRoundGothic-XLig.woff') format('woff');
       font-weight: 200;
       font-style: normal;
       font-display: swap;
   }

   @font-face {
       font-family: 'All Round Gothic';
       src: url('../assets/fonts/AllRoundGothic-Book.woff2') format('woff2'),
            url('../assets/fonts/AllRoundGothic-Book.woff') format('woff');
       font-weight: 400;
       font-style: normal;
       font-display: swap;
   }

   @font-face {
       font-family: 'All Round Gothic';
       src: url('../assets/fonts/AllRoundGothic-Bold.woff2') format('woff2'),
            url('../assets/fonts/AllRoundGothic-Bold.woff') format('woff');
       font-weight: 700;
       font-style: normal;
       font-display: swap;
   }
   ```

4. **Actualizar variables CSS:**
   En la sección `:root`, cambia:
   ```css
   --font-primary: 'All Round Gothic', 'Montserrat', sans-serif;
   --font-secondary: 'All Round Gothic', 'Lato', sans-serif;
   ```

### Opción 2: Usar Servicio de Fuentes Web

Si All Round Gothic está disponible en servicios como:
- Adobe Fonts (Typekit)
- Google Fonts (poco probable)
- Fonts.com
- MyFonts

1. Obtén el código de integración del servicio
2. Agrégalo en el `<head>` de `index.html`
3. Actualiza las variables CSS

---

## 🎨 Mapeo de Pesos de Fuente

Si instalas All Round Gothic, usa estos mapeos:

| Peso CSS | All Round Gothic | Montserrat Actual |
|----------|------------------|-------------------|
| 200      | XLig             | 300 (Light)       |
| 300      | XLig             | 300 (Light)       |
| 400      | Book             | 400 (Regular)     |
| 500      | Book             | 500 (Medium)      |
| 600      | Demi             | 600 (SemiBold)    |
| 700      | Bold             | 700 (Bold)        |
| 800      | Bold             | 800 (ExtraBold)   |

---

## ✅ Verificación

Después de instalar All Round Gothic:

1. **Verifica en navegador:**
   - Abre las DevTools (F12)
   - Ve a la pestaña "Elements"
   - Selecciona un título
   - En "Computed" verifica que diga "All Round Gothic"

2. **Prueba de carga:**
   - Verifica que los archivos de fuente se carguen correctamente
   - Revisa la consola por errores 404

3. **Rendimiento:**
   - Las fuentes web locales cargan más rápido que las externas
   - Usa formato `.woff2` para mejor compresión

---

## 📊 Comparación Visual

### All Round Gothic
- Geométrica, moderna y limpia
- Excelente legibilidad en pantalla
- Profesional y corporativa
- Formas redondeadas suaves

### Montserrat (Actual)
- Inspirada en tipografías geométricas
- Similar a All Round Gothic
- Gratuita y accesible
- Buen sustituto hasta instalar la oficial

---

## 🚀 Prioridad de Implementación

**Alta:** Si tienes acceso a All Round Gothic, impleméntala lo antes posible para mantener la coherencia con el manual de marca.

**Media:** Si no está disponible inmediatamente, Montserrat es una excelente alternativa temporal.

---

## 📞 Contacto

Para obtener los archivos de All Round Gothic:
- Contacta al departamento de diseño de CardioSmart IPS
- Solicita la licencia web si es necesario
- Verifica los términos de uso para web

---

**Nota:** La tipografía es un elemento fundamental de la identidad de marca. Usar la oficial mejora la coherencia visual en todos los canales digitales.

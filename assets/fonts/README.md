# Tipografía All Round Gothic - CardioSmart IPS

## Instrucciones para agregar las fuentes

Esta carpeta debe contener los archivos de fuente **All Round Gothic** según el manual de marca de CardioSmart.

### Archivos necesarios (formato WOFF2 y WOFF):

#### All Round Gothic XLig (Weight: 200)
- `AllRoundGothic-XLig.woff2`
- `AllRoundGothic-XLig.woff`
- `AllRoundGothic-XLigOblique.woff2`
- `AllRoundGothic-XLigOblique.woff`

#### All Round Gothic Book (Weight: 400)
- `AllRoundGothic-Book.woff2`
- `AllRoundGothic-Book.woff`
- `AllRoundGothic-BookOblique.woff2`
- `AllRoundGothic-BookOblique.woff`

#### All Round Gothic Medium (Weight: 500)
- `AllRoundGothic-Medium.woff2`
- `AllRoundGothic-Medium.woff`
- `AllRoundGothic-MediumOblique.woff2`
- `AllRoundGothic-MediumOblique.woff`

#### All Round Gothic Demi (Weight: 600)
- `AllRoundGothic-Demi.woff2`
- `AllRoundGothic-Demi.woff`

---

## Cómo obtener los archivos

1. Obtener los archivos oficiales de All Round Gothic desde el proveedor autorizado
2. Convertir a formato WOFF2 y WOFF si es necesario usando herramientas como:
   - [Transfonter](https://transfonter.org/)
   - [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

3. Colocar todos los archivos en esta carpeta (`assets/fonts/`)

---

## Uso en la página

La tipografía ya está configurada en `css/styles.css` con las siguientes variaciones:

- **Títulos principales (H1, H2)**: All Round Gothic Demi (weight: 600)
- **Subtítulos (H3, H4)**: All Round Gothic Medium (weight: 500)
- **Texto general**: All Round Gothic Book (weight: 400)
- **Texto ligero**: All Round Gothic XLig (weight: 200)

### Clases de utilidad disponibles:

```html
<p class="font-xlig">Texto extra ligero</p>
<p class="font-book">Texto normal</p>
<p class="font-medium">Texto medio</p>
<p class="font-demi">Texto semi-bold</p>
```

---

## Fallback

Si las fuentes no están disponibles, la página usará **Montserrat** de Google Fonts como alternativa (ya incluida en el proyecto).

---

**Nota**: Los archivos de fuente no están incluidos en el repositorio por derechos de autor. Deben ser adquiridos legalmente según el manual de marca de CardioSmart IPS.

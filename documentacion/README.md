# CardioSmart IPS - Landing Page

## 🏥 Descripción
Landing page profesional para CardioSmart IPS, institución prestadora de servicios de salud especializada en cardiología.

## 📁 Estructura del Proyecto

```
cardioSmartIps/
│
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── main.js            # JavaScript principal
├── assets/
│   └── img/               # Imágenes del sitio
│       ├── logo.png
│       ├── hero-doctor.png
│       ├── hero-bg.jpg
│       ├── about-facility.jpg
│       ├── why-choose-us.jpg
│       ├── specialist-1.jpg
│       ├── specialist-2.jpg
│       ├── specialist-3.jpg
│       ├── specialist-4.jpg
│       ├── patient-1.jpg
│       ├── patient-2.jpg
│       └── patient-3.jpg
└── README.md              # Este archivo
```

## 🎨 Características

### Secciones Incluidas:
1. **Hero Section** - Presentación principal con estadísticas animadas
2. **About** - Información sobre la institución
3. **Services** - Servicios especializados en cardiología
4. **Why Choose Us** - Razones para elegir CardioSmart
5. **Specialists** - Equipo médico especializado
6. **Testimonials** - Opiniones de pacientes
7. **Appointment** - Formulario de agendamiento de citas
8. **Contact** - Información de contacto y formulario
9. **Footer** - Información institucional y enlaces

### Tecnologías Utilizadas:
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS y gradientes
- **Bootstrap 5.3.2** - Framework responsive
- **jQuery 3.7.1** - Manipulación del DOM
- **Font Awesome 6.4.2** - Iconos
- **AOS 2.3.1** - Animaciones al hacer scroll
- **Google Fonts** - Tipografías Poppins y Roboto

## 🎯 Funcionalidades

### JavaScript:
- ✅ Navbar con efecto scroll
- ✅ Smooth scrolling entre secciones
- ✅ Contador animado en estadísticas
- ✅ Botón "Back to Top"
- ✅ Navegación activa según scroll
- ✅ Validación de formularios
- ✅ Mensajes de alerta personalizados
- ✅ Carousel automático de testimonios
- ✅ Lazy loading de imágenes
- ✅ Formateo automático de teléfono
- ✅ Soporte para accesibilidad (teclado)

### CSS:
- 🎨 Variables CSS para colores y espaciado
- 🎨 Gradientes personalizados
- 🎨 Animaciones suaves
- 🎨 Hover effects profesionales
- 🎨 Responsive design completo
- 🎨 Sombras y bordes redondeados
- 🎨 Scrollbar personalizada

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (< 576px)
- 📱 Tablets (576px - 991px)
- 💻 Desktop (> 992px)

## 🚀 Instalación

1. Descargar o clonar el proyecto
2. Colocar las imágenes en la carpeta `assets/img/`
3. Abrir `index.html` en un navegador web
4. Para desarrollo local, usar WAMP/XAMPP o cualquier servidor local

## 📝 Personalización

### Colores (CSS Variables):
Editar en `css/styles.css`:
```css
:root {
    --primary-color: #0066CC;
    --secondary-color: #00A8E8;
    --accent-color: #FF6B6B;
}
```

### Contenido:
Reemplazar los textos marcados con `[...]` en `index.html` con la información real de la IPS.

### Imágenes:
Agregar las siguientes imágenes en `assets/img/`:
- `logo.png` - Logo de CardioSmart
- `hero-doctor.png` - Imagen del hero
- `hero-bg.jpg` - Fondo del hero
- `about-facility.jpg` - Instalaciones
- `why-choose-us.jpg` - Por qué elegirnos
- `specialist-1.jpg` a `specialist-4.jpg` - Fotos de especialistas
- `patient-1.jpg` a `patient-3.jpg` - Fotos de pacientes (testimonios)

## 🔧 Configuración del Backend

Los formularios están preparados para conectarse a un backend. Modificar en `js/main.js`:

```javascript
// Appointment Form
$('#appointmentForm').on('submit', function(e) {
    // Aquí agregar la lógica de envío al servidor
    $.ajax({
        url: 'tu-endpoint-aqui',
        method: 'POST',
        data: formData,
        success: function(response) {
            // Manejar respuesta
        }
    });
});
```

## 🌐 SEO

El sitio incluye:
- Meta tags descriptivos
- Títulos semánticos (H1-H6)
- Estructura HTML5 semántica
- Alt text en imágenes (pendiente agregar)
- URLs amigables con anclas

## ♿ Accesibilidad

- Navegación por teclado
- ARIA labels (pendiente implementar)
- Contraste de colores adecuado
- Texto alternativo en imágenes
- Focus visible en elementos interactivos

## 📦 Dependencias Externas (CDN)

- Bootstrap 5.3.2
- jQuery 3.7.1
- Font Awesome 6.4.2
- AOS 2.3.1
- Google Fonts (Poppins, Roboto)

## 🔄 Actualizaciones Futuras

- [ ] Agregar información real del Manual de Marca
- [ ] Implementar conexión con backend
- [ ] Agregar más animaciones
- [ ] Implementar blog de noticias
- [ ] Sistema de citas en línea completo
- [ ] Panel administrativo
- [ ] Integración con WhatsApp Business
- [ ] Chat en vivo

## 📄 Licencia

Este proyecto está desarrollado para CardioSmart IPS.

## 👨‍💻 Desarrollo

Desarrollado con las mejores prácticas de desarrollo web moderno.

## 📞 Soporte

Para soporte o preguntas sobre la implementación, contactar al equipo de desarrollo.

---

**CardioSmart IPS** - Cuidamos tu Corazón con Excelencia
```

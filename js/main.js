/**
 * CardioSmart IPS - Main JavaScript
 * Manejo de interactividad y animaciones
 */

(function($) {
    'use strict';

    // ============================================
    // 1. NAVBAR SCROLL EFFECT
    // ============================================
    
    function handleNavbarScroll() {
        const navbar = $('#mainNav');
        if ($(window).scrollTop() > 100) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    }

    $(window).on('scroll', handleNavbarScroll);

    // ============================================
    // 2. SMOOTH SCROLLING
    // ============================================
    
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
            
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000, 'swing');
            
            // Cerrar menú móvil si está abierto
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-toggler').click();
            }
        }
    });

    // ============================================
    // 3. COUNTER ANIMATION
    // ============================================
    
    function animateCounters() {
        $('.stat-number').each(function() {
            const $this = $(this);
            const countTo = parseInt($this.attr('data-target'));
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Ejecutar animación cuando el hero sea visible
    let counterAnimated = false;
    
    function checkCounterAnimation() {
        if (!counterAnimated && $('.hero-stats').length) {
            const heroStatsTop = $('.hero-stats').offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > heroStatsTop) {
                animateCounters();
                counterAnimated = true;
            }
        }
    }

    $(window).on('scroll', checkCounterAnimation);
    checkCounterAnimation();

    // ============================================
    // 4. BACK TO TOP BUTTON
    // ============================================
    
    function handleBackToTop() {
        const backToTop = $('#backToTop');
        
        if ($(window).scrollTop() > 300) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    }

    $(window).on('scroll', handleBackToTop);

    $('#backToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
    });

    // ============================================
    // 5. ACTIVE NAVIGATION LINK
    // ============================================
    
    function updateActiveNavLink() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('.navbar-nav .nav-link').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            
            if (refElement.length && 
                refElement.position().top <= scrollPos && 
                refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav .nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    }

    $(window).on('scroll', updateActiveNavLink);

    // ============================================
    // 6. APPOINTMENT FORM HANDLING
    // ============================================
    
    $('#appointmentForm').on('submit', function(e) {
        e.preventDefault();
        
        // Validar formulario
        if (this.checkValidity() === false) {
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Obtener datos del formulario
        const formData = {
            name: $(this).find('input[type="text"]').val(),
            email: $(this).find('input[type="email"]').val(),
            phone: $(this).find('input[type="tel"]').val(),
            service: $(this).find('select').val(),
            date: $(this).find('input[type="date"]').val(),
            message: $(this).find('textarea').val()
        };

        // Simular envío (aquí conectarías con tu backend)
        console.log('Datos de cita:', formData);

        // Mostrar mensaje de éxito
        showAlert('success', '¡Cita agendada exitosamente!', 
                 'Nos pondremos en contacto contigo pronto para confirmar tu cita.');

        // Limpiar formulario
        this.reset();
        $(this).removeClass('was-validated');
    });

    // ============================================
    // 7. CONTACT FORM HANDLING
    // ============================================
    
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Validar formulario
        if (this.checkValidity() === false) {
            e.stopPropagation();
            $(this).addClass('was-validated');
            return;
        }

        // Obtener datos del formulario
        const formData = {
            name: $(this).find('input[type="text"]').val(),
            email: $(this).find('input[type="email"]').val(),
            subject: $(this).find('input[type="text"]').eq(1).val(),
            message: $(this).find('textarea').val()
        };

        // Simular envío (aquí conectarías con tu backend)
        console.log('Datos de contacto:', formData);

        // Mostrar mensaje de éxito
        showAlert('success', '¡Mensaje enviado exitosamente!', 
                 'Gracias por contactarnos. Te responderemos pronto.');

        // Limpiar formulario
        this.reset();
        $(this).removeClass('was-validated');
    });

    // ============================================
    // 8. ALERT MESSAGES
    // ============================================
    
    function showAlert(type, title, message) {
        const alertHtml = `
            <div class="custom-alert alert-${type}" style="
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 9999;
                min-width: 300px;
                max-width: 400px;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.15);
                animation: slideInRight 0.5s ease-out;
            ">
                <div style="display: flex; align-items: start; gap: 15px;">
                    <div style="
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    ">
                        <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}"></i>
                    </div>
                    <div style="flex: 1;">
                        <h5 style="margin: 0 0 5px 0; color: #333; font-size: 1rem;">${title}</h5>
                        <p style="margin: 0; color: #666; font-size: 0.9rem;">${message}</p>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: none;
                        border: none;
                        color: #999;
                        cursor: pointer;
                        font-size: 1.2rem;
                        padding: 0;
                        width: 20px;
                        height: 20px;
                    ">×</button>
                </div>
            </div>
        `;

        $('body').append(alertHtml);

        // Auto-remover después de 5 segundos
        setTimeout(() => {
            $('.custom-alert').fadeOut(400, function() {
                $(this).remove();
            });
        }, 5000);
    }

    // ============================================
    // 9. INITIALIZE AOS (Animate On Scroll)
    // ============================================
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
    }

    // ============================================
    // 10. LAZY LOADING IMAGES
    // ============================================
    
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }

    // ============================================
    // 11. PRELOADER (Opcional)
    // ============================================
    
    function hidePreloader() {
        const preloader = $('#preloader');
        if (preloader.length) {
            preloader.fadeOut(400, function() {
                $(this).remove();
            });
        }
    }

    // ============================================
    // 12. FORM VALIDATION ENHANCEMENT
    // ============================================
    
    // Validación en tiempo real
    $('input, textarea, select').on('blur', function() {
        if ($(this).closest('form').hasClass('was-validated')) {
            this.checkValidity();
        }
    });

    // Formato de teléfono
    $('input[type="tel"]').on('input', function() {
        let value = $(this).val().replace(/\D/g, '');
        
        if (value.length > 10) {
            value = value.substr(0, 10);
        }
        
        if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{3})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/(\d{3})/, '($1)');
        }
        
        $(this).val(value);
    });

    // ============================================
    // 13. TESTIMONIAL CAROUSEL AUTO-PLAY
    // ============================================
    
    if ($('#testimonialCarousel').length) {
        const carousel = new bootstrap.Carousel('#testimonialCarousel', {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
    }

    // ============================================
    // 14. SERVICE CARDS INTERACTION
    // ============================================
    
    $('.service-card').on('mouseenter', function() {
        $(this).find('.service-icon').addClass('pulse');
    }).on('mouseleave', function() {
        $(this).find('.service-icon').removeClass('pulse');
    });

    // ============================================
    // 15. MOBILE MENU CLOSE ON CLICK
    // ============================================
    
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // ============================================
    // 16. PREVENT EMPTY FORM SUBMISSION
    // ============================================
    
    $('form').on('submit', function(e) {
        const form = this;
        
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        $(form).addClass('was-validated');
    });

    // ============================================
    // 17. WINDOW RESIZE HANDLER
    // ============================================
    
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalcular AOS si es necesario
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 250);
    });

    // ============================================
    // 18. INITIALIZE ON DOCUMENT READY
    // ============================================
    
    $(document).ready(function() {
        // Ejecutar funciones iniciales
        handleNavbarScroll();
        handleBackToTop();
        updateActiveNavLink();
        
        // Ocultar preloader después de cargar
        setTimeout(hidePreloader, 500);

        // Log de inicialización
        console.log('%cCardioSmart IPS', 'color: #0066CC; font-size: 20px; font-weight: bold;');
        console.log('%cSitio web inicializado correctamente', 'color: #00A8E8; font-size: 14px;');
    });

    // ============================================
    // 19. HANDLE PAGE VISIBILITY
    // ============================================
    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Página no visible - pausar animaciones si es necesario
            console.log('Página oculta');
        } else {
            // Página visible - reanudar animaciones
            console.log('Página visible');
        }
    });

    // ============================================
    // 20. ACCESSIBILITY ENHANCEMENTS
    // ============================================
    
    // Soporte para navegación por teclado
    $('.service-card, .specialist-card, .why-us-item').attr('tabindex', '0');
    
    // Enter key support para elementos interactivos
    $('.service-card, .specialist-card').on('keypress', function(e) {
        if (e.which === 13) { // Enter key
            $(this).find('a').first().click();
        }
    });

    // ============================================
    // 21. PRINT STYLES SUPPORT
    // ============================================
    
    window.addEventListener('beforeprint', function() {
        // Expandir todo el contenido antes de imprimir
        $('.collapse').addClass('show');
    });

    window.addEventListener('afterprint', function() {
        // Restaurar estado después de imprimir
        $('.collapse').removeClass('show');
    });

})(jQuery);

// ============================================
// ANIMATION KEYFRAMES (CSS-in-JS alternative)
// ============================================

const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    .pulse {
        animation: pulse 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

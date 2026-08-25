# 🛰️ Landing Page · Javier Murcia

Landing page profesional y bilingüe (ES/EN) para los servicios de **Javier Murcia** como ingeniero de sistemas: cloud, virtualización, bases de datos y automatización.

![Vista previa](assets/og-image.png)

## 🔗 Demo en vivo

**https://javiermurcia.github.io/landing-javier/**

## ✨ Características

- 🎨 Diseño **glassmorphism** moderno con animaciones y glows
- 🌐 **Bilingüe ES/EN** con selector de idioma (recuerda la preferencia)
- 🖥️ Hero con **terminal animada** y badges flotantes de tecnologías
- 📑 Secciones: Servicios (6 tarjetas) · Sobre mí + stack · Proceso (4 pasos) · Contacto
- 📊 Contadores animados, barra de progreso de scroll, navegación activa
- 📱 Totalmente **responsive** y accesible (fallback sin JavaScript)

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML5 · CSS3 · JavaScript (vanilla, sin dependencias) |
| Tipografía | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| Servidor | Nginx (gzip, caché, cabeceras de seguridad) |
| Contenedor | Docker |
| Despliegue | GitHub Pages (gratis, HTTPS, CDN) |

## 🐳 Ejecutar con Docker

```bash
docker build -t landing-javier .
docker run -d -p 8080:80 --name landing-javier landing-javier
```

Abre **http://localhost:8080**

## 📁 Estructura del proyecto

```
landing-javier/
├── index.html          # Página principal
├── css/style.css       # Estilos (glassmorphism)
├── js/app.js           # i18n ES/EN + animaciones
├── assets/og-image.png # Banner para Open Graph
├── nginx.conf          # Configuración de Nginx
└── Dockerfile          # Imagen Nginx + healthcheck
```

## 🔄 Desplegar cambios en GitHub Pages

```bash
git add -A
git commit -m "descripción del cambio"
git push
```

El sitio se reconstruye automáticamente en ~1 minuto.

## 🤝 Contacto

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Javier%20Murcia-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/javier-murcia-l/)

---

© 2025 Javier Murcia · Ingeniero de Sistemas

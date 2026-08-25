# ============================================================
# Landing Javier Murcia — servida con Nginx
# Build:  docker build -t landing-javier .
# Run:    docker run -d -p 8080:80 --name landing-javier landing-javier
# ============================================================

FROM nginx:alpine

# Copia los archivos estáticos del sitio
COPY index.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

# Configuración ligera: gzip + cache para estáticos
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Asegura permisos de lectura para el worker de nginx (usuario no root)
RUN chmod -R a+rX /usr/share/nginx/html \
    && chmod a+r /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

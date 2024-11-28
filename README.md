# DJANGO_TEMPLETE

**Descripción:**
Este proyecto Django es una sencilla aplicación de blog que permite a los usuarios crear, editar y eliminar publicaciones. Además, incluye un sistema de comentarios.

**Características:**

* Creación, edición y eliminación de publicaciones.
* Sistema de comentarios.
* Uso de Markdown para formatear el contenido.
* Integración con un servicio de autenticación (por ejemplo, Django Allauth).

**Requisitos Previos:**

* Python 3.6 o superior
* Django 3.2 o superior
* Una base de datos PostgreSQL (configurable)

**Instalación:**

1. Clona el repositorio: `git clone https://github.com/Valto007kill/DJANGO_TEMPLETE.git`
2. Crea un entorno virtual: `python -m venv venv`
3. Activa el entorno virtual: `source venv/bin/activate`
4. Instala las dependencias: `pip install -r requirements.txt`
5. Configura las variables de entorno (DATABASE_URL, SECRET_KEY, etc.)
6. Realiza las migraciones: `python manage.py migrate`

**Ejecución:**

1. Inicia el servidor de desarrollo: `python manage.py runserver`
2. Accede a la aplicación en http://127.0.0.1:8000/

**Estructura del Proyecto:**

* `blog/`: Aplicación principal del blog
* `users/`: Aplicación para gestionar usuarios
* `config/`: Configuración del proyecto

**Contribuciones:**

¡Las contribuciones son bienvenidas! Por favor, abre un issue para discutir nuevas características o mejoras.

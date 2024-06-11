# Mi Campus

## Descripción

Mi Campus es una aplicación web diseñada para ayudar a los profesores a gestionar calificaciones, asistencias y mantener un orden diario de los alumnos. Los alumnos pueden ver su situación en cada materia, incluyendo sus calificaciones y asistencias. Además, tanto alumnos como profesores pueden ver información de contacto para facilitar la comunicación vía email.

La idea de Mi Campus nació del deseo de contribuir con pequeñas instituciones que no poseen recursos para incorporar sistemas de gestión educativos. En esta oportunidad, nos enfocamos en un colegio primario/secundario, pero la aplicación puede adaptarse para cualquier institución educativa.

## Índice

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Frontend](#frontend)
    - [Backend](#backend)
2. [Funcionalidades](#funcionalidades)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Diseño](#diseño)
6. [Análisis de QA](#análisis-de-qa)
7. [Contribuidores](#contribuidores)

## Tecnologías Utilizadas

### Frontend

- TypeScript
- React
- Tailwind CSS
- Vite para el routing
- Redux
- React Hook Form / Router DOM / slick
- SweetAlert2
- Vercel

### Backend

- Node.js
- NestJS
- Prisma
- PostgreSQL
- Jest para pruebas

## Funcionalidades

- **Profesores:**
  - Gestión de calificaciones y asistencias.
  - Mantenimiento de información diaria de los alumnos.
- **Alumnos:**
  - Visualización de calificaciones y asistencias.
  - Acceso a información de contacto del profesor.
- **Comunicación:**
  - Información de contacto de alumnos, representantes y profesores para facilitar la comunicación vía email.

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/BaEsp1/MiCampus.git
   ```

2. Navega al directorio del proyecto:

```bash
    cd mi-campus
```

3. Instala las dependencias del frontend y del backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```
4. Configura las variables de entorno en los archivos .env para PostgreSQL y otros servicios necesarios.

5. Corre el servidor backend:
```bash
npm run start:dev
```
6. Corre el frontend:
```bash
cd ../frontend
npm run dev
```

## Uso
1. Regístrate como profesor o alumno.
2. Los profesores pueden gestionar calificaciones y asistencias.
3. Los alumnos pueden visualizar sus calificaciones y asistencias.
4. Utiliza la información de contacto para comunicarte con profesores o representantes.

## Diseño
 --

## Análisis de QA
*--

## Contribuidores 
--

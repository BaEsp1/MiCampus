# Mi Campus

## Descripción

Mi Campus es una aplicación web diseñada para ayudar a los profesores a gestionar calificaciones, asistencias y mantener un orden diario de los alumnos. Los alumnos pueden ver su situación en cada materia, incluyendo sus calificaciones y asistencias. Además, tanto alumnos como profesores pueden ver información de contacto para facilitar la comunicación vía email.

La idea de Mi Campus nació del deseo de contribuir con pequeñas instituciones que no poseen recursos para incorporar sistemas de gestión educativos. En esta oportunidad, nos enfocamos en un colegio primario/secundario, pero la aplicación puede adaptarse para cualquier institución educativa.<br/>

<div >
<img src="Frontend\src\Imagenes\screens\LP-screen.png" alt="screen-LP" width="250"/>
<img src="Frontend\src\Imagenes\screens\Login-screen.png" alt="screen-Login" width="250"/>
<img src="Frontend\src\Imagenes\screens\DashAlumno.png" alt="screen-Dashboard" width="250"/>
</div>

## Índice

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
2. [Funcionalidades](#funcionalidades)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Diseño](#diseño)
6. [Análisis de QA](#análisis-de-qa)
7. [Contribuidores](#contribuidores)


## Tecnologías Utilizadas

| Frontend              | Backend              |  QA & UX/UI          |
|-----------------------|----------------------|----------------------|
| TypeScript            | Node.js              | Postman              |
| React                 | NestJS               | Figma                |
| Tailwind CSS          | Prisma               | Trello               |
| Vite                  | PostgreSQL           | Discord              |
| Redux                 | Jest     | |
| Deploy: - Vercel        | Deploy: - Render       | |


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

## Diseño UX/UI
<br/>
El diseño de Mi Campus, se realizó en Figma: <br/>
<a href="https://www.figma.com/design/iNBQBSb08kgN70DE5cfpAx/Untitled?node-id=0-1&t=xblrtJUiQn1K4Wcd-1" > <img src="Frontend\src\Imagenes\screens\FigmaScreen.png"  width="300"/></a>

## Análisis de QA
*--

## Contribuidores 


|  Rol desarrollado     | Nombre y Apellido     |  Contacto/Redes       |
|-----------------------|----------------------|----------------------|
| Diseñadora UX/UI     |Jessica Rodriguez      |    [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jessi-rod-vex)|
| Tester QA         | Hernan Esquivel   |  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hernan97carp) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hernan-esquivel/) |
| Proyect Manager     | Carlos Mejia         |[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CarlosMejia01) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-alberto-mejia-perez-683600206)|
| Backend           | Diego Garay Cullas        |[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dieguidev) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tu-perfil)|
| Frontend            | Jesus Valencia   |[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/g-susvs) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jesus-guillermo-valencia-salvador)|
| Frontend       | Bárbara Espinola       |[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BaEsp1) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/baesp/)|

## Agradecimientos

<p>Gracias por leer todo el README ♥</p>
<p>Apreciamos tus comentarios y contribuciones para mejorar esta aplicación. Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.</p>
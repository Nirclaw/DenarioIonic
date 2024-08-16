### Denario Lista de Tareas - Documentación

#### 1. **Nombre del Proyecto**

- **Denario Lista de Tareas**

#### 2. **Descripción del Proyecto**

- **Objetivo:** El proyecto fue desarrollado para cumplir con los requisitos de una prueba técnica. Su objetivo principal es implementar un CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js con una base de datos SQL Server.
- Características Principales:
  - Iniciar sesión.
  - Crear nuevas tareas.
  - Modificar tareas existentes.
  - Eliminar tareas.
- **Tecnologías:** El proyecto combina un backend en Node.js con un frontend desarrollado en Angular e Ionic.

#### 3. **Tecnologías Utilizadas**

- Backend:
  - Node.js
  - Express
  - dotenv
  - mssql
  - nodemon
- Frontend:
  - Angular
  - Ionic
- Base de Datos:
  - SQL Server

#### 4. **Configuración del Entorno de Desarrollo**

- Requisitos Previos:

  - Node.js instalado
  - Angular CLI
  - Ionic CLI
  - SQL Server local

- Instalación y Configuración:

  1. Clonar el repositorio del proyecto.
  2. En la carpeta raíz del proyecto, ejecutar `npm install` para instalar las dependencias del proyecto.
  3. Configurar el archivo `.env` con las variables de entorno necesarias para la conexión con la base de datos.
  4. Utilizar el archivo SQL proporcionado en la carpeta `db` para crear la base de datos local.

  #### 5. **API Backend (Node.js)**

  - Endpoints Principales:
    - `DELETE http://127.10.10.10:5100/tareas/delete` - Eliminar una tarea existente.
    - `POST http://127.10.10.10:5100/login` - Autenticación de usuarios.
    - `PUT http://127.10.10.10:5100/tareas/update` - Actualizar una tarea existente.
    - `POST http://127.10.10.10:5100/tareas/newtask` - Crear una nueva tarea.
  - Autenticación:
    - Para acceder a cualquiera de estos endpoints, se requiere un token JWT que se obtiene al iniciar sesión a través del endpoint `/login`.
    - El token debe ser incluido en el encabezado `Authorization` en todas las solicitudes posteriores.



#### **Ejecución de la Aplicación**

- Comandos Necesarios:

  1. **Backend:** En la raíz del proyecto, ejecutar `npm run dev` para iniciar el servidor Node.js.
  2. **Frontend:** En una segunda terminal, dentro de la carpeta del frontend, ejecutar `ionic serve` para iniciar la aplicación Angular/Ionic.

- Acceso a la Aplicación:

  - Después de ejecutar los comandos, la aplicación estará disponible en `http://localhost:8100/login`.

  ![login.png](https://github.com/Nirclaw/DenarioIonic/blob/main/src/img/login.png?raw=true)

  - Credenciales de Prueba:
    - **Juan Pérez:** `juan.perez@example.com`, `password123`
    - **Ana Gómez:** `ana.gomez@example.com`, `password456`
    - **Carlos Díaz:** `carlos.diaz@example.com`, `password789`
  - Una vez que hayas iniciado sesión, serás redirigido al home donde podrás ver y gestionar las tareas.
  - 

  ![home.png](https://github.com/Nirclaw/DenarioIonic/blob/main/src/img/home.png?raw=true)



- Crear una Nueva Tarea:
  - Para crear una nueva tarea, haz clic en el botón ubicado en la esquina superior derecha de la pantalla, identificado con un ícono "+".
  - Esto te llevará a la página donde podrás ingresar los detalles de la nueva tarea.

![creartarea.png](https://github.com/Nirclaw/DenarioIonic/blob/main/src/img/creartarea.png?raw=true)

- Ver Tareas en el Home:
  - Después de crear una tarea, para verla en el home, desliza hacia abajo en la pantalla principal. Esto activará el icono de actualización, y la nueva tarea aparecerá en la lista.

![refrescar.png](https://github.com/Nirclaw/DenarioIonic/blob/main/src/img/refrescar.png?raw=true)



**Editar o Ver Detalles de una Tarea:**

- Para editar una tarea o ver sus detalles, toca la tarea en la lista. Esto te llevará a la página de la tarea, donde podrás modificar, actualizar o eliminar la tarea.
- Después de hacer cambios, desliza hacia abajo nuevamente para refrescar la lista y ver las actualizaciones.



![actualizar o eliminar.png](https://github.com/Nirclaw/DenarioIonic/blob/main/src/img/actualizar%20o%20eliminar.png?raw=true)



#### **Soporte y Contacto**

- **En Desarrollo:** Este proyecto aún está en desarrollo. Si tienes alguna duda, inquietud o necesitas más detalles, no dudes en ponerte en contacto conmigo. Estaré disponible para ayudarte a resolver cualquier posible problema o para brindar explicaciones más detalladas.
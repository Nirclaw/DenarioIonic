CREATE DATABASE TodoList;

USE  TodoList;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    contraseña NVARCHAR(255) NOT NULL,
);

-- TAbla tareas
CREATE TABLE Tareas (
 id INT IDENTITY(1,1) PRIMARY KEY,
 usuario_id INT NOT NULL,
 titulo VARCHAR(255) NOT NULL,
 descripcion VARCHAR(255) NOT NULL,
 estado INT NOT NULL,
 fecha_inicio DATE NOT NULL,
 fecha_vencimiento DATE NOT NULL,
 
)

-- estados
CREATE TABLE estados (
 id INT IDENTITY(1,1) PRIMARY KEY,
 descripcion VARCHAR(255) NOT NULL,
)





Alter table Tareas add constraint "fk_tarea_usuarios" foreign key ("usuario_id") references Usuarios ("id")
Alter table Tareas add constraint "fk_tarea_estado" foreign key (estado) references estados ("id")




INSERT INTO Usuarios (nombre, email, contraseña)
VALUES 
('Juan Pérez', 'juan.perez@example.com', 'password123'),
('Ana Gómez', 'ana.gomez@example.com', 'password456'),
('Carlos Díaz', 'carlos.diaz@example.com', 'password789');


INSERT INTO estados (descripcion)
VALUES 
('progreso'),
('terminado'),
('pendiente');


INSERT INTO Tareas (usuario_id, titulo, descripcion, estado,fecha_inicio, fecha_vencimiento)
VALUES 
(1, 'Finalizar reporte mensual', 'Completar el reporte mensual de ventas', 1,'2024-08-15', '2024-08-15'),
(1, 'Reunión con el equipo', 'Reunión semanal con el equipo para revisar el progreso', 2, '2024-08-15','2024-08-10'),
(2, 'Comprar regalo', 'Comprar un regalo para el cumpleaños de mi hermano', 3, '2024-08-15','2024-08-18'),
(3, 'Renovar licencia de conducir', 'Renovar la licencia de conducir antes de que expire', 3, '2024-08-15','2024-08-05');


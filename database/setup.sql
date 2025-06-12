-- 1. Crear la base de datos si no existe
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'db_api_tp2')
BEGIN
    CREATE DATABASE db_api_tp2;
    PRINT 'Base de datos "db_api_tp2" creada.';
END
ELSE
BEGIN
    PRINT 'La base de datos "db_api_tp2" ya existe.';
END
GO

-- 2. Crear el login (usuario del servidor) si no existe
IF NOT EXISTS (SELECT name FROM sys.sql_logins WHERE name = N'user_api_tp2')
BEGIN
    CREATE LOGIN user_api_tp2 WITH PASSWORD = '1234567';
    PRINT 'Login "user_api_tp2" creado.';
END
ELSE
BEGIN
    PRINT 'El login "user_api_tp2" ya existe.';
END
GO

-- 3. Usar la base de datos recien creada
USE db_api_tp2;
GO

-- 4. Crear el usuario dentro de la base (mapeo del login) si no existe
IF NOT EXISTS (SELECT name FROM sys.database_principals WHERE name = N'user_api_tp2')
BEGIN
    CREATE USER user_api_tp2 FOR LOGIN user_api_tp2;
    PRINT 'Usuario "user_api_tp2" creado en la base.';
END
ELSE
BEGIN
    PRINT 'El usuario "user_api_tp2" ya existe en la base.';
END
GO

-- 5. Otorgar permisos de db_owner
ALTER ROLE db_owner ADD MEMBER user_api_tp2;


--Abrí SQL Server Management Studio (SSMS).

--Click derecho sobre tu servidor → Properties.

--Pestaña Security.

--Seleccioná: ✅ SQL Server and Windows Authentication mode.

--Aceptá y reiniciá el servicio de SQL Server.

--Si no se establece la conexión...:
-- Habilitar TCP/IP y configurar puerto 1433 en SQL Server
-- Abrí SQL Server Configuration Manager.

-- Andá a:
-- SQL Server Network Configuration > Protocols for SQLEXPRESS

-- Habilitá TCP/IP (clic derecho → Enable).

-- Doble clic en TCP/IP → pestaña IP Addresses
-- En la sección IPAll:

-- TCP Port → poné 1433

-- Presioná OK.

-- Reiniciá el servicio de SQL Server Services:
-- SQL Server (SQLEXPRESS) → clic derecho → Restart.
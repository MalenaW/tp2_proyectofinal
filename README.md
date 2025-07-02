## ENDPOINTS

### 🧑‍💻 AUTH

---

#### `POST /users/register`

Registra un nuevo usuario en la base de datos.

**Body esperado:**
```
{
  "nombre": "Juan",
  "email": "juan@example.com",
  "password": "123456"
}
```
---

#### `POST /users/login`

Inicia sesión y retorna un token JWT.

**Body esperado:**
```
{
  "email": "juan@example.com",
  "password": "123456"
}
```

---

### 🎬 MOVIES

---

#### `GET /movie/popular`

Obtiene una lista de películas populares desde la API externa de The Movie Database (TMDB).

**Parámetros opcionales:**
- `page` (número): permite paginar los resultados. Por defecto es `1`.

**Ejemplo:**
```
/movie/popular?page=2
```

---

#### `GET /movie/:id`

Obtiene el detalle completo de una película por su ID, utilizando la API de TMDB.

**Ejemplo:**
```
/movie/550
```

---

#### `GET /movie/genre/:genreId`

Obtiene una lista de películas según un género específico.

**Parámetros:**
- `genreId` (número): ID del género según TMDB.
- `page` (número, opcional): permite paginar los resultados. Por defecto es `1`.

**Ejemplo:**
```
/movie/genre/28?page=3
```
---

### ❤️ FAVORITES

---

#### `GET /favorite/`

Lista todas las películas favoritas del usuario autenticado.

---

#### `POST /favorite/:movieId`

Agrega una película a favoritos.

**Parámetros:**
- `movieId` (número): ID de la película que se desea marcar como favorita.

---

#### `DELETE /favorite/:movieId`

Elimina una película de favoritos.

**Parámetros:**
- `movieId` (número): ID de la película que se desea eliminar de favoritos.

---

### 📝 REVIEWS

---

#### `GET /review/:movieId`

Lista todas las reseñas para una película específica.

---

#### `POST /review/new/:movieId`

Lista todas las reseñas para una película específica.

**Body esperado:**
```
{
  "rating": 8,
  "comment": "Excelente película, muy recomendable."
}
```

---

#### `PUT /review/:reviewId`

Actualiza una reseña existente.

**Body esperado:**
```
{
  "rating": 7,
  "comment": "Mejoró con una segunda vista."
}
```
---

#### `DELETE /review/:reviewId`

Elimina una reseña por su ID.

---

### 👮‍♂️ ADMIN

Estas rutas requieren autenticación como administrador (requireAdminAuth).

---

#### `GET /admin/users`

Obtiene una lista de todos los usuarios registrados en la base de datos.

---

#### `DELETE /admin/reviews/:reviewId`

Permite aL administrador eliminar cualquier reseña de la base de datos.

---

## 🧱 CONFIGURACIÓN DE LA BASE DE DATOS (SQL Server)

Antes de iniciar el servidor por primera vez, es necesario configurar la base de datos en SQL Server:

1. Abrí SQL Server Management Studio (SSMS) o cualquier cliente que uses.
2. Ejecutá las queries ubicadas dentro de `database/setup.sql`:

   - Crea la base de datos `db_api_tp2` si no existe.
   - Crea un usuario con su respectivo login.
   - Asigna permisos básicos de acceso a la base.
   - Incluye opciones comentadas que se pueden modificar según la configuración de tu equipo.

> ⚠️ Asegurate de revisar y ajustar el nombre de instancia y las configuraciones antes de ejecutar el script.

---

## 🚀 INICIAR EL PROYECTO

1. Instalar las dependencias:
   ```
   npm install
   ```

2. Sincronizar los modelos con la base de datos (solo la primera vez):
   ```
   node database/sync-db.js
   ```

3. Iniciar el servidor:
   ```
   npm start
   ```

---

> Asegurate de tener creado el archivo `.env` con las variables necesarias para la conexión a la base de datos y la API de TMDB.

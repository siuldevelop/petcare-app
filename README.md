# PetCare – Gestor de Mascotas

> ⚠️ **Nota:** El proyecto fue desarrollado con Expo en lugar de React Native CLI puro, debido a incompatibilidades técnicas con Android Studio en los equipos utilizados durante el desarrollo.

---

## Integrantes

- Jhon Montoya Tejada
- Luis Angel Arquez Larios

---

## Descripcion del Proyecto

PetCare es una aplicacion movil para la gestión de mascotas. Permite registrar nuevas mascotas mediante un formulario de multiples campos, visualizar el listado de mascotas registradas, consultar el detalle de cada una y acceder a una pantalla de consejos de cuidado.

---

## Tecnologías Utilizadas

- [React Native](https://reactnative.dev/) con [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) – Stack Navigator + Bottom Tab Navigator.
- [Expo Go](https://expo.dev/client) para pruebas en dispositivo físico

---

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js 18+](https://nodejs.org)
- npm (incluido con Node.js)
- La aplicación **Expo Go** en tu dispositivo móvil:
  - [Android – Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS – App Store](https://apps.apple.com/app/expo-go/id982107779)

---

## Instrucciones de Ejecucion

### 1. Clonar el repositorio

- Crear una carpeta en el escritorio.
- Arrastra la carpeta a Visual Studio Code.
- Ejecutar en la terminal CMD desde VS Code:

```bash
git clone https://github.com/siuldevelop/petcare-app.git
```
```bash
cd petcare-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npx expo start
```

Una vez iniciado, aparecerá un **código QR** en la terminal. (Scroll hacia arriba para encontrar el QR en la terminal).

> **Importante:** el dispositivo móvil y el computador deben estar conectados a la **misma red WiFi**.

**Para ver la app en tu celular:**
1. Abre la app **Expo Go** en tu dispositivo.
2. Escanea el código QR que aparece en la terminal.
3. La aplicación cargará automáticamente.

---

## Funcionalidades

- **Mascotas:** Lista de mascotas con navegación al detalle individual.
- **Detalle:** Muestra nombre, especie, raza, edad y peso. Incluye toggle de favorito.
- **Registrar:** Formulario controlado con validación en tiempo real y botón de limpieza.
- **Consejos:** Rotación automática de consejos cada 5 segundos con indicador de progreso.
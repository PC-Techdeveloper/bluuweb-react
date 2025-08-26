# Proyecto de Prácticas de React con TypeScript (Curso Bluuweb)

Este repositorio contiene el código fuente y los ejemplos utilizados en el curso
de React con TypeScript. Está diseñado para que los estudiantes puedan clonar,
experimentar y seguir las lecciones de una manera práctica.

El proyecto fue creado utilizando [Vite](https://vitejs.dev/), una herramienta
moderna para el desarrollo web que ofrece un entorno de desarrollo rápido y
optimizado.

## Ejemplos y Conceptos Incluidos

Este proyecto cubre una variedad de conceptos fundamentales y avanzados de
React, incluyendo:

- **Componentes y Props:** Creación de componentes reutilizables y paso de datos
  entre ellos.
- **Estado (`useState`):** Manejo del estado local de los componentes.
- **Efectos Secundarios (`useEffect`):** Conexión con APIs, suscripciones y
  manejo del ciclo de vida del componente.
- **Renderizado de Listas:** Mapeo de arrays a elementos JSX.
- **Manejo de Eventos:** Captura de interacciones del usuario como clics y
  cambios en formularios.
- **Formularios Controlados:** Vinculación de los campos de un formulario al
  estado del componente.
- **Hooks Personalizados (Custom Hooks):** Creación de lógica reutilizable y
  abstraída.
- **Comunicación con APIs:** Uso de `fetch` para obtener datos de servicios
  externos (ej. Pokémon API).
- **TypeScript en React:** Tipado de componentes, props, estado y eventos para
  un código más robusto y mantenible.
- **Styling:** Uso de CSS plano y frameworks como Bootstrap.

---

## Cómo Empezar

Sigue estas instrucciones para configurar y ejecutar el proyecto en tu máquina
local.

### Pre-requisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Git](https://git-scm.com/)

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/bluuweb/react-vite-typescript-2024.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd react-vite-typescript-2024
    ```

3.  **Instala las dependencias:** Puedes usar `pnpm` (recomendado), `npm` o
    `yarn`.

    ```bash
    # Con pnpm
    pnpm install

    # O con npm
    npm install

    # O con yarn
    yarn install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm run dev
    ```
    Esto iniciará la aplicación en modo de desarrollo. Abre
    [http://localhost:5173](http://localhost:5173) (o el puerto que indique la
    terminal) en tu navegador para ver el proyecto.

---

## Conceptos Clave Utilizados

Aquí hay una breve definición de algunas de las herramientas y conceptos de
React que encontrarás en este proyecto.

### ¿Qué es un Componente?

Los componentes son como funciones de JavaScript que aceptan entradas
arbitrarias (llamadas "props") y devuelven elementos de React que describen lo
que debería aparecer en la pantalla. Son los bloques de construcción
fundamentales de cualquier aplicación de React.

### Props (Propiedades)

Las `props` (abreviatura de propiedades) son la forma en que los componentes de
React se comunican entre sí. Permiten pasar datos de un componente padre a un
componente hijo, haciendo que los componentes sean dinámicos y reutilizables.

### State (Estado) y `useState`

El "estado" es un objeto que representa las partes de la aplicación que pueden
cambiar. El hook `useState` es una función de React que te permite añadir estado
a los componentes funcionales. Cuando el estado de un componente cambia, React
vuelve a renderizarlo automáticamente para reflejar esos cambios.

### Efectos Secundarios y `useEffect`

Los efectos secundarios son operaciones que afectan a algo fuera del alcance de
la función que se está ejecutando, como obtener datos de una API, configurar una
suscripción o manipular el DOM manualmente. El hook `useEffect` permite ejecutar
estos efectos secundarios desde los componentes funcionales.

### Hooks Personalizados (Custom Hooks)

Un hook personalizado es una función de JavaScript cuyo nombre comienza con
`use` y que puede llamar a otros hooks. Nos permiten extraer la lógica de un
componente en funciones reutilizables, manteniendo el código organizado y fácil
de mantener.

# FaaW7 Components

## 🇬🇧 English Documentation

### Overview
**FaaW7 Components** is a web components library that simulates the visual style and interactive behavior of the Windows 7 operating system. It’s built using **Lit** and designed for **microfrontend architectures**, allowing independent apps to share the same nostalgic UI theme.

The library provides a complete set of components — buttons, modals, windows, status bars, tooltips, accordions, and more — styled and animated to replicate the look and feel of Windows 7.

---

### ✨ Features
- 🧩 **Modular design** – import only what you need.
- 🪟 **Accurate Windows 7 UI simulation**.
- ⚡ **Built with Lit** – lightweight, reactive, and fast.
- 🧪 **Full test coverage with Vitest + Storybook integration**.
- 🎨 **Customizable theming via CSS variables**.
- 🧱 **Ideal for microfrontends** – each component is encapsulated and framework-agnostic.

---

### 🚀 Installation

```bash
npm install faaw7-components
# or
pnpm add faaw7-components
```

---

### 🧰 Usage Example

```html
<script type="module">
  import 'faaw7-components/faaw7-button.js';
</script>

<faaw7-button default>Click me</faaw7-button>
```

You can also integrate it into frameworks like **React**, **Vue**, or **Angular**, using native web components support or wrapper components.

---

### 🎨 Theming and Customization

FaaW7 exposes a variety of **CSS custom properties** for full control of colors, borders, shadows, and fonts. Example:

```css
:root {
  --faaw7-color-border: #c3c3c3;
  --faaw7-color-text: #000;
  --faaw7-gradient-bg: linear-gradient(to bottom, #f0f0f0, #dcdcdc);
  --faaw7-border-radius: 3px;
}
```

You can override these variables globally or locally per component.

---

### 🧩 Components Included

| Category | Components |
|-----------|-------------|
| Core UI | Button, Checkbox, Textfield, Select, Slider |
| Containers | Window, Modal, Accordion, Fieldset |
| Navigation | Menu, Tabs, TreeView |
| System Elements | StatusBar, Tooltip, Toast, ProgressBar, Spinner |
| Media | AudioPlayer |
| Others | ContextMenu, Table, Disclosure, Combobox |

---

### 🧱 Development and Testing

Run the Storybook for visual testing and documentation:

```bash
pnpm storybook
```

Run unit tests:

```bash
pnpm test
```

Build for production:

```bash
pnpm build
```

---

### 🧑‍💻 For Developers

To create a new component:

```bash
pnpm generate component <component-name>
```

Each component follows Lit’s `customElement` structure and has:
- A `.ts` implementation file
- Optional `.css.ts` for scoped styles
- `.test.ts` file for Vitest unit testing
- `.stories.ts` for Storybook

---

### 📦 Microfrontend Integration

Because each component is framework-independent, **FaaW7** is ideal for **microfrontend architectures**. You can import it into any micro app without conflicts.

Example setup:

```js
import 'faaw7-components/faaw7-window.js';
import 'faaw7-components/faaw7-status-bar.js';
```

---

### 🧠 Accessibility

All components are built with **ARIA roles**, keyboard navigation, and accessibility testing (`@storybook/addon-a11y`).

---

### 📚 Documentation

The complete interactive documentation can be explored via **Storybook** or viewed locally after installing the package.

---

### 🏗️ Tech Stack
- **Lit 3.0**
- **TypeScript**
- **Storybook Web Components + Vite**
- **Vitest + Testing Library**
- **CSS Variables for Theming**

---

### 📄 License
MIT © FaaW7 Contributors

---

## 🇪🇸 Documentación en Español

### Descripción General
**FaaW7 Components** es una librería de componentes web que simula la interfaz visual y el comportamiento interactivo del sistema operativo **Windows 7**. Está desarrollada con **Lit** y pensada para arquitecturas **microfrontend**, permitiendo que aplicaciones independientes compartan la misma estética clásica.

Incluye una amplia gama de componentes: botones, modales, ventanas, tooltips, barras de estado, acordeones y más, todos fielmente inspirados en el entorno Windows 7.

---

### ✨ Características
- 🧩 **Diseño modular**: importa solo los componentes que necesites.
- 🪟 **Simulación precisa del entorno Windows 7**.
- ⚡ **Basada en Lit**: ligera, reactiva y rápida.
- 🧪 **Cobertura de pruebas con Vitest + Storybook**.
- 🎨 **Temas personalizables mediante variables CSS**.
- 🧱 **Ideal para microfrontends**: cada componente es independiente.

---

### 🚀 Instalación

```bash
npm install faaw7-components
# o
pnpm add faaw7-components
```

---

### 🧰 Ejemplo de Uso

```html
<script type="module">
  import 'faaw7-components/faaw7-button.js';
</script>

<faaw7-button default>Haz clic</faaw7-button>
```

También puedes integrarla en frameworks como **React**, **Vue** o **Angular**.

---

### 🎨 Personalización y Temas

La librería ofrece variables CSS para modificar colores, sombras, fuentes y bordes:

```css
:root {
  --faaw7-color-border: #c3c3c3;
  --faaw7-color-text: #000;
  --faaw7-gradient-bg: linear-gradient(to bottom, #f0f0f0, #dcdcdc);
  --faaw7-border-radius: 3px;
}
```

Puedes redefinirlas a nivel global o por componente.

---

### 🧩 Componentes Disponibles

| Categoría | Componentes |
|------------|-------------|
| Elementos Base | Button, Checkbox, Textfield, Select, Slider |
| Contenedores | Window, Modal, Accordion, Fieldset |
| Navegación | Menu, Tabs, TreeView |
| Sistema | StatusBar, Tooltip, Toast, ProgressBar, Spinner |
| Multimedia | AudioPlayer |
| Otros | ContextMenu, Table, Disclosure, Combobox |

---

### 🧱 Desarrollo y Pruebas

Ejecutar Storybook:

```bash
pnpm storybook
```

Ejecutar pruebas unitarias:

```bash
pnpm test
```

Construir para producción:

```bash
pnpm build
```

---

### 🧑‍💻 Para Desarrolladores

Crear un nuevo componente:

```bash
pnpm generate component <nombre-del-componente>
```

Cada componente incluye:
- Un archivo `.ts` principal
- Opcional `.css.ts` con estilos
- Archivo `.test.ts` con pruebas
- Archivo `.stories.ts` para Storybook

---

### 📦 Integración en Microfrontends

Cada componente es **independiente del framework**, por lo que **FaaW7** es perfecto para integrarse en microfrontends.

Ejemplo:

```js
import 'faaw7-components/faaw7-window.js';
import 'faaw7-components/faaw7-status-bar.js';
```

---

### 🧠 Accesibilidad

Todos los componentes están desarrollados con soporte **ARIA**, navegación por teclado y pruebas de accesibilidad integradas (`@storybook/addon-a11y`).

---

### 📚 Documentación

Puedes explorar la documentación completa de forma interactiva mediante **Storybook** o en tu entorno local tras instalar el paquete.

---

### 🏗️ Tecnologías
- **Lit 3.0**
- **TypeScript**
- **Storybook + Vite**
- **Vitest + Testing Library**
- **Variables CSS para temas personalizados**

---

### 📄 Licencia
MIT © FaaW7 Contributors

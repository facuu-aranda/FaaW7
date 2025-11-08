🖥️ FaaW7 Components
Una biblioteca de componentes web nostálgica que simula la apariencia y el comportamiento de la interfaz de usuario de Windows 7.

Construida para microfrontends y aplicaciones web modernas, faaw7-components trae de vuelta la estética clásica de Windows 7 con la potencia y eficiencia de los componentes web modernos (Lit).

✨ Características Principales
Estética W7 de Alta Fidelidad: Cada componente ha sido diseñado para replicar la apariencia y la sensación de Windows 7, desde los degradados de los botones hasta el diseño de las ventanas.


Basado en Lit: Construido sobre Lit, lo que garantiza componentes web ligeros, rápidos y que se integran fácilmente en cualquier framework (React, Angular, Vue, Svelte) o en HTML simple.


Integración Nativa con Formularios: Componentes como faaw7-checkbox, faaw7-textfield, faaw7-select y faaw7-radio-group utilizan ElementInternals, permitiendo que funcionen de forma nativa dentro de etiquetas <form>.






Documentación con Storybook: El proyecto está completamente documentado con Storybook, lo que te permite explorar, probar y ver cada componente de forma aislada.



Testeado con Vitest: Incluye una configuración de pruebas robusta con Vitest y Playwright para garantizar la fiabilidad de los componentes.


📋 Componentes Incluidos
La biblioteca ofrece una amplia gama de componentes que cubren la mayoría de las necesidades de una aplicación de escritorio:

Ventanas y Contenedores
faaw7-desktop

faaw7-window

faaw7-modal

faaw7-title-bar


faaw7-fieldset 


faaw7-accordion 


faaw7-disclosure 

faaw7-tab-group

faaw7-tab


faaw7-tab-panel 

Formularios y Botones

faaw7-button 


faaw7-icon-button 


faaw7-file-button 


faaw7-checkbox 


faaw7-radio 


faaw7-radio-group 


faaw7-textfield 


faaw7-select 


faaw7-slider 


faaw7-custom-slider 


faaw7-combobox 


faaw7-searchbox 

Menús y Navegación

faaw7-menu 


faaw7-menu-bar 


faaw7-menu-item 


faaw7-context-menu 

Visualización y Datos

faaw7-listbox 


faaw7-table 


faaw7-treeview 


faaw7-progress-bar 


faaw7-spinner 

Notificaciones y Feedback

faaw7-tooltip 


faaw7-toast 


faaw7-toast-container 

Otros

faaw7-status-bar 


faaw7-status-bar-field 


faaw7-audio-player 

🚀 Instalación
Bash

npm install faaw7-components
(Nota: Este será el comando una vez que la biblioteca esté publicada en npm)

💡 Uso Básico
Puedes importar los componentes que necesites directamente en tu aplicación.

JavaScript

// en tu archivo main.js o similar
import 'faaw7-components/src/components/faaw7-window.js';
import 'faaw7-components/src/components/faaw7-button.js';
HTML

<faaw7-window title="Mi Aplicación" active>
  <p>¡Hola, mundo nostálgico!</p>
  
  <div slot="footer" style="display: flex; justify-content: flex-end; gap: 6px;">
    <faaw7-button default>Aceptar</faaw7-button>
    <faaw7-button>Cancelar</faaw7-button>
  </div>
</faaw7-window>
🛠️ Desarrollo Local
¿Quieres contribuir o probar los componentes localmente?

Clona el repositorio:

Bash

git clone https://github.com/tu-usuario/faaw7-components.git
cd faaw7-components

Instala las dependencias (el proyecto usa pnpm ):


Bash

pnpm install
Inicia Storybook: Este comando abrirá el catálogo de componentes en tu navegador.

Bash

pnpm run storybook 



Ejecuta las pruebas:

Bash

pnpm run test



📄 Licencia
Este proyecto está licenciado bajo los términos de la licencia MIT. (Puedes cambiar esto si lo deseas).
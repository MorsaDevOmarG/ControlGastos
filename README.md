# Proyecto Control de Gastos

## Herramientas y/o Tecnologías

- React
  - **_npm create vite@latest_**
  - _Project name:_ **NombreProyecto**
  - _Select a framework:_ **Seleccionamos el FRAMEWORK con el teclado, aparecerá puntos o flechas, elegimos: _REACT_**
  - _Select a variant:_ **Seleccionamos para este proyecto: _TypeScript + SWC_**
  - _Use rolldown-vite (Experimental)?:_ **No**
  - _Install with npm and start now?_ **Yes**
- TailwindCSS
  - **_npm i tailwindcss @tailwindcss/vite_**
  - Configuramos el archivo: **vite.onfig**:
    - _import tailwindcss from '@tailwindcss/vite';_
    - Agregamos también:
      - _plugins: [react(), tailwindcss()],_
  - En el archivo: **index.css**, agregamos:
    - _@import "tailwindcss"_
- Vite
- ContextAPI
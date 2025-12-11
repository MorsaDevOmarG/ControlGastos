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

## CONTEXTAPI

- _Context API_ permite tener un estado global en tu app, esto quiere decir que solo se tiene una instancia del _state_ que se puede acceder desde cualquier componente sin pasarlo por diferentes componentes vía props.
- El _hook_ para utilizarlo es:
  - **useContext**
- Muchas librerías utilizan:
  - **Context API**

  ### ALTERNATIVAS

  - _Context API_ no requiere dependencias pero su _boilerplate_ para configurarlo puede ser algo complejo.
  - Otras alternativas son:
    - _Zustand_
    - _Redux_
    - _Toolkit_



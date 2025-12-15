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
- Modales - HEADLESS
  - **_npm i @headlessui/react_**
  - **_npm i @heroicons/react_**
- Calendario - DATE-PICKER
  - **_npm install react-date-picker_**
  - **_npm i react-calendar_**
  - Se importa la librería, ej: **ExpenseForm.tsx**
  - _https://www.npmjs.com/package/react-date-picker_
- UUID - Generador de _ID'S_
  - **_npm i uuid_**
  - **_npm i --save-dev @types/uuid_**
- React Swipeable list
  - Efecto para arrastrar elementos.
  - Ej: Un botón para eliminar, arrastras o deslizas hacia izquierda o derecha
  - **_npm i react-swipeable-list_**

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



## Componentes

### component(name, setup)

Crea un nuevo componente web personalizado.

```javascript
component("my-component", (props) => {
  // setup code
  return html`...`,
});


// Factory Class HTMLElement
// –––––––––––––––––––––––––
//    |
//    v
component("my-component", (props) => {
//               ^             ^
//         HTML tag name    properties
//         –––––––––––––    ––––––––––
//
//  (Component definition here ... )
// 
// return view
  return html`...`,
});   
```

# Clases HTML y CSS

Este repositorio contiene el codigo fuente de un servidor nodejs(backend) y una web(frontend) que se utilizo en el club de chicas programadoras que tuvo 12 sesiones entre abril y julio(?) de 2025 en las oficinas de Globant Cali.   

Mas info de esta hermosa iniciativa:   

* [Club de chicas programadoras](https://www.chicasprogramadoras.club/)  
* [Globant](https://www.globant.com/be-kind/esg)   

---

Sobre que se hace aqui...

### Backend  

Como menciono arriba el backend es un servidor NodeJS que utiliza ExpressJS(por su facilidad de implementacion) que expone el frontend como archivos estaticos y tiene una ruta para que suban archivos a este servidor y dichos archivos esten disponibles de manera estatica asi como el front. En resumen lo que permite es que las chicas de la clase puedan subir sus paginas web basicas y esten disponibles para visualizar.

### Frontend  

El frontend usa Bootstrap y VanillaJS por facilidad, nothing fancy, la idea es que este codigo fuente sirva como intro al mundo de la programacion. Esta web tiene los componentes minimos para poder subir los archivos html y assets que se requieran para que las paginas web funcionen como las chicas necesitan.

### Para ejecutar localmente

```
> npm run build
> npm start
```

### Stack de tecnologias
- [NodeJS](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com/)
- [BootStrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)  
- [VanillaJS](http://vanilla-js.com/) 😆
  

Todo se hizo lo mas basico posible, de nuevo por el foco y el publico de las sesiones, react u otro framework/libreria para el front es algo que no necesitamos porque las clases estuvieron pensadas para ser una intro al mundo de la programacion(este mismo argumento aplica para el backend).

***NO USO TILDES***

### TODO: diagrama de infra 
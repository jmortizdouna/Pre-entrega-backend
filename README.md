# Proyecto Backend con Node.js

Este proyecto es una aplicación de consola desarrollada con Node.js que consume la API FakeStore para gestionar productos mediante comandos en terminal.

## Tecnologías utilizadas

- Node.js
- JavaScript
- Fetch API
- FakeStore API

## Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Instalar dependencias:

```bash
npm install
```

## Configuración

El proyecto utiliza ESModules.

Verificar que el archivo `package.json` tenga:

```json
"type": "module"
```

## Ejecutar el proyecto

### Obtener todos los productos

```bash
npm run start GET products
```

### Obtener un producto por ID

```bash
npm run start GET products/1
```

### Crear un producto

```bash
npm run start POST products "Remera Roja" 1500 ropa
```

### Eliminar un producto

```bash
npm run start DELETE products/7
```

## Funcionalidades

- Consultar productos
- Consultar producto específico
- Crear productos
- Eliminar productos
- Manejo de peticiones HTTP
- Consumo de API REST

## Autor

Juan Manuel Ortiz Douna


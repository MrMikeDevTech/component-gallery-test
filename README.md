# Librería de Componentes (Pruebas)

Proyecto base para la librería de componentes de la empresa.

## Instalación
Para instalarlo como dependencia en otro proyecto:
```bash
bun add github:MrMikeDevTech/component-gallery-test
```

## Desarrollo
1. `bun install`
2. `bun run storybook` (Para ver componentes)
3. `bun run build` (Para generar el paquete)


### 3. Pasos para subirlo a GitHub
Si aún no lo has subido, haz esto desde la terminal en la raíz de tu proyecto:

1. **Inicializa Git:** `git init`
2. **Crea el archivo `.gitignore`** con el contenido que ajustamos antes.
3. **Añade todo:** `git add .`
4. **Haz el commit:** `git commit -m "feat: estructura base de libreria con storybook"`
5. **Súbelo:**
    * Ve a GitHub, crea un repo nuevo y sigue las instrucciones que te dan ("...or push an existing repository from the command line").

### 4. ¿Cómo usarlo después?
Una vez que el repo esté en GitHub, **no necesitas publicar en NPM**. Al hacer `bun add github:MrMikeDevTech/component-gallery-test`, Bun detectará el `prepare` script, ejecutará `tsup` por ti y tendrás tu carpeta `dist` lista para usar en tu proyecto principal.
---
title: "Tutorial para crear un blog con Markdown y Next.js"
date: "2024-07-01"
---

# Tutorial para crear un blog

Fuente tomada del video [Cómo crear un blog jamstack con next, ssg, react y markdown](https://youtu.be/g0D6VCh_fvA?si=-5NbGUoGimRzofr7) de Carlos Azaustre - Aprende JavaScript

## Introducción

Este blog está diseñado para ayudarte a aprender cómo crear un blog básico a través de los siguientes pasos.

## 1. Instalar dependencias

### 1.1 Instalar Node.js

1. Ingresar a la página oficial para descargar el instalador `node-v20.15.0-x64.msi` de Node.js en tu computador. En este tutorial se instalará una versión v20.15.0 para Windows.
2. Al ejecutar el instalador se abrirá una ventana en la que sólo tienen que indicar que aceptan los términos y condiciones, seleccionar next varias veces y finalizar. A continuación muestro una secuencia de lo que hice:

![1719772466875](image/index/1719772466875.png)

![1719772513692](image/index/1719772513692.png)

![1719772526439](image/index/1719772526439.png)

![1719772630805](image/index/1719772630805.png)

![1719772639438](image/index/1719772639438.png)

![1719772652491](image/index/1719772652491.png)

![1719772662830](image/index/1719772662830.png)

![1719772669047](image/index/1719772669047.png)

### 1.2 Validar que tienes instalado Node.js y la versión

Sólo basta con ejecutar en `PowerShell` el comando `node -v`

```
PS C:\Users\USUARIO> node -v
v20.15.0
```

En caso que no esté instalado o tengas una versión inferior a la 14, deberás instalar una versión más resiente.

### 1.3 Instalar o actualizar npm

Basta con ejecutar el comando `npm install -g npm@latest`

```
PS C:\Users\USUARIO\scripts\markdown-blog-tutorial> npm install -g npm@latest

changed 13 packages in 7s

24 packages are looking for funding
  run `npm fund` for details
```

En este caso la versión que tengo es

```
PS C:\Users\USUARIO\scripts\markdown-blog-tutorial> npm -version
10.8.1
```

## 2. Crear el proyecto

En este caso vamos a crear el proyecto `markdown-blog-tutorial` sin embargo puedes poner el nombre del proyecto que tu quieras para tu blog.

### 2.1 Paso a paso

1. El comando para crear el proyecto es
   ```
   npx create-next-app markdown-blog-tutorial
   ```
2. Posteriormente sale esta pregunta la cual respondes con `y`
   ```
   Ok to proceed? (y) y
   ```
3. Después sale esta pregunta, la cual respondemos con `No` a todo.
   ```
   √ Would you like to use TypeScript? ... No / Yes
   √ Would you like to use ESLint? ... No / Yes
   √ Would you like to use Tailwind CSS? ... No / Yes
   √ Would you like to use `src/` directory? ... No / Yes
   √ Would you like to use App Router? (recommended) ... No / Yes
   √ Would you like to customize the default import alias (@/*)? ... No / Yes
   ```

### 2.2 Resultado completo de la creación del proyecto

Así se ve completa toda la ejecución de la creación del proyecto:

```cmd
PS C:\Users\USUARIO\scripts> npx create-next-app markdown-blog-tutorial
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
Creating a new Next.js app in C:\Users\USUARIO\scripts\markdown-blog-tutorial.

Using npm.

Initializing project with template: default 


Installing dependencies:
- react
- react-dom
- next


added 21 packages, and audited 22 packages in 17s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created markdown-blog-tutorial at C:\Users\USUARIO\scripts\markdown-blog-tutorial
```

### 2.3 Distribución principal de las carpetas y archivos en el proyecto

```
/markdown-blog-tutorial
├───/node_modules
├───/page
|    └index.js
├───/public
├───/styles
├───.gitignore
├───jsconfig.json
├───next.config.mjs
├───package-lock.json
├───package.json
└───README.md
```

## 3. Ejecución de prueba del blog

Usa el comando `npm run dev`. Esto generará lo siguiente

```
PS C:\Users\USUARIO\scripts\markdown-blog-tutorial> npm run dev

> markdown-blog-tutorial@0.1.0 dev
> next dev

  ▲ Next.js 14.2.4
  - Local:        http://localhost:3000

 ✓ Starting...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

 ✓ Ready in 3.8s
 ○ Compiling / ...
 ✓ Compiled / in 7.6s (544 modules)
 GET / 200 in 8057ms
 ○ Compiling /favicon.ico ...
 ✓ Compiled /favicon.ico in 4.5s (304 modules)
 GET /favicon.ico 200 in 4608ms

```

Y esta es una captura de lo que se ve en `http://localhost:3000/`

![1719788392260](image/index/1719788392260.png)

Como puedes observar se ha creado una plantilla funcional de

## 4. Personalización de la plantilla

### 4.1. Personalizar el archivo `index.js`

Originalmente el contenido del archivo `/page/index.js` es este:

<details>
   <summary>Contenido original</summary>

```jsx
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing 
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-></span>
            </h2>
            <p>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-></span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-></span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-></span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
```

</details>

Sin embargo para este tutorial se ha cambiado por esta plantilla:

```jsx
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tutorial crear blog</title>
        <meta name="description" content="Generated by tutorial crear blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.tittle}>Tutorial crear blog</h1>
        <div className={styles.description}>
          <p>
            Get started by editing 
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-></span>
            </h2>
            <p>
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
```

Esta es una captura de cómo se ve el blog con los ajustes:

![1719889479365](image/index/1719889479365.png)

## 5. Instalar dependencias adicionales

Actualmente este es el contenido de las dependencias que se encuentran en `package.json`:

```json
{
  "name": "markdown-blog-tutorial",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.4"
  }
}
```

1. Requerimos instalar la biblioteca `gray-matter` para poder leer en un archivo Markdown la metadata como el título y la fecha, y el contenido del Markdown. Como ejemplo, te comparto las primeras líneas de este Markdown `/blogs/tutorial_crear_blog_basico/index.mdx` para que identifiques la metadata y el contenido:

   ```markdown
   ---
   title: "Tutorial para crear un blog con Markdown y Next.js"
   date: "2024-07-01"
   ---


   # Tutorial para crear un blog

   ...
   ```
2. Requerimos instalar la biblioteca `next-mdx-remote` para poder parsear Markdown para Next.js, esto significa convertir el texto escrito en formato Markdown a una estructura HTML que pueda ser interpretada y renderizada por un navegador web.

### 5.1. Instalar `gray-matter` y `next-mdx-remote`

Para instalar `gray-matter` y `next-mdx-remote` sólo basta ejecutar el siguiente comando `npm i gray-matter next-mdx-remote`. Este es un ejemplo de la ejecución:

```cmd
PS C:\Users\USUARIO\scripts\markdown-blog-tutorial> npm i gray-matter next-mdx-remote

added 142 packages, and audited 164 packages in 23s

91 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Ahora el contenido de las dependencias que se encuentran en `package.json` es este:

```json
{
  "name": "markdown-blog-tutorial",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "14.2.4",
    "next-mdx-remote": "^5.0.0",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

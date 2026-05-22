# Calculadora Lab 7 
## Pedro Caso - 241286

Calculadora web desarrollada como parte del Lab 7 del curso de Desarrollo Web. Implementada con React + TypeScript, enfocada en diseño de componentes, testing y linting.

---

## Tecnologías utilizadas

- **React 19** — librería de UI basada en componentes
- **TypeScript 6** — tipado estático
- **Vite 8** — bundler y servidor de desarrollo
- **Vitest 4** — framework de testing unitario
- **Testing Library** — utilidades para testear componentes React
- **Storybook 10** — documentación y visualización de componentes
- **ESLint 10** — linting con reglas custom (sin punto y coma, máx. 120 caracteres por línea)
- **Playwright** — browser testing para Storybook

---

## Cómo correr el proyecto
primero se debe clonar el repositorio

```bash
git clone https://github.com/Pxdro-410/lab7-web1PC.git
cd calculadora-lab7web
```

### Instalar dependencias

```bash
npm install
```

### Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Correr tests

```bash
npm test
```

### Correr linter

```bash
npm run lint
```

### Storybook

```bash
npm run storybook
```

Abre [http://localhost:6006](http://localhost:6006) en tu navegador.

### Build de producción

```bash
npm run build
```

---

## Funcionalidades

### Operaciones soportadas

- Suma `+`
- Resta `-`
- Multiplicación `×`
- División `÷`
- Módulo `%`
- Igual `=`
- Toggle positivo/negativo `+/-`
- Punto decimal `.`
- Limpiar `C`

### Reglas del display

- Máximo **9 caracteres** (incluyendo punto decimal y signo negativo)
- Resultados **negativos** → muestra `ERROR`
- Resultados **mayores a 999,999,999** → muestra `ERROR`
- División por cero → muestra `ERROR`
- Decimales largos se truncan a 9 caracteres

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Calculator.tsx       # Componente raíz de la calculadora
│   ├── Display.tsx          # Pantalla de la calculadora
│   ├── Keypad.tsx           # Teclado numérico
│   ├── CalcButton.tsx       # Botón individual
│   ├── MathBackground.tsx   # Fondo decorativo
│   ├── Credentials.tsx      # Datos del autor
│   └── buttons.ts           # Definición de botones y acciones
├── hooks/
│   └── useCalcPC.ts         # Hook custom con toda la lógica de la calculadora
└── test/
    └── useCalcPC.test.ts    # Tests unitarios del hook
```

---

## Tests

Se implementaron **7 tests no triviales** sobre el hook `useCalcPC`:

1. Concatenación correcta de múltiples dígitos
2. ERROR al resultado negativo (ej. 3 - 5)
3. ERROR al resultado mayor a 999,999,999
4. Cálculo correcto en operadores encadenados (ej. 2 + 3 +)
5. Truncado de decimales a 9 caracteres (ej. 22 / 7)
6. ERROR en división por cero
7. Operación módulo (ej. 10 % 3 = 1)

---

## Storybook

Se implementaron **7 stories** distribuidas en 3 componentes:

- `CalcButton` → Default, Operator, Equals
- `Display` → Number, Decimal, Error
- `Calculator` → Default

---

## Linting

El proyecto usa ESLint con las siguientes reglas custom:

- **Sin punto y coma** (`semi: never`)
- **Máximo 120 caracteres por línea** (`max-len: 120`)

---

## puntaje esperado
135/150
dado que no se cumplió el siguiente requisito: (5 puntos) Por no utilizar node ni npm como su package manager (deben comittear su lockfile)
adicional a los puntos subjetivos se estima un 10/20 por diseño

## muestras de funcionamiento
<img width="1001" height="328" alt="image" src="https://github.com/user-attachments/assets/11894349-06a4-4086-8128-e6a224b741a7" />
<img width="981" height="644" alt="image" src="https://github.com/user-attachments/assets/15838adc-9ff0-4904-8f7a-84da7bc263d0" />

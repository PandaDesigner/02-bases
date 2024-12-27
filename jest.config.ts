/**
 * Para una explicación detallada sobre cada propiedad de configuración, visita:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Todos los módulos importados en tus pruebas deben ser simulados automáticamente
  // automock: false,

  // Detener la ejecución de pruebas después de `n` fallos
  // bail: 0,

  // El directorio donde Jest debe almacenar su información de dependencias en caché
  // cacheDirectory: "/private/var/folders/w4/wfxqrm7x6ks8vjqrqdt_zycm0000gn/T/jest_dx",

  // Borrar automáticamente las llamadas, instancias, contextos y resultados simulados antes de cada prueba
  // clearMocks: false,

  // Indica si se debe recopilar información de cobertura mientras se ejecutan las pruebas
  collectCoverage: true,

  // Una matriz de patrones glob que indica un conjunto de archivos para los cuales se debe recopilar información de cobertura
  // collectCoverageFrom: undefined,

  // El directorio donde Jest debe generar sus archivos de cobertura
  coverageDirectory: "coverage",

  // Una matriz de cadenas de patrones regexp utilizadas para omitir la recopilación de cobertura
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indica qué proveedor debe usarse para instrumentar el código para la cobertura
  coverageProvider: "v8",

  // Una lista de nombres de reporteros que Jest usa al escribir informes de cobertura
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // Un objeto que configura la aplicación de umbrales mínimos para los resultados de cobertura
  // coverageThreshold: undefined,

  // Una ruta a un extractor de dependencias personalizado
  // dependencyExtractor: undefined,

  // Hacer que las llamadas a APIs obsoletas arrojen mensajes de error útiles
  // errorOnDeprecated: false,

  // La configuración predeterminada para temporizadores falsos
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Forzar la recopilación de cobertura de archivos ignorados usando una matriz de patrones glob
  // forceCoverageMatch: [],

  // Una ruta a un módulo que exporta una función asíncrona que se activa una vez antes de todas las suites de prueba
  // globalSetup: undefined,

  // Una ruta a un módulo que exporta una función asíncrona que se activa una vez después de todas las suites de prueba
  // globalTeardown: undefined,

  // Un conjunto de variables globales que deben estar disponibles en todos los entornos de prueba
  // globals: {},

  // La cantidad máxima de trabajadores utilizados para ejecutar tus pruebas. Puede especificarse como % o un número. Por ejemplo, maxWorkers: 10% usará el 10% de la cantidad de tu CPU + 1 como el número máximo de trabajadores. maxWorkers: 2 usará un máximo de 2 trabajadores.
  // maxWorkers: "50%",

  // Una matriz de nombres de directorios que se buscarán recursivamente desde la ubicación del módulo requerido
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // Una matriz de extensiones de archivo que usan tus módulos
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // Un mapa de expresiones regulares a nombres de módulos o a matrices de nombres de módulos que permiten sustituir recursos con un solo módulo
  // moduleNameMapper: {},

  // Una matriz de cadenas de patrones regexp, coincidentes con todas las rutas de los módulos antes de considerarse 'visibles' para el cargador de módulos
  // modulePathIgnorePatterns: [],

  // Activa notificaciones para los resultados de las pruebas
  // notify: false,

  // Un enum que especifica el modo de notificación. Requiere { notify: true }
  // notifyMode: "failure-change",

  // Un preset que se usa como base para la configuración de Jest
  preset: 'ts-jest',

  // Ejecutar pruebas desde uno o más proyectos
  // projects: undefined,

  // Usa esta opción de configuración para agregar reporteros personalizados a Jest
  // reporters: undefined,

  // Restablecer automáticamente el estado de los simulacros antes de cada prueba
  // resetMocks: false,

  // Restablecer el registro de módulos antes de ejecutar cada prueba individual
  // resetModules: false,

  // Una ruta a un resolvedor personalizado
  // resolver: undefined,

  // Restaurar automáticamente el estado y la implementación de los simulacros antes de cada prueba
  // restoreMocks: false,

  // El directorio raíz que Jest debe escanear para pruebas y módulos dentro de él
  // rootDir: undefined,

  // Una lista de rutas a directorios que Jest debe usar para buscar archivos
  // roots: [
  //   "<rootDir>"
  // ],

  // Te permite usar un corredor personalizado en lugar del corredor de pruebas predeterminado de Jest
  // runner: "jest-runner",

  // Las rutas a los módulos que ejecutan algún código para configurar o configurar el entorno de prueba antes de cada prueba
  // setupFiles: [],

  // Una lista de rutas a módulos que ejecutan algún código para configurar o configurar el marco de pruebas antes de cada prueba
  // setupFilesAfterEnv: [],

  // El número de segundos después de los cuales una prueba se considera lenta y se informa como tal en los resultados.
  // slowTestThreshold: 5,

  // Una lista de rutas a módulos de serializadores de instantáneas que Jest debe usar para las pruebas de instantáneas
  // snapshotSerializers: [],

  // El entorno de prueba que se utilizará para las pruebas
  testEnvironment: "jest-environment-node",

  // Opciones que se pasarán al testEnvironment
  // testEnvironmentOptions: {},

  // Agrega un campo de ubicación a los resultados de las pruebas
  // testLocationInResults: false,

  // Los patrones glob que Jest usa para detectar archivos de prueba
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // Una matriz de cadenas de patrones regexp que se comparan con todas las rutas de prueba, las pruebas coincidentes se omiten
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // El patrón regexp o matriz de patrones que Jest usa para detectar archivos de prueba
  // testRegex: [],

  // Esta opción permite el uso de un procesador de resultados personalizado
  // testResultsProcessor: undefined,

  // Esta opción permite el uso de un corredor de pruebas personalizado
  // testRunner: "jest-circus/runner",

  // Un mapa de expresiones regulares a rutas a transformadores
  // transform: undefined,

  // Una matriz de cadenas de patrones regexp que se comparan con todas las rutas de archivos fuente, los archivos coincidentes omitirán la transformación
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // Una matriz de cadenas de patrones regexp que se comparan con todos los módulos antes de que el cargador de módulos devuelva automáticamente un simulacro para ellos
  // unmockedModulePathPatterns: undefined,

  // Indica si cada prueba individual debe informarse durante la ejecución
  // verbose: undefined,

  // Una matriz de patrones regexp que se comparan con todas las rutas de archivos fuente antes de volver a ejecutar las pruebas en modo de observación
  // watchPathIgnorePatterns: [],

  // Si se debe usar watchman para rastrear archivos
  // watchman: true,
};

export default config;

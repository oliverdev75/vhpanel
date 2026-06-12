# Panel de gestión de VPSs de VirtualHost

Esta es una aplicación destinada a la gestión a servidores privados virtuales de la empresa simulada VirtualHost.

IMPORTANTE! Esta aplicación es un producto de una empresa simulada, todo lo diga o explique esta aplicación, su documentación y sus relacionadas són meramente didácticas y no tienen ninguna base real ni legal. Por favor no useis ésta aplicación en entornos de producción, sean corporativos o no, ya que no está terminada.

# Instalación y puesta en marcha

Para instalar la aplicación es neceario tener las siguientes aplicaciones:

- PHP 8.2
- Composer
- Node.js 22

Seguid las instrucciones de instalación de cada programa según vuestro sistema operativo, proporcionadas por las páginas oficiales de cada uno.

Una vez instaladas las dependencias, clonamos el repositorio y entramos en su directorio:
```bash
git clone https://github.com/oliverdev75/vhpanel
cd vhpanel
```

## Backend

Creamos una archivo llamado _.env_ con el contenido de _.env.example_ y reemplazamos las variables comentadas con los valores correspondientes.

Instalamos las dependencias del proyecto.
```bash
composer install
```

Y posteriormente creamos la estructura de la base de datos y sus valores iniciales.
```bash
php artisan migrate --seed
```

Ahora creamos la llave para la aplicación.
```bash
php artisan key:generate
```

Finalmente iniciamos el proyecto.
```bash
php artisan serve
```

## Frontend

Editamos el archivo _.env.development_ o _.env.production_ según vayamos a testear el proyecto de manera local, o vayamos a desplegar la aplicación en un entorno de producción.

Accedemos al directorio del frontend.
```bash
cd resources/frontend
```

Instalamos las dependencias del proyecto.
```bash
npm i
```

Y finalmente iniciamos la aplicacion.
```bash
npm run dev
```
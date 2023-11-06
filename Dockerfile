# Usa una imagen base con Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json e package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto 3000 (o el puerto que uses en tu aplicación React)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["npm", "start"]



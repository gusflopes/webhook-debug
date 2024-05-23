# Usar a imagem base do Node.js
FROM node:14

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta 6000
EXPOSE 6000

# Comando para rodar a aplicação
CMD ["node", "index.js"]


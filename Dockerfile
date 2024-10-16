# Usar uma imagem oficial do Node.js
FROM node:20

# Criar um diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o Node.js vai usar (por exemplo, 3000)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]

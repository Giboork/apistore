FROM node:18

# Vytvořte složku pro aplikaci
WORKDIR /usr/src/app

# Nainstalujte závislosti
COPY package*.json ./
COPY .npmrc* ./
RUN npm install -g npm@latest
RUN npm install

# Nakopírujte zdrojový kód aplikace do kontejneru
COPY . .

# Sestavte aplikaci
RUN npm run build

# Nastavte port 8000 pro přístup zvenku
EXPOSE 8000

# Spusťte příkaz pro spuštění aplikace
CMD ["npm", "run", "start"]

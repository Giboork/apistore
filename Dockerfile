FROM node:18

COPY . .

EXPOSE 8000

CMD ["node", "src/index.js"]
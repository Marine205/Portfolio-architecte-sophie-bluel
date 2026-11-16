# Full image (not slim/alpine): bcrypt & sqlite3 may need python/make/g++ to compile against Node 26
FROM node:26
WORKDIR /app
ENV HOME=/tmp
EXPOSE 5678
CMD ["npx", "nodemon", "server.js"]

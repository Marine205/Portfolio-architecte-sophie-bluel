FROM node:26-alpine
RUN npm install -g live-server
WORKDIR /app
ENV HOME=/tmp
EXPOSE 8080
CMD ["live-server", "--host=0.0.0.0", "--port=8080", "--no-browser"]

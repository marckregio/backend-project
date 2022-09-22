FROM node:14

ARG VERSION=1.0.0
# Env
ENV TIME_ZONE=Asia/Hong_Kong
ENV NODE_ENV=production
# Set the timezone in docker
# Create Directory for the Container
WORKDIR /usr/src/service
# Only copy the package.json file to work directory
COPY package*.json ./
# adjust package.json

# Install all Packages
RUN npm install
# Copy all other source code to work directory
COPY ./ ./

#RUN npm run build
# Start
CMD [ "node", "index.js" ]
EXPOSE 4001

# Docker Build
# docker build -t talk/api-service:1.0.0 .
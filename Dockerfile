# use Node `alpine` image distribution
FROM node:16.16.0-alpine

# create the working directory, where the image sources will stay
RUN mkdir -p /app

# set the default working directory
WORKDIR /app

# copy everything into the working directory; except what is in the .dockerignore
COPY . .

# install node_modules
RUN npm install

# run TS build task
RUN npm run build

# open port
EXPOSE 9000

# container start command
CMD ["npm", "run", "start"]

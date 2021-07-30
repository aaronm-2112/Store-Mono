FROM node:current-alpine3.11

# set /app as the working directory
WORKDIR /app 
# copy server and client into app 
COPY . .

# move into the app/serer folder
WORKDIR /app/server
# install the dependencies for the sevrer, compile the server code to JS, and remove the typescript files in the src directory
RUN npm install  && npm run build && rm -r src 

# change into the client dorectory
WORKDIR /app/client 
# install the node modules for the react application, build the react application, and remove the src code folder
RUN npm rebuild node-sass && npm install && npm run build && rm -r src


WORKDIR /app/server
CMD ["npm", "start"]
# WORKDIR /app 
# COPY package.json .
# RUN npm install
# COPY . . 
# RUN npm run build && rm -r src
# CMD ["npm", "start"]


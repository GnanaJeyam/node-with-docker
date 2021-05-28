# Nodejs with Docker 

This repo contains the simple nodejs application with Dockerfile and docker-compose file

## To build the application using the docker-compose file


```
docker-compose up --build
```

The above command will spin up multiple containers and create a network between the containers to communicate.
It will spin up one node cotainer and one postgres Database container

## To stop all the running containers from docker-compose command

```
docker-compose down
```

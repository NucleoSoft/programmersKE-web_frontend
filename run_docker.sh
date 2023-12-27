#!/bin/bash

# Build image and add a descriptive tag

docker build -t programmerske-web_frontend .

# Run docker image

docker run -d -p 5173:5173 programmerske-web_frontend
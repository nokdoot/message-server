#!/bin/bash

# Function to gracefully stop the server
stop_server() {
    echo "Stopping server..."
    docker stop message-server || true
    docker rm message-server || true
    exit 0
}

# Trap Ctrl+C and call the stop_server function
trap stop_server SIGINT

# Stop the existing container if it's running
docker stop message-server || true

# Remove the existing container if it exists (optional, depending on your needs)
docker rm message-server || true

# Run the new container
docker run -it --env-file .env --name message-server --restart always -p 5000:3000 -d message-server:latest

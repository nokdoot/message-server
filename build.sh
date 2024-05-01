#!/usr/bin/env sh

# --progress=plain
docker build \
    -t message-server:latest \
    --progress=plain \
    .
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push statnlp/web-ladrawex
docker push statnlp/web-ladrawex:${APP_VERSION}

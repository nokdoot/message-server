rm -rf dist && mkdir dist
cp build.sh run.sh dist
cp -r src/* dist/
rsync -av dist/ rasp-priv:message-server 
ssh rasp-priv 'cd message-server; ./build.sh; ./run.sh;'
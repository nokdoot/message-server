rm -rf dist && mkdir dist
cp -r src dist/
cp package.json dockerfile dist
cp build.sh run.sh dist
rsync -av dist/ rasp-priv:message-server 
ssh rasp-priv 'cd message-server; ./build.sh; ./run.sh;'
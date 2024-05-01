rm -rf dist && mkdir dist
cp -r *.py requirements.txt dockerfile dist/
cp dockerfile dist
cp build.sh run.sh dist
rsync -av dist/ rasp-priv:message-server 
ssh rasp-priv 'cd message-server; ./build.sh && ./run.sh;'
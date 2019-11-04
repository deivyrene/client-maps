#/bin/bash
#upload files
ng build --prod --aot 
aws s3 cp ./dist/client-maps s3://client-maps --recursive --profile deivy
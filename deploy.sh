#/bin/bash
#upload files
ng build --prod --aot 
aws s3 cp ./dist s3://client-maps --recursive --acl public-read --profile deivy
# Prepare repo
```bash
#prepare svelte template
npm create svelte@latest svelte-hello
cd svelte-hello

npm install

#run test
npm run dev -- --open

#prepare axios
npm install axios url

#get open-api json specification
mkdir ./Api
curl localhost:4000/docs/openapi.json > ./Api/openapi.json

#add open-api generator
npm install @openapitools/openapi-generator-cli -g

#add script to generate open-api
npx add-project-script -n "openapi" -v "openapi-generator-cli generate -i ./Api/openapi.json -g typescript-axios -o ./Api/generated"

#run shortcut to generate axios api from open-api.json
npm run openapi
```

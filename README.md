# Prepare repo
```bash
#prepare svelte template
npm create svelte@latest svelte-hello

mv svelte-hello/README.md ./README_svelte.md
mv svelte-hello/* ./
mv svelte-hello/.* ./
rm svelte-hello

#install libs
npm install

#run test
npm run dev -- --open

#get open-api json specification
mkdir -p ./api/books
curl localhost:4000/docs/openapi.json > ./api/books/openapi.json

#add open-api generator
npm install @openapitools/openapi-generator-cli -g

#add script to generate open-api
npx add-project-script -n "openapi" -v "openapi-generator-cli generate -i ./api/books/openapi.json -g typescript-axios -o ./api/books/generated"

#run shortcut to generate axios api from open-api.json
npm run openapi

#prepare axios
npm install axios url
```

# exposing with axios
add ./api/index.ts
```ts
import axios from 'axios';
import { BookApi } from './books/generated';

export const axiosInstance = axios.create();

// const commonParams: any[] = [undefined, undefined, axiosInstance];

export default {
  Book: new BookApi(undefined, "http://localhost:4000", axiosInstance),
};
```

# avoiding lsp ts implicit any
add option to ./tsconfig.json
```json
{
    "extends": "./.svelte-kit/tsconfig.json",
    "compilerOptions": {
        "noImplicitAny": false,
    },
}
```

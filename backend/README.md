## To start setting up the project

Step 3: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=YOUR_DB_NAME
ACCESS_TOKEN_SECRET=GENERATE_FROM_GENERATE_KEYS_FILE_IN_HELPER
REFRESH_TOKEN_SECRET=GENERATE_FROM_GENERATE_KEYS_FILE_IN_HELPER
```

Step 4: To generate 256-bit keys for JWT

node ./helpers/generate_keys.js

Step 9: Start the API by

```bash
npm start
```

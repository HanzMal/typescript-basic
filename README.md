How to run
- npm install --save-dev concurrently nodemon

- open first terminal : tsc --w
- open package.json : change this "dev": "concurrently \"tsc -w\" \"nodemon dist/tips/index.js\"" . change after nodemon with file you want to run in dist. Save
- npm run dev
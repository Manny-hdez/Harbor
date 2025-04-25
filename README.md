## About
Built using React native + Expo + Supabase (postGresql database)

## To run the app
CD into the /frontend directory (`cd ./harbor`)

If it's your first time running this application run `npm install`

If you've installed dependencies with npm first run
`npx expo prebuild --clean`

Then run
`npx expo run`
or for ios
`npx expo run:ios`
or for android
`npx expo run:android`

Sometimes you'll run into build errors on the emulator. To fix try completely rebuilding:
`rm -rf node_modules package-lock.json`
Delete the `./Android` and `./iOS` directories

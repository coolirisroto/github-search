# github-search
App to search repositories 
This proyect was developed by Laravel  And React Native

## Quick Overview

### Requiriments 
PHP 7.1
MySQL
Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.
npm or Yarn


#### Laravel Setup

##Windows users:
- Download wamp: http://www.wampserver.com/en/
- Download and extract cmder mini: https://github.com/cmderdev/cmder/releases/download/v1.1.4.1/cmder_mini.zip
- Update windows environment variable path to point to your php install folder (inside wamp installation dir) (here is how you can do this http://stackoverflow.com/questions/17727436/how-to-properly-set-php-environment-variable-to-run-commands-in-git-bash)
 
cmder will be refered as console

##Mac Os, Ubuntu and windows users continue here:
- Create a database locally named `homestead` utf8_general_ci 
- Download composer https://getcomposer.org/download/
- Pull Laravel/php project from git provider.
- Rename `.env.example` file to `.env`inside the api project root and fill the database information.
  For example
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=example
  DB_USERNAME=username
  DB_PASSWORD=password
  (windows wont let you do it, so you have to open your console cd your project root directory and run `mv .env.example .env` )
- Open the console and cd to api directory: 
- Run `composer install` or ```php composer.phar install```
- Run `php artisan key:generate` 
- Run `php artisan migrate`
- Run `php artisan db:seed` to run seeders, if any.
- Run `php artisan serve --host 192.168.1.118 --port 8000`
- Note: change by your local ip address when run the serve command.



#####You can now access your project at 192.168.1.118:8000 :)

## If for some reason your project stop working do these:
- `composer install`
- `php artisan migrate`


#### React Native /Expo Setup


# Install Expo Client
```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd ownerslinkapp/
$ npm start
```

The `npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.



### Configure environments frop App

Into  ownerslinkapp folder
Edit the file  settings/dev.environment
and set the apiLogsUrl Endpoint from Laravel, for example: 'http://192.168.1.118:8000/api/'

### Running the App


If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.


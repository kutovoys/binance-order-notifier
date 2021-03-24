# Binance order notifier

This small app notify you in Telegram when order placed, canceled or filled.
Unfortunately official Binance App doesn't has this function.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing Prerequisites

The following dependencies are required to run an app:

1. NodeJS
2. Npm

Install NodeJS and npm

```
brew install node
```

## Configuration

You need rename `./config/default.json.sample` to `default.json` and add yours ApiKey, SecretKey and chatID.
You can get your chatID by sending /getid message to bot [@myidbot](https://t.me/myidbot) in Telegram.
You can add as many users as you want.

## Deployment

Clone the code from github

```
git clone https://github.com/kutovoys/binance-order-notifier.git
```

Build the project from the root directory

```
npm install
```

Start the application

```
npm start
```

const config = require('config')
const Slimbot = require('slimbot')
const slimbot = new Slimbot(config.get('token'))
const api = require('binance')
const binanceWS = new api.BinanceWS(true)

credentialsArryy = config.get('users')

let optionalParams = {
  parse_mode: 'Markdown',
}

for (let index in credentialsArryy) {
  binanceRest = new api.BinanceRest({
    key: credentialsArryy[index].apikey,
    secret: credentialsArryy[index].secretkey,
    timeout: 15000,
    recvWindow: 10000,
    disableBeautification: false,
    baseUrl: 'https://api.binance.com/',
  })
  binanceWS
    .onUserData(
      binanceRest,
      (data) => {
        sendNotification(data, credentialsArryy[index].chatid)
      },
      60000
    )
    .then((ws) => {
      console.log('User connected')
    })
}

function sendNotification(data, chatId) {
  if (data.eventType === 'executionReport') {
    if (data.executionType === 'NEW') {
      status = 'CREATED'
    } else if (data.executionType === 'CANCELED') {
      status = 'CANCELED'
    } else if (data.executionType === 'TRADE') {
      status = 'FILLED'
    }
    slimbot.sendMessage(
      chatId,
      `💰 💰 💰\n${data.side} order *${status}:*\n*Pair:* ${
        data.symbol
      }\n*Price:* ${data.price}\n*Quantity:* ${data.quantity}\n*Summ:* ${
        data.price * data.quantity
      } `,
      optionalParams
    )
  }
}

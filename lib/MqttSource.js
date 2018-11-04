const mqtt = require('mqtt')
const Readable = require('readable-stream').Readable

class MqttSource extends Readable {
  constructor (host, topic) {
    super()

    this.client = mqtt.connect(host)

    this.client.on('connect', () => {
      this.client.subscribe(topic, err => {
        if (err) {
          this.emit('error', err)
        }
      })
    })

    this.client.on('message', (topic, message) => {
      this.push(message)
    })
  }

  _read () {}

  _destroy (err, callback) {
    this.client.end()

    callback()
  }
}

module.exports = MqttSource

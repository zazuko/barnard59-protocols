const MqttSource = require('./lib/MqttSource')

function subscribe (host, topic) {
  return new MqttSource(host, topic)
}

module.exports = {
  subscribe
}

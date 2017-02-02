'use strict'

let w = { support: false }

try {
  w = require('webrtcsupport')
} catch (e) {}

require('./websockets-only')

if (w.support) {
  require('./webrtc-star-only')
}

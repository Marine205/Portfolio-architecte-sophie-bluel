// Drop-in for the unmaintained original, which reads SlowBuffer (removed in Node 25+).
const { timingSafeEqual } = require('crypto');
module.exports = (a, b) => Buffer.isBuffer(a) && Buffer.isBuffer(b) && a.length === b.length && timingSafeEqual(a, b);

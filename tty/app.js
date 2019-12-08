var tty = require('./lib/tty.js');
var app = tty.createServer({
  users: {
    root: 'root'
  },
  port: 8000,
  shell: 'bash',
  static: './static',
  limitGlobal: 10000,
  limitPerUser: 1000,
  localOnly: false,
  cwd: '/',
  syncSession: false,
  sessionTimeout: 600000,
  log: true,
  io: { log: false },
  debug: false,
  term: {
    termName: 'xterm',
    geometry: [80, 24],
    scrollback: 1000,
    visualBell: false,
    popOnBell: false,
    cursorBlink: false,
    screenKeys: false
  }
});
app.listen();
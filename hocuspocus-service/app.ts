import { Server } from '@hocuspocus/server'
import { SQLite } from '@hocuspocus/extension-sqlite'

const server = Server.configure({
  port: 80,

  async onConnect() {
    console.log('🔮')
  },

  extensions: [
    new SQLite({
      database: 'db.sqlite',
    }),
  ],
})

server.listen()
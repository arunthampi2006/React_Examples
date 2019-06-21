const express = require('express')
const next = require('next')
const path = require('path')

const port = parseInt(process.env.Port, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  // server.use('/static/*', express.static(path.join(__dirname, 'static')));
  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })
  server.get('/errorPage', (req, res) => {
    return app.render(req, res, '/error_page', req.query)
  })
  server.get('/formModule', (req, res) => {
    return app.render(req, res, '/form-module', req.query)
  })
  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })
  server.get('/', (req, res) => {
    return handle(req, res)
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
console.log(dev)
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.get('/p/:id',(req,res)=>{
        const actualPage = '/page'
        const queryParams = {id:req.params.id}
        console.log(queryParams);
        app.render(req,res,actualPage,queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) {
            throw err
        }

        console.log('> Ready on http://localhost:3000')
    })
}).catch((e) => {
    console.log(e)
    process.exit(1)
})
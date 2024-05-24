const jsonServer=require('json-server')
const SMServer=jsonServer.create()
const middleWare=jsonServer.defaults()
const route=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT



SMServer.use(middleWare)
SMServer.use(route)
SMServer.listen(PORT,()=>{
    console.log(`Student management server started at port ${PORT} and waiting for client request`);
})
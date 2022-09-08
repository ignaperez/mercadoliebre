const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.send('Hola')
});
app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'src/views/home.html'))
})

app.listen(3001,()=>console.log('Servidor on line en puerto 3001'))
const express = require('express')
const app = express()

app.get('/api/cart', (req,res)=>{
	res.json({message: 'hi from cart'})
})

app.listen(3001, ()=>{
	console.log('api/cart :3001')
})

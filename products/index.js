const express = require('express')
const app = express()

app.get('/api/products', (req,res)=>{
	res.json({message: 'hi from products'})
})

app.listen(3000, ()=>{
	console.log('api/products :3000')
})

const express = require('express')

require('dotenv').config()

const app = express()

app.use(express.json({limit:'50mb'}))

// x-www-form-urlencoded 를 사용하면 필요 
app.use(express.urlencoded({limit: '50mb',extended:false}));

// route 정의
app.use('/api/gallery', require('./routes/galleryRoutes'))

const PORT = process.env.PORT || 6000;

app.listen(PORT , () =>console.log(`Server is running on port ${PORT}`));
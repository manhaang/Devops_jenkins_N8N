const express = require('express')
const app = express()

// ทำ url ให้สามารถเข้าถึงได้
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// run the server
app.listen(3300, () => {
  console.log('Server is running on http://localhost:3300')
})
   const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`wassup nigga`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("evb online" + Date.now()) });
}
 
module.exports = keepAlive;

const http = require("http")
const WebSocketServer = require("websocket").server
let connection = null;

const httpServer = http.createServer((req, res) => {
    console.log("Request received");
})


const websocket = new WebSocketServer({
    "httpServer": httpServer
})

websocket.on("request", request => {
    connection = request.accept(null, request.origin)  // Accept connection from any origin
    connection.on("open", () => console.log("Opened!!!"))
    connection.on("close", () => console.log("Closed!!!"))
    connection.on("message", message => { console.log(`Received message ${message.utf8Data}`)})
})

httpServer.listen(8080, () => {
    console.log("Server is running on port 3000");
})
const websocket = io();

websocket.emit('hello', "testEJS");

websocket.on("world", function (test) {
    console.log(test)
})

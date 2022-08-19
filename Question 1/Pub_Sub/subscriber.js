var mqtt = require('mqtt')
const client = mqtt.connect("mqtt://localhost:1883")

client.on("connect", function(res, err) {
    if(err) {
        console.log(err)
    }
    else {
        console.log("Connected to broker!")
        client.subscribe("test", function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Subscribed to the topic!")
            }
        })
    }
})

client.on("message", function(topic, data) {
    var thing = mqtt.connect("mqtt://demo.thingsboard.io/", {
        username : "q1"
    })
    thing.on('connect', function() {
        console.log('connected')
        thing.publish('v1/devices/pub_sub/telemetry', data, function(err) {
            if(err) {
                console.log(err)
            }
        })
    })
})

({
    recieveTweet : function(component, event, helper) {
        // Logs a message to the console
        // console.log("Received a message: " + JSON.stringify(event));
        //component.set("v.message", event.getParam("message"));

        var newTweet = {
            "name" : event.getParam("name"),
            "handle" : event.getParam("handle"),
            "message" : event.getParam("message"),
            "date" : event.getParam("date"),
            "imageUrl" : event.getParam("imageUrl")
        };

        var history = component.get("v.history");
        history.push(newTweet);
        history.reverse();
        component.set("v.history", history);

        //console.log("Received a message: " + JSON.stringify(history));
    }
})

({
    sendTweet : function(component, event, helper) {
        //console.log("Sending tweet");

        var tweetEvent = $A.get("e.twitter:tweetMessage");
        //console.log(component.find("tweet").get("v.value"));
        if (component.find("tweet").get("v.value") == undefined) {
            alert("Cannot send an empty Tweet.");
        }
        if (component.find("tweet").get("v.value") == "") {
            alert("Cannot send an empty Tweet.");
        }
        var monthNames = [
          "Jan", "Feb", "Mar",
          "Apr", "May", "Jun", "Jul",
          "Aug", "Sept", "Oct",
          "Nov", "Dec"
        ];

        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var actualDate = monthNames[monthIndex] + ' ' + day + ', ' + year;

        tweetEvent.setParams({
            "message": component.find("tweet").get("v.value"),
            "date" : actualDate,
            "name" : "Taylor McClure",
            "handle" : "@TaylorMcClure04",
            "imageUrl" : "/img/profile.jpg"
        });
        if(component.find("tweet").get("v.value") != undefined) {
            if(component.find("tweet").get("v.value") != "") {
                tweetEvent.fire();
            }
        }
        component.find("tweet").set("v.value", "");
    }
})

var express =  require("express");
var adminRouter = express();



adminRouter.get("/:ANo", (request, response)=>
{
    response.send("You searched for Admin No " + request.params.ANo);
});

module.exports = adminRouter;

pengdatapromise = d3.json("classData.json")

pengdatapromise.then(function (data)
{
    console.log ("good", (data))
    
},
function (err)
{
    console.log("error", err)
})


var makebuttons = function(day)
{}





var xs = d3.range(10)

var points = xs.map(function (x)
{
    return {
        x:x.n,
        y:y
    }
    
})

//var screensize = {width:300px, height:600px}

var getquizgrade = function (quiz)
{
    
}
                  
                  
        
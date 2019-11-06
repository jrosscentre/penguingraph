pengdatapromise = d3.json("penguins/penguins/classData.json");

pengdatapromise.then(

function(data)
    {
        console.log("good", (data)),
        console.log(getquizgrades(data)),
        console.log(generatepoints(data))

    },
function (err)
    {
        console.log("broken", (err))
    }
    )



var get1quiz = function (peng)
{
    console.log(peng)
    return peng.quizes[0].grade;
    
}


var getquizgrades = function (data)
{
    console.log("good")
    return data.map(get1quiz)
}


//var makebuttons = function(day)
//{}



var generatepoints = function (quizgds)
{
    
    var arraycoord = quizgds.map(function(quizgd,index)
    {
        
        var point= {}
        point.y = quizgd.quizes[0].grade
        point.x = index
        return point
        
    })
    
    return arraycoord
}

var setup = function (points)
{
    d3.select ("svg")
    .attr()
    
    var xscale = d3.scalelinear()
    xscale.domain ([
        d3.min (points, function (p) {return p.x}),
        d3.max (points, function (p) {return p.x})
    xscale.range ([])
    
    var yscale = d3.scalelinear()
    yscale.domain([
        d3.min (points, function (p) {return p.y}),
        d3.max (points, function (p) {return p.y})
    ]
        d3.min(generatepoints(points.y))

}







//var screensize = {width:300px, height:600px}


                  
                  
        
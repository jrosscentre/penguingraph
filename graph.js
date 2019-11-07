pengdatapromise = d3.json("penguins/penguins/classData.json");

pengdatapromise.then(

function(data)
    {
        console.log("good", (data)),
        console.log(getquizgrades(data)),
        console.log(generatepoints(data))
        console.log(setup(data)),
            setup(data),
        console.log(getpengday(data))

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
    console.log(points)
    d3.select ("body")
    .append("svg")
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(p)
    {
        return p.xscale
    })
    .attr("cy"), function (p)
    {
        return p.yscale
    }
    
    var xscale = d3.scaleLinear()
    xscale.domain ([
        d3.min (points, function (p) {return p.x}),
        d3.max (points, function (p) {return p.x}),
    xscale.range([10])
        ])
   // xscale.range ([])
    
    var yscale = d3.scaleLinear()
    yscale.domain([
        d3.min (points, function (p) {return p.y}),
        d3.max (points, function (p) {return p.y}),
    yscale.range([10])
    ])

}


var makebuttons = function (day)
{
    
    d3.select("buttons")
    .selectAll("button")
    .data(day)
    
}
var makegraphperday = function (day)
{
    
}

var getpengday = function (data,index)
{
    var obj = {}
    obj.quizes = data.quizes
    obj.day = 
    return 
}






//var screensize = {width:300px, height:600px}


                  
                  
        
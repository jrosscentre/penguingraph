pengdatapromise = d3.json("penguins/penguins/classData.json");

pengdatapromise.then(

function(pengdata)
    {
         console.log(pengdata)
        //var day = makeday(pengdata)
         var points1 = generate1points(pengdata)
            setup(points1);
        var points2 = generate2points(pengdata)
            setup(points2);
        day1(points2)
        console.log("good", (pengdata))
            makebuttons(pengdata)
       // console.log("goodday",makeday(pengdata))
       // console.log("4daygood", getquiz4day( pengdata, day))
       //     getquiz4day(pengdata, day)
        console.log(getquizgrades(pengdata))
        //var quizindex = 
      
        //console.log(getpengday(data))
    },
    
function (err)
    {
        console.log("broken", (err))
    })

var makeday = function(data)
{
    var obj = {}
    obj.day = data.quizes.day
    return obj
}
    

var getquizgrades = function (data)
{
    console.log("goodgqg",data)
    
    return data.map(get1quiz)
}


var getquiz4day = function (data,day)
{
    var obj = {}
    obj.quizes = pengdata.quizes[day].grade
    return obj
}


var get1quiz = function (data)
{
    var obj = {}
    obj.quizes = pengdata.quizes[0].grade
    return obj
}


var get2quiz = function (data)
{
    var obj = {}
    obj.quizes = pengdata.quizes[1].grade
    return obj
}



var generate1points = function (quizgds)
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


var generate2points = function (quizgds)
{
    
    var arraycoord = quizgds.map(function(quizgd,index)
    {
        
        var point= {}
        point.y = quizgd.quizes[1].grade
        point.x = index
        return point
        
    })
    return arraycoord
}




var setup = function (points)
{
    var xscale = d3.scaleLinear()
    xscale.domain ([
        d3.min (points, function (p) {return p.x}),
        d3.max (points, function (p) {return p.x})
        ])
      xscale.range([0,700])
    
    var yscale = d3.scaleLinear()
    yscale.domain([
       d3.min (points, function (p) {return p.y}),
       d3.max (points, function (p) {return p.y})
   ])
       yscale.range([600,0])
    
   var screensize = {width:700, height:600}
    
    console.log(points)
    d3.select ("body")
    .append("svg")
    .attr("width", screensize.width)
    .attr("height", screensize.height)
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cx", function(p)
    {
        return xscale (p.x)
    })
    .attr("cy", function (p)
    {
        return yscale (p.y)
    })
}



var makebuttons = function (day)
{
    
    d3.select("#buttons")
    .selectAll("button")
    .data(day)
    .enter()
    .append("button")
    .text("day")
    .text("day")
}


var day1 = function (button)
{
    d3.select("#buttons")
    .select("#day1")
    .append("button")
    .text("Day 1")
    .on("click", function (d)
    {
        return d
    })
}



/*var getpengday = function (data,index)
{
    var obj = {}
    obj.quizes = data.quizes
    obj.day = 
    return 
}*/









                  
                  
        
// create a graph class
class Graph {
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}
addVertex(v)
{
    console.log(v);
	this.AdjList.set(v, []);
}
addEdge(v, w)
{
    if(this.AdjList.has(v)){

        this.AdjList.get(v).push(w)
    }
    else{
        this.AdjList.set(v,new Array())
        this.AdjList.get(v).push(w)

    }
    if(this.AdjList.has(w)){
        this.AdjList.get(w).push(v)
    }
    else{
        this.AdjList.set(w,new Array())
        this.AdjList.get(w).push(v)

    }
    
}
printGraph()
{
	var get_keys = this.AdjList.keys();
	for (var i of get_keys)
{
		var get_values = this.AdjList.get(i);
        //console.log(get_values)
		var conc = "";
		for (var j of get_values)
			conc += j + " ";
		console.log(i + " -> " + conc);
	}
}

}
var obj = new Graph(1);
document.getElementById("CreateVertex").addEventListener("click", function(e)
 {
    var input = document.getElementById("addVertex").value;
    input=input.split(" ")
    for(let i=0;i<input.length;i++)
    {
        obj.addVertex(parseInt(input[i]));
    }
  
}
);
document.getElementById("addEdgeBtn").addEventListener("click", function(e)
{
   
    var input = document.getElementById("CreateEdge").value;
    input=input.split(" ")
     for(let i=0;i<input.length;i+=2)
    {
        
        obj.addEdge(parseInt(input[i]),parseInt(input[i+1]));
     }
        
    }
    )
    document.getElementById("PrintGraphBtn").addEventListener("click", function(e)
    {
        obj.printGraph();
    }
    )








































    //   obj.addEdge(1,2);
    // obj.addEdge(1,4);
    // obj.addEdge(1,5);
    // obj.addEdge(2,3);
    // obj.addEdge(4,5);
    // obj.addEdge(5,6);
    // obj.addEdge(5,3);
    // obj.addEdge(3,6);
    // obj.printGraph();
// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
// 	g.addVertex(vertices[i]);
// }

// adding edges


// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C


// robotProject.js
const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"];


function buildGraph(edges){
    let graph =Object.create(null)
    function addEdge(from,to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }
    let edgeMap=edges.map(r=>r.split("-"))
    console.log(edgeMap)
    for(let [from, to] of edgeMap){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);
console.log(roadGraph)

class VillageState{
    constructor(place,parcels){
        this.place=place;
        this.parcels=parcels;
    }
    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }
    }
}
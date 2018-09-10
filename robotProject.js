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
    console.log(edgeMap[0][0]=="Alice's House")
    for(let [from, to] of edgeMap){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph)

class VillageState{
    // a village state has a place, parcels and a move function
    constructor(place, parcels){
        this.place=place;
        this.parcels=parcels;
    }
    move(destination){
        //is the destination in the roadGraph destination array?
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            let parcels=this.parcels.map(p=>{
                if (p.place!= this.place) return p;
                return {palace:destination, address: p.address};
            }).filter(p=> p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}
let first = new VillageState(
    "Post Office", [{
        place: "Post Office",
        address: "Alice's House"
    }]
)
let next = first.move("Alice's House")

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);

const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"];
const roadGraph = buildGraph(roads);
function buildGraph(edges) {
    //start with an empty object
    let graph = Object.create(null)
    //this function takes two parameters
    function addEdge(from, to) {
        //if the graph does not have a starting point
        if (graph[from] == null) {
            //make it now and go ahead and set the first destination 
            graph[from] = [to];
        } else {
            //we will push the destination into the value array
            graph[from].push(to);
        }
    }
    //go through our roads and create a list of 
    let edgeMap = edges.map(r => r.split("-"))
    // console.log("edgeMap Road: [array][position in array]", edgeMap[0][2])
    // console.log(edgeMap)
    //from = edgeMap[i][0] and to=edgeMap[i][1]
    for (let [from, to] of edgeMap) {
        // console.log("[from,to]" + [from, to])
        addEdge(from, to);
        //also, we can move in the other direction, so record that path into our object
        addEdge(to, from);
    }
    return graph;
}
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    return p;
                } else {
                    return { place: destination, address: p.address };
                }
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}
function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`)
            break
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice]
}
function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) }
}
//start at Post office and have 5 random parcels with {place, delivery address}å
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph))
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address })
    }
    let result = new VillageState("Post Office", parcels);
    console.log(result);
    return result;
}
//routeRobot with defined Route
const mailRoute = ["Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"];
function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}
//goalOrientedRobot uses the findRoute
function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place)
        } else {
            route = findRoute(roadGraph, place, parcel.address)
        }
    }
    return { direction: route[0], memory: route.slice(1) }
}
// VillageState {
//     place: 'Post Office',
//     parcels:
//      [ { place: 'Daria\'s House', address: 'Farm' },
//        { place: 'Town Hall', address: 'Post Office' },
//        { place: 'Cabin', address: 'Bob\'s House' },
//        { place: 'Daria\'s House', address: 'Bob\'s House' },
//        { place: 'Cabin', address: 'Shop' } ] }
//A robot to evaluate all parcels, and find shortest route to deliver them all
function yourRobot({ place, parcels }, route) {
    if (route.length == 0) {
        //find a route for each parcel
        let routes = parcels.map(parcel=>{
            if(parcel.place !=place){
                return {route: findRoute(roadGraph, place, parcel.place), pickUp:true}
            }else{
                return {route: findRoute(roadGraph, place, parcel.address), pickUp:false}
            }
        });
        //evaluate the best route, 
        //if you're picking up a package on the route, it's preferable
        function score({route, pickUp}){
            return (pickUp ? 0.5 : 0)-route.length;
        }
        route = routes.reduce((a,b)=>score(a) >score(b) ? a:b).route;
    }
    return { direction: route[0], memory: route.slice(1) }
}





//here is the search tool to find a shortest route betwen from,to
//roadGraph {from:[to,to,to]} are the available routes
//from is place of the robot,
//to is the parcel place or delivery address
function findRoute(graph, from, to) {
    //work is an array of objects with at, route attributes
    let work = [{
        at: from, //place
        route: [] //routeArray
    }];
    for (let i = 0; i < work.length; i++) {
        // go through the work array
        let { at, route } = work[i];
        //go through each place held in graph[at]
        for (let place of graph[at]) {
            //if graph[at]==the "to" param
            //put graph[at] into the routeArray,
            if (place == to) return route.concat(place);
            /*some() executes the callback function once
             for each element present in the array until 
             it finds one where callback returns a truthy 
             value (a value that becomes true when converted to a Boolean). */
            //if we haven't found a path, put it in work
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}



function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot2 needed ${total2 / 100}`)
}
function countSteps(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) return steps;
        let action = robot(state, memory)
        state = state.move(action.direction)
        memory = action.memory;
    }
}

compareRobots(yourRobot, [], goalOrientedRobot, []);

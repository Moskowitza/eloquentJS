function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1+=countSteps(state, robot1, memory1);
        total2+=countSteps(state, robot2, memory2);
    }
console.log(`Robot 1 needs ${total1/100} steps per task` )
console.log(`Robot2 needed${totat2/100}`)
}
compareRobots(routeRobot, [[]])



// robotProject.js
const roads = ["Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"];

//take the roads and convert them into an object
//each key [From] has an array of direct destinations as [to]
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
/*roadGraph is a complete listing of any 
place you can get to directly from 
a starting location*/
const roadGraph = buildGraph(roads);
// console.log(roadGraph)

class VillageState {
    /*a villageState has a place, parcels
    When we create a new instance of villageState we'll pass it
    a place and an array of parcels 
    a parcel is identified by it's place and delivery address */
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    //villageStates can all use this move() method to update their state
    move(destination) {
        //is the destination in the roadGraph destination array?
        if (!roadGraph[this.place].includes(destination)) {
            //if NO, then we can't get there, so don't update the place
            return this;
        } else {
            //we CAN get to the delivery address from the place the parcel is currently
            let parcels = this.parcels.map(p => {
                //if the parcels location (parcels.place) 
                //is not it's starting location (this.place)
                //don't do anything: where we're going is not where we are
                if (p.place != this.place) {
                    return p;
                } else {
                    //if the destination we pass to move()
                    //says we're here, return a new this.parcels
                    //which sets the place to the destination
                    return { place: destination, address: p.address };
                }
            }).filter(p => p.place != p.address);
            // if p.place != p.address is True, the parcel stays in our array
            // We are not at the delivery address 
            return new VillageState(destination, parcels);
            //finally, we've updated the state of our village
            //next time the move() method is called we can check to see
            //if there are any deliveries
        }
    }
}
// let first = new VillageState(
//     "Post Office", [{
//         place: "Post Office",
//         address: "Alice's House"
//     }]
// )
// let next = first.move("Alice's House")

// console.log(first)
// console.log(next.place);
// // // → Alice's House
// console.log(next.parcels);
// // // → []
// console.log(first.place);

//our robot will remember where it has been and where it wants to go
//villageState has the robot's location, and parcels.
//A Robot has it's state and memory
//A parcel is defined by where it is, and the delivery address
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
let speedTest = VillageState.random()
runRobot(speedTest, randomRobot);

const mailRoute = ["Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"];

function routeRobot(state, memory) {
    console.log(`route robot memory`)
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

runRobot(speedTest, routeRobot, []);
//here is the search tool to find a shortest route betwen A,B
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
            //if graph[at]==the to param
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

/* 
 * example of Dijkstra algorithm
 * a method how to find shorte way from 'start' to the 'end' on current graph structure
 */

//hashes - graph, value, parents

let graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        end: 1
    },
    b: {
        a: 3,
        end: 5
    },
    end: {}
};

let costs = {
    a: 6, 
    b: 2
}

let parents = {
    a: 'start',
    b: 'start'
}

let procededNodes = {};

let node = findLowestCostNode(costs)
console.log(node);

while(node){

    // node = findLowestCostNode(costs)
}

function findLowestCostNode(costs) {
    let lowestNode;
    let nodeName;
    for(name in costs){
        if(typeof(lowestNode) == 'undefined'){
            lowestNode = costs[name];
        } else {
            if(costs[name] < lowestNode) nodeName = name;
        }
    }
    //add to proceded ' check word
    //return false when there left no unhandled items
    return nodeName;
}


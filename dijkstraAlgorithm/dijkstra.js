/* 
 * example of Dijkstra algorithm
 * a method how to find shortest way from 'start' to the 'end' on current graph structure
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

let processedNodes = [];

let node = findLowestCostNode(costs)
console.log(node);

while(node){
    let nodeCost = costs[node],
        neighbors = graph[node];

    for(neighbor in neighbors){
        let newNodeCost = nodeCost + costs[neighbor];
        if(costs[neighbor] > newNodeCost){
            costs[neighbor] = newNodeCost;
            parents[neighbor] = node;
        }
    }
    processedNodes.push(node)
    node = findLowestCostNode(costs)
}

console.log(costs, parents);

function findLowestCostNode(costs) {
    let lowestNode;
    let nodeName;
    for(name in costs) { 
        if(typeof(lowestNode) == 'undefined'){
            lowestNode = costs[name];
        } else {
            if(costs[name] < lowestNode) nodeName = name;
        }
    }

    return processedNodes.indexOf(nodeName) === -1 ? nodeName : false;
}


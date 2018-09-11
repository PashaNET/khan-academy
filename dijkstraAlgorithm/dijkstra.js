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

let node = findLowestCostNode(costs)

function findLowestCostNode(costs) {
    let lowestValue = 0;
    
}

let procededNodes = [];
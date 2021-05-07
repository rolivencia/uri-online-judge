const Queue = require("../queue/queue");
const Stack = require("../stack/stack");

class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }

  addAdjacent(node) {
    this.adjacents = this.adjacents.concat(node);
  }

  removeAdjacent(node) {
    const index = this.addAdjacent.indexOf(node);
    try {
      if (index !== -1) {
        this.adjacents = this.adjacents.slice(index, 1);
        return node;
      } else {
        throw Error(
          "Error finding the given node for removal. Node doesn't exist in the current graph."
        ); //FIXME: https://stackoverflow.com/questions/47015693/how-to-fix-throw-of-exception-caught-locally/47016061
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  static *bfs(first) {
    const visited = new Map();
    const visitList = new Queue(); // TODO: generalize with "search" method, to avoid duplicated code with *bfs

    visitList.add(first);
    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((adjacent) => visitList.add(adjacent));
      }
    }
  }

  static *dfs(first) {
    // TODO: generalize with "search" method, to avoid duplicated code with *bfs
    const visited = new Map();
    const visitList = new Stack(); //TODO: implement the queue data structure

    visitList.add(first);
    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((adjacent) => visitList.add(adjacent));
      }
    }
  }
}

Graph.DIRECTED = Symbol("directed graph");
Graph.UNDIRECTED = Symbol("undirected graph");

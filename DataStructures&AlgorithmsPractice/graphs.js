class Node {
  constructor(id) {
    this.id = id;
    this.adjacent = [];
  }
}


class Graph {
  constructor() {
    this.nodeLookup = new Map();
  }

  getNode(id) {
    if (!this.nodeLookup.has(id)) {
      this.nodeLookup.set(id, new Node(id));
    }
    return this.nodeLookup.get(id);
  }

  addEdge(source, destination) {
    const s = this.getNode(source);
    const d = this.getNode(destination);
    s.adjacent.push(d);
  }

  hasPathDFS(source, destination) {
    const s = this.getNode(source);
    const d = this.getNode(destination);
    const visited = new Set();
    return this.hasPathDFSHelper(s, d, visited);
  }

  hasPathDFSHelper(source, destination, visited) {
    if (visited.has(source.id)) {
      return false;
    }
    visited.add(source.id);
    if (source === destination) {
      return true;
    }
    for (const child of source.adjacent) {
      if (this.hasPathDFSHelper(child, destination, visited)) {
        return true;
      }
    }
    return false;
  }

  hasPathBFS(source, destination) {
    const s = this.getNode(source);
    const d = this.getNode(destination);
    return this.hasPathBFSHelper(s, d);
  }

  hasPathBFSHelper(source, destination) {
    const nextToVisit = [source];
    const visited = new Set();
    while (nextToVisit.length !== 0) {
      const node = nextToVisit.shift();
      if (node === destination) {
        return true;
      }
      if (visited.has(node.id)) {
        continue;
      }
      visited.add(node.id);
      for (const child of node.adjacent) {
        nextToVisit.push(child);
      }
    }
    return false;
  }
}

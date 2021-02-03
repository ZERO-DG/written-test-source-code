/**
 *  不确定的有限自动机
 */
class NFA {
    constructor(reg) {
        this.re = reg.split('')
        this.M = reg.length
        this.G = new Graph(this.M + 1)
        for (let i = 0; i < this.M; i++) {
            if (i < this.M - 1 && this.re[i + 1] === '*') {
                this.G.addEdge(i, i + 1)
                this.G.addEdge(i + 1, i)
            }
            if (this.re[i] === '*') this.G.addEdge(i, i + 1)
        }
        // console.log(this.G)
    }

    recognize(txt) {
        let pc = []
        let dfs = new DFS(this.G, 0)
        for (let v = 0; v < this.G.V; v++) {
            if (dfs.marked[v]) pc.push(v)
        }
        for (let i = 0; i < txt.length; i++) {
            let match = []
            for (let j in pc) {
                let v = pc[j]
                if (v < this.M) {
                    if (this.re[v] === txt.charAt(i) || this.re[v] === '.') {
                        match.push(parseInt(v) + 1)
                    }
                }
            }
            pc = []
            dfs = new DFS(this.G, match)
            for (let v = 0; v < this.G.V; v++)
                if (dfs.marked[v]) pc.push(v)
        }
        for (let i in pc) {
            let v = pc[i]
            if (v === this.M) { return true }
        }
        return false
    }
}

/**
 * 有向图
 */

class Graph {
    constructor(v) {
        this.map = []
        this.V = v
        this.E = 0
        for (let i = 0; i < v; i++) {
            this.map[i] = []
            for (let j = 0; j < v; j++) {
                this.map[i][j] = null
            }
        }
    }
    /**
     *  向图中添加一个边
     */
    addEdge(v, e) {
        this.map[v][e] = true
        this.E++
    }
    getGraph() {
        return this.map
    }
}
/**
 * 深度遍历
 */
class DFS {
    constructor(graph, v) {
        this.marked = []
        this.edgeTo = []
        const V = graph.V
        for (let i = 0; i < V; i++) {
            this.marked[i] = false
        }
        let map = graph.getGraph()
        if (typeof v === 'number') {
            this.t(map, v)
        }
        else {
            for (let i = 0; i < v.length; i++)
                this.t(map, v[i])
        }
    }

    t(map, v) {
        let item = map[v]
        if (this.marked[v]) {
            return false
        } else {
            this.marked[v] = true
        }
        this.edgeTo.push(v)
        for (let i = 0; i < item.length; i++) {
            if (item[i]) {
                this.t(map, i)
            }
        }
        return true
    }
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var nfa = new NFA(p)
    return nfa.recognize(s)
}

//测试用例
console.log(isMatch("ab", "a***********b"));
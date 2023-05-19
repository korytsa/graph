const trans = ['hi', 'papa', 'mama', 'zont'];
const wallet = "boss";
const nodesReady = [{
  "id": wallet,
  "size": 500,
  "color": "purple",
  "fontSize": 18,
  'x': 300,
  'y': 200,
}, ]

trans.map((item, index) => {
  nodesReady.push({
    "id": item,
    "symbolType": "circle",
    "color": "none",
    "strokeWidth": 3,
    "strokeColor": "purple",
    "size": 200,
    'x': index % 2 === 0 ? 10 : 580,
    'y': Math.random() * (380 - 0) + 0,
  }, )
})

module.exports = {
  "links": trans.map((item) => {
    return {
      "source": wallet,
      "target": item,
    }
  }),
  "nodes": nodesReady
}
var CANVASW = 1500
var CANVASH = 1000

var GRAPH_ORIGINX = 100
var GRAPH_ORIGINY = 100
var GRAPHW = 300
var GRAPHH = 800

var VERTICAL_PADDING = 20
var HORIZONTAL_PADDING = 50

var HASHMARKL = 5
var WHISKERL = 15
var RADIAN = 8

var maxVal = Number.MIN_VALUE
var minVal = Number.MAX_VALUE

var table
var numRows
var numColumns
var time
var ratings
var title
var colors
var highlightColor
var numHashMarks
var distY
var whiskerY

var firstQuartile
var median
var thirdQuartile
var iqr

var outliers = []

function preload() {
  table = loadTable("presidents.csv", "csv", "header")
}

// only for display purpose, bad coding yikes!
function setup() {
  createCanvas(CANVASW, CANVASH)
  //count the columns
  numRows = table.getRowCount()
  numColumns = table.getColumnCount()

  time = table.getColumn("time")
  ratings = table.getColumn("rating")

  title = "Presidents Rating (100 high) from 1924 to 1974"

  colors = [
    color(50, 70, 117),
    color(67, 103, 186),
    color(84, 129, 235),
    color(140, 175, 255)
  ]

  highlightColor = color(150, 82, 217)
  whiskerY = GRAPH_ORIGINY + VERTICAL_PADDING

  preprocessInputData()
}

// called after we've got first and thirdquartiles
function findOutliers(val) {
  if (val >= thirdQuartile + 3 * iqr || val 
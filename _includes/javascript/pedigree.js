<div>
<script src="http://d3js.org/d3.v2.min.js?2.9.4">
</script>
<script>

var margin = {top: 0, right: 160, bottom: 0, left: 0},
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var tree = d3.layout.tree()
    .separation(function(a, b) { return a.parent === b.parent ? 1 : .5; })
    .children(function(d) { return d.parents; })
    .size([height, width]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("/json/RHV_Mizzou_Mystique.json", function(json) {
  var nodes = tree.nodes(json);

  var link = svg.selectAll(".link")
      .data(tree.links(nodes))
    .enter().append("path")
      .attr("class", "link")
      .attr("d", elbow);

  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("text")
      .attr("class", "name")
      .attr("x", 8)
      .attr("y", -6)
      .text(function(d) { return d.name; });

});

function elbow(d, i) {
  return "M" + d.source.y + "," + d.source.x
       + "H" + d.target.y + "V" + d.target.x
       + (d.target.children ? "" : "h" + margin.right);
}

</script>
</div>

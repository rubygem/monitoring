$("#chart").chart({
 template : "line_basic_3",
 tooltips : {
  serie1 : ["a", "b", "c", "d"],
  serie2 : ["a", "b", "c", "d"]
 },
 values : {
  serie1 : [89, 10, 38, 66],
  serie2 : [36, 37, 89, 79]
 },
 labels : ["first", "second", "third", "fourth"],
 defaultSeries : {
  fill : true,
  stacked : true
 },
 axis : {
  l : {
   title : "Average height"
  }
 }
});

jQuery(document).ready(function() {
    test("test should be true", function() {
        var result = true;
        equal(result, true, "We expect true");
    });
});



$.elycharts.templates['line_basic_3'] = {
 type : "line",
 style : {
  "background-color" : "black"
 },
 margins : [10, 10, 20, 30],
 defaultSeries : {
  rounded : false,
  plotProps : {
   "stroke-width" : 2
  },
  dot : true,
  dotProps : {
   stroke : "black",
   "stroke-width" : 2
  },
  tooltip : {
   frameProps : {
    opacity : 0.75
   }
  }
 },
 series : {
  serie1 : {
   color : "red"
  },
  serie2 : {
   color : "blue"
  }
 },
 defaultAxis : {
  labels : true,
  labelsProps : {
   fill : "white"
  },
  labelsAnchor : "start",
  labelsMargin : 5
 },
 axis : {
  l : {
   titleProps : {
    fill : "white"
   },
   titleDistance : 15,
   labels : false
  }
 },
 features : {
  grid : {
   draw : [false, true],
   forceBorder : true,
   props : {
    stroke : "#A0A080"
   },
   extra : [0, 0, 10, 0]
  }
 }
}

$.elycharts.templates['line_basic'] = {
       type : "line",
       margins : [10, 10, 20, 50],
       defaultSeries : {
        plotProps : {
         "stroke-width" : 4
        },
        dot : true,
        dotProps : {
         stroke : "white",
         "stroke-width" : 2
        }
       },
       series : {
        serie1 : {
         color : "red"
        },
        serie2 : {
         color : "blue"
        }
       },
       defaultAxis : {
        labels : true
       },
       features : {
        grid : {
         draw : [true, false],
         props : {
          "stroke-dasharray" : "-"
         }
        },
        legend : {
         horizontal : false,
         width : 80,
         height : 50,
         x : 210,
         y : 220,
         dotType : "circle",
         dotProps : {
          stroke : "white",
          "stroke-width" : 2
         },
         borderProps : {
          opacity : 0.3,
          fill : "#c0c0c0",
          "stroke-width" : 0,
          "stroke-opacity" : 0
         }
        }
       }
      }
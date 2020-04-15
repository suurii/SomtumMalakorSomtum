var now = -1;

// nodeDataArray = [
//     {"key":-1, "loc":"155 -138", "category":"Start"},
//     {"key":0, "loc":"190 15", "text":"Shopping"},
//     {"key":1, "loc":"353 32", "text":"Browse Items"},
//     {"key":2, "loc":"353 166", "text":"Search Items"},
//     {"key":3, "loc":"512 12", "text":"View Item"},
//     {"key":4, "loc":"661 17", "text":"View Cart"},
//     {"key":5, "loc":"644 171", "text":"Update Cart"},
//     {"key":6, "loc":"800 96", "text":"Checkout"},
//     {"key":-2, "loc":"757 229", "category":"End"}
// ]; 

// linkDataArray = [
//     { "from": -1, "to": 0, "text": "Visit online store" },
//     { "from": 0, "to": 1,  "progress": "false", "text": "Browse" },
//     { "from": 0, "to": 2,  "progress": "true", "text": "Use search bar" },
//     { "from": 1, "to": 2,  "progress": "true", "text": "Use search bar" },
//     { "from": 2, "to": 3,  "progress": "true", "text": "Click item" },
//     { "from": 2, "to": 2,  "text": "Another search", "curviness": 20 },
//     { "from": 1, "to": 3,  "progress": "true", "text": "Click item" },
//     { "from": 3, "to": 0,  "text": "Not interested", "curviness": -100 },
//     { "from": 3, "to": 4,  "progress": "true", "text": "Add to cart" },
//     { "from": 4, "to": 0,  "text": "More shopping", "curviness": -150 },
//     { "from": 4, "to": 5,  "text": "Update needed", "curviness": -50 },
//     { "from": 5, "to": 4,  "text": "Update made" },
//     { "from": 4, "to": 6,  "progress": "true", "text": "Proceed" },
//     { "from": 6, "to": 5,  "text": "Update needed" },
//     { "from": 6, "to": -2, "progress": "true", "text": "Purchase made" }
// ];
////////////////////////////////////////////////////////////////////////////////////
// nodeDataArray = [
//     {"key":-1, "loc":"0 0", "category":"Start"},
    
//     {"key":0, "loc":"200 -100", "text":"Shopping"},
//     {"key":1, "loc":"200 100", "text":"Browse Items"},

//     {"key":2, "loc":"400 -250", "text":"Search Items"},
//     {"key":3, "loc":"400 -150", "text":"View Item"},
//     {"key":4, "loc":"400 -50", "text":"View Cart"},
    
//     {"key":5, "loc":"400 50", "text":"Update Cart"},
//     {"key":6, "loc":"400 150", "text":"Checkout"},
//     {"key":7, "loc":"400 250", "text":"Checkout"},

//     {"key":8, "loc":"600 -200", "text":"Update Cart"},
//     {"key":9, "loc":"600 -100", "text":"Checkout"},

//     {"key":10, "loc":"600 100", "text":"Checkout"},
//     {"key":11, "loc":"600 200", "text":"Checkout"},

//     {"key":-2, "loc":"800 0", "category":"End"},


//     {"key":-2, "loc":"1000 0", "category":"End"},

//     // {"key":-2, "loc":"150 0", "category":"End"}
// ]; 

nodeDataArray = [
    {"key":-1, "loc":"-75 25"},
  
    {"key":0, "loc":"0 0","text":"Start\nstate","category":"Start"},
    
    {"key":1, "loc":"200 -100", "text":"เผ็ดน้อย", "category":"Start"},
    {"key":2, "loc":"200 100", "text":"เผ็ดมาก", "category":"Start"},

    {"key":3, "loc":"400 -250", "text":"ปูเค็ม\nเผ็ดน้อย", "category":"Start"},
    {"key":4, "loc":"400 -150", "text":"หมูยอ\nเผ็ดน้อย", "category":"Start"},
    {"key":5, "loc":"400 -50", "text":"ไข่เค็ม\nเผ็ดน้อย", "category":"Start"},
    
    {"key":6, "loc":"400 50", "text":"ปูเค็ม\nเผ็ดมาก", "category":"Start"},
    {"key":7, "loc":"400 150", "text":"หมูยอ\nเผ็ดมาก", "category":"Start"},
    {"key":8, "loc":"400 250", "text":"ไข่เค็ม\nเผ็ดมาก", "category":"Start"},

    {"key":9, "loc":"600 -200", "text":"ตำปู\nปลาร้า\nเผ็ดน้อย", "category":"Start"},
    {"key":10, "loc":"600 -100", "text":"ตำหมูยอ\nปลาร้า\nเผ็ดน้อย", "category":"Start"},

    {"key":11, "loc":"600 100", "text":"ตำปู\nปลาร้า\nเผ็ดมาก", "category":"Start"},
    {"key":12, "loc":"600 200", "text":"ตำหมูยอ\nปลาร้า\nเผ็ดมาก", "category":"Start"},

    {"key":13, "loc":"800 0", "text":"Confirm", "category":"End"},


    {"key":14, "loc":"1000 0", "text":"Trap\nstate", "category":"Start"},
]; 

linkDataArray = [
    // { "from": 0, "to": 0, "text": "6" },
    // { "from": 0, "to": 1, "text": "1" },
    // { "from": 0, "to": 2, "text": "1" },

    // { "from": 1, "to": 1, "text": "Visit online store" },
    // { "from": 1, "to": 2, "text": "Visit online store" },
    // { "from": 1, "to": 3, "text": "Visit online store" },
    // { "from": 1, "to": 4, "text": "Visit online store" },
    // { "from": 1, "to": 5, "text": "Visit online store" },

    // { "from": 2, "to": 1, "text": "Visit online store" },
    // { "from": 2, "to": 2, "text": "Visit online store" },
    // { "from": 2, "to": 6, "text": "Visit online store" },
    // { "from": 2, "to": 7, "text": "Visit online store" },
    // { "from": 2, "to": 8, "text": "Visit online store" },

    
    // //layer 2 up
    // { "from": 3, "to": 3, "text": "Visit online store" },
    // { "from": 3, "to": 4, "text": "Visit online store" },
    // { "from": 3, "to": 5, "text": "Visit online store" },
    // { "from": 3, "to": 6, "text": "Visit online store" },
    // { "from": 3, "to": 9, "text": "Visit online store" },

    // { "from": 4, "to": 3, "text": "Visit online store" },
    // { "from": 4, "to": 4, "text": "Visit online store" },
    // { "from": 4, "to": 5, "text": "Visit online store" },
    // { "from": 4, "to": 8, "text": "Visit online store" },
    // { "from": 4, "to": 10, "text": "Visit online store" },

    // { "from": 5, "to": 3, "text": "Visit online store" },
    // { "from": 5, "to": 4, "text": "Visit online store" },
    // { "from": 5, "to": 5, "text": "Visit online store" },
    // { "from": 5, "to": 8, "text": "Visit online store" },

    // //layer 2 down
    // { "from": 6, "to": 3, "text": "Visit online store" },
    // { "from": 6, "to": 6, "text": "Visit online store" },
    // { "from": 6, "to": 7, "text": "Visit online store" },
    // { "from": 6, "to": 8, "text": "Visit online store" },
    // { "from": 6, "to": 11, "text": "Visit online store" },

    // { "from": 7, "to": 4, "text": "Visit online store" },
    // { "from": 7, "to": 6, "text": "Visit online store" },
    // { "from": 7, "to": 7, "text": "Visit online store" },
    // { "from": 7, "to": 8, "text": "Visit online store" },
    // { "from": 7, "to": 12, "text": "Visit online store" },

    // { "from": 8, "to": 5, "text": "Visit online store" },
    // { "from": 8, "to": 6, "text": "Visit online store" },
    // { "from": 8, "to": 7, "text": "Visit online store" },
    // { "from": 8, "to": 8, "text": "Visit online store" },


    // //layer 3 
    // { "from": 9, "to": 9, "text": "Visit online store" },
    // { "from": 9, "to": 10, "text": "Visit online store" },
    // { "from": 9, "to": 11, "text": "Visit online store" },

    // { "from": 10, "to": 9, "text": "Visit online store" },
    // { "from": 10, "to": 10, "text": "Visit online store" },
    // { "from": 10, "to": 12, "text": "Visit online store" },

    // { "from": 11, "to": 9, "text": "Visit online store" },
    // { "from": 11, "to": 11, "text": "Visit online store" },
    // { "from": 11, "to": 12, "text": "Visit online store" },
    // // { "from": 11, "to": 13, "text": "Visit online store" },

    // { "from": 12, "to": 10, "text": "Visit online store" },
    // { "from": 12, "to": 11, "text": "Visit online store" },
    // { "from": 12, "to": 12, "text": "Visit online store" },
    // // { "from": 12, "to": 13, "text": "Visit online store" },

    // { "from": 13, "to": 13, "text": "Visit online store" },
    // { "from": 13, "to": 14, "text": "Visit online store" },

    // { "from": 14, "to": 14, "text": "Visit\nonline\nstore" },



    
    // { "from": 1, "to": 13, "text": "Confirm" },
    // { "from": 2, "to": 13, "text": "Confirm" },
    // { "from": 5, "to": 13, "text": "Confirm" },
    // { "from": 8, "to": 13, "text": "Confirm" },
    // { "from": 9, "to": 13, "text": "Confirm" },
    // { "from": 10, "to": 13, "text": "Confirm" },
    // { "from": 11, "to": 13, "text": "Confirm" },
    // { "from": 12, "to": 13, "text": "Confirm" },



    { "from": -1, "to": 0, "text": ""},
    { "from": 1, "to": 0, "text": "Reset" , "points":[240,-100 ,240,-270 ,40,-270 ,40,0 ,], "routing":"Orthogonal"},
    { "from": 2, "to": 0, "text": "Reset" , "points":[240,180 ,240,350 ,40,350 ,40,80 ,], "routing":"Orthogonal"},
    { "from": 3, "to": 0, "text": "Reset" , "points":[440,-250 ,440,-270 ,40,-270 ,40,0 ,], "routing":"Orthogonal","segmentFraction":0.5},
    { "from": 4, "to": 0, "text": "Reset" , "points":[480,-110 ,530,-160 ,530,-270 ,40,-270 ,40,0 ,],"segmentFraction":0.65},
    { "from": 5, "to": 0, "text": "Reset" , "points":[480,-10 ,530,-60 ,530,-270 ,40,-270 ,40,0 ,],"segmentFraction":0.65},
    { "from": 6, "to": 0, "text": "Reset" , "points":[480,90 ,530,140 ,530,350 ,40,350 ,40,80 ,],"segmentFraction":0.65},
    { "from": 7, "to": 0, "text": "Reset" , "points":[480,190 ,530,240 ,530,350 ,40,350 ,40,80 ,],"segmentFraction":0.65},
    { "from": 8, "to": 0, "text": "Reset" , "points":[440,330 ,440,350 ,40,350 ,40,80 ,], "routing":"Orthogonal","segmentFraction":0.5},
    { "from": 9, "to": 0, "text": "Reset" , "points":[640,-200 ,640,-270 ,40,-270 ,40,0 ,], "routing":"Orthogonal"},
    { "from": 10, "to": 0, "text": "Reset" , "points":[680,-60 ,710,-100 ,710,-270 ,40,-270 ,40,0 ,], "routing":"Orthogonal","segmentFraction":0.7},
    { "from": 11, "to": 0, "text": "Reset" , "points":[680,140 ,710,180 ,710,350 ,40,350 ,40,80 ,], "routing":"Orthogonal"  ,"segmentFraction":0.7},
    { "from": 12, "to": 0, "text": "Reset" , "points":[640,280 ,640,350 ,40,350 ,40,80 ,], "routing":"Orthogonal" ,"segmentIndex":0 ,"segmentFraction":0.2},


    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1, "text": "Visit online store" },
    // { "from": 0, "to": 1,  "progress": "false", "text": "Browse" },
    // { "from": 0, "to": 2,  "progress": "true", "text": "Use search bar" },
    // { "from": 1, "to": 2,  "progress": "true", "text": "Use search bar" },
    // { "from": 2, "to": 3,  "progress": "true", "text": "Click item" },
    // { "from": 2, "to": 2,  "text": "Another search", "curviness": 20 },
    // { "from": 1, "to": 3,  "progress": "true", "text": "Click item" },
    // { "from": 3, "to": 0,  "text": "Not interested", "curviness": -100 },
    // { "from": 3, "to": 4,  "progress": "true", "text": "Add to cart" },
    // { "from": 4, "to": 0,  "text": "More shopping", "curviness": -150 },
    // { "from": 4, "to": 5,  "text": "Update needed", "curviness": -50 },
    // { "from": 5, "to": 4,  "text": "Update made" },
    // { "from": 4, "to": 6,  "progress": "true", "text": "Proceed" },
    // { "from": 6, "to": 5,  "text": "Update needed" },
    // { "from": 6, "to": -2, "progress": "true", "text": "Purchase made" }
];

var $ = go.GraphObject.make;  // for conciseness in defining templates
// some constants that will be reused within templates
var roundedRectangleParams = {
    parameter1: 20,  // set the rounded corner
    spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function init() {
     myDiagram =
        $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
          {
            grid: $(go.Panel, "Grid",
              { gridCellSize: new go.Size(10, 10) },
              $(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
              $(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 })
            ),
            "draggingTool.isGridSnapEnabled": true,
            
            "animationManager.initialAnimationStyle": go.AnimationManager.None,
            "InitialAnimationStarting": function(e) {
                var animation = e.subject.defaultAnimation;
                animation.easing = go.Animation.EaseOutExpo;
                animation.duration = 1000;
                animation.add(e.diagram, 'scale', 0.1, 1);
                animation.add(e.diagram, 'opacity', 0, 1);
            },

            // have mouse wheel events zoom in and out instead of scroll up and down
            "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
            // enable undo & redo
            "undoManager.isEnabled": true,
            positionComputation: function (diagram, pt) {
              return new go.Point(Math.floor(pt.x), Math.floor(pt.y));
            },
          });

      // define the Node template
      myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          {
            // locationSpot: go.Spot.TopCenter,
            isShadowed: true, shadowBlur: 1,
            shadowOffset: new go.Point(0, 1),
            shadowColor: "rgba(0, 0, 0, .14)"
          },
          new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
          // define the node's outer shape, which will surround the TextBlock
          $(go.Shape, "RoundedRectangle", roundedRectangleParams,
            {
              name: "SHAPE", fill: null, strokeWidth: 0,
              stroke: null,
              portId: "",  // this Shape is the Node's port, not the whole Node
              fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
              toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
              cursor: "pointer"
            }),
          $(go.TextBlock,
            {
              font: "bold small-caps 11pt helvetica, bold arial, sans-serif", margin: 7, stroke: "rgba(0, 0, 0, .87)",
            },
            new go.Binding("text").makeTwoWay())
        );

      myDiagram.nodeTemplateMap.add("Start",
        $(go.Node, "Spot", { desiredSize: new go.Size(80, 80) },
          new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
          $(go.Shape, "Circle",
            {
              fill: "#52ce60", /* green */
              stroke: null,
              portId: "",
              fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
              toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
              // cursor: "pointer"
            }),
          $(go.TextBlock, "Start",
            {
              font: "bold 18pt TH SarabunPSK, bold arial, sans-serif",
              textAlign: "center",
              stroke: "whitesmoke"
            },
            new go.Binding("text").makeTwoWay()
            )

        )
      );

      myDiagram.nodeTemplateMap.add("End",
        $(go.Node, "Spot", { desiredSize: new go.Size(80, 80) },
          new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
          $(go.Shape, "Circle",
            {
              fill: "maroon",
              stroke: null,
              portId: "",
              fromLinkable: true, fromLinkableSelfNode: true, fromLinkableDuplicates: true,
              toLinkable: true, toLinkableSelfNode: true, toLinkableDuplicates: true,
              cursor: "pointer"
            }),
          $(go.Shape, "Circle", { fill: null, desiredSize: new go.Size(70, 70), strokeWidth: 2, stroke: "whitesmoke" }),
          $(go.TextBlock, "Confirm",
            {
              font: "bold 18pt TH SarabunPSK, bold arial, sans-serif",
              stroke: "whitesmoke"
            },
            new go.Binding("text").makeTwoWay())
        )
      );

      // // replace the default Link template in the linkTemplateMap
      // myDiagram.linkTemplate =
      //   $(go.Link,  // the whole link panel
      //     {
      //       // routing: go.Link.AvoidsNodes,
      //       curve: go.Link.Bezier,
      //       // adjusting: go.Link.Stretch,
      //       // reshapable: true, relinkableFrom: true, relinkableTo: true,
      //       // toShortLength: 3
      //     },
      //     new go.Binding("points").makeTwoWay(),
      //     new go.Binding("curviness"),
      //     $(go.Shape,  // the link shape
      //       { strokeWidth: 1.5 },
      //       new go.Binding('stroke', 'progress', function(progress) {
      //         return progress=="true" ? "#52ce60" /* green */ : 'black';
      //       }),
      //       new go.Binding('strokeWidth', 'progress', function(progress) {
      //         return progress=="true" ? 2.5 : 1.5;
      //       })
      //       ),
      //     $(go.Shape,  // the arrowhead
      //       { toArrow: "standard", stroke: null },
      //       new go.Binding('fill', 'progress', function(progress) {
      //         return progress=="true" ? "#52ce60" /* green */ : 'black';
      //       }),
      //       ),
      //     $(go.Panel, "Auto",
      //       $(go.Shape,  // the label background, which becomes transparent around the edges
      //         {
      //           fill: $(go.Brush, "Radial",
      //             { 0: "rgb(245, 245, 245)", 0.7: "rgb(245, 245, 245)", 1: "rgba(245, 245, 245, 0)" }),
      //           stroke: null
      //         }),
          //   $(go.TextBlock, "transition",  // the label text
          //     {
          //       textAlign: "center",
          //       font: "9pt helvetica, arial, sans-serif",
          //       margin: 4,
          //       editable: true  // enable in-place editing
          //     },
          //     // editing the text automatically updates the model data
          //     new go.Binding("text").makeTwoWay())
          // )
      //   );

      myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        { relinkableFrom: true, relinkableTo: true, reshapable: true, resegmentable: true },
        {
          routing: go.Link.AvoidsNodes,  // but this is changed to go.Link.Orthgonal when the Link is reshaped
          adjusting: go.Link.End,
          curve: go.Link.JumpOver,
          corner: 5,
          // toShortLength: 4
        },
        new go.Binding("points").makeTwoWay(),
        new go.Binding("curve").makeTwoWay(),
        // remember the Link.routing too
        new go.Binding("routing", "routing", go.Binding.parseEnum(go.Link, go.Link.AvoidsNodes))
          .makeTwoWay(go.Binding.toString),
        $(go.Shape,  // the link path shape
          { isPanelMain: true, strokeWidth: 1 }),
        $(go.Shape,  // the arrowhead
          { toArrow: "Standard", stroke: null }),
        $(go.TextBlock, "transition",  // the label text
          {
            textAlign: "center",
            font: "9pt helvetica, arial, sans-serif",
            margin: 4,
            segmentIndex: 0,
            segmentFraction: 0.2 
          },
          // editing the text automatically updates the model data
          new go.Binding("text").makeTwoWay(),
          new go.Binding("segmentIndex").makeTwoWay(),
          new go.Binding("segmentFraction").makeTwoWay(),
          
          
          ),
      
      );

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Create a part in the background of the full diagram to highlight the selected node
        highlighter =
          $(go.Part, "Auto",
            {
              layerName: "Background",
              selectable: false,
              isInDocumentBounds: false,
              locationSpot: go.Spot.Center
            },
            $(go.Shape, "Ellipse",
              {
                fill: $(go.Brush, "Radial", { 0.0: "yellow", 1.0: "white" }),
                stroke: null,
                desiredSize: new go.Size(100, 100)
              })
          );
        myDiagram.add(highlighter);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    myDiagram.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);
    // myDiagram.model.isReadOnly = true;
    myDiagram.isReadOnly = true;
    highlightNode(0);
    }

    function highlightNode(nodeId) {
      // var node = myDiagram.selection.first();
      var node = myDiagram.findNodeForKey(nodeId++);
      // console.log(node);
      if (node !== null) {
        // make sure the selected node is in the viewport
        myDiagram.scrollToRect(node.actualBounds);
        // move the large yellow node behind the selected node to highlight it
        highlighter.location = node.location;
        // console.log(node.location)
      }
    }

function createEventTable(eventString, divTag) {        
        // Get firebase reference
        var ref = new Firebase("https://flickering-fire-9736.firebaseio.com/Event_Attributes/" + eventString);
        // Attach an asynchronous callback to read the data at reference tag
        // download the entire list
        ref.once('value',function(snap) {
          var mybody = document.getElementById(divTag);
          // creates <table> and <tbody> elements
            mytable     = document.createElement("table");
            mytable.className = "table";
            var mycurrentcell1;
            var mycurrentcell2;
            var mycurrentcell3;
            // create body tag for each color
            mytablebody = document.createElement("tbody");
            // The callback function will get called for every ClipBoard Event

            // creates a <tr> element
            mycurrent_row = document.createElement("tr");
            
            mycurrent_cell1 = document.createElement("th");
            currenttext1 = document.createTextNode("Event Name");

            mycurrent_cell2 = document.createElement("th");
            currenttext2 = document.createTextNode("Description");

            // appends the Text Node we created into the cell <td>
            mycurrent_cell1.appendChild(currenttext1);
            mycurrent_cell2.appendChild(currenttext2);


            mycurrent_row.appendChild(mycurrent_cell1);
            mycurrent_row.appendChild(mycurrent_cell2);

            mytablebody.appendChild(mycurrent_row);

            snap.forEach(function(childSnap) {
            // creates a <tr> element
            mycurrent_row = document.createElement("tr");
            // key will be each color starting with the first child
            var key = childSnap.key();
                // childData will be the actual contents of the child
            var childData = childSnap.val();
            // creates a <td> element for EVENT NAME or <th> for header titles in table
            mycurrent_cell1 = document.createElement("td");
            currenttext1 = document.createTextNode(key);
            // creates a <td> element for EVENT DESCRIPTION
            mycurrent_cell2 = document.createElement("td");
            currenttext2 = document.createTextNode(childData.desc);

              // appends the Text Node we created into the cell <td>
              mycurrent_cell1.appendChild(currenttext1);
              mycurrent_cell2.appendChild(currenttext2);

              mycurrent_row.appendChild(mycurrent_cell1);
              mycurrent_row.appendChild(mycurrent_cell2);

              mytablebody.appendChild(mycurrent_row);
          });

            // appends <tbody> into <table>
            mytable.appendChild(mytablebody);
            // appends <table> into <body>
            mybody.appendChild(mytable);
            // sets the border attribute of mytable to 2;
            // mytable.setAttribute("border","2");
          
        });
          
       /* var myChild = snap.child("Blue").val();
        var outputTag = document.getElementById("outputHex");
        outputTag.innerHTML = myChild.hex;
        outputTag.innerHTML = myChild.name;
        }); */
}
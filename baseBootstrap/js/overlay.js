function showResult() {
    "use strict";
    var ref = new Firebase("https://flickering-fire-9736.firebaseio.com");

    // get the user input from the search bar
    var user_input = document.getElementById("appendedInputButton").value;
    var description = "";
    var category =""

    // convert user input into lower case
    user_input = user_input.toLowerCase();

        // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function (snapshot) {

        var res = snapshot.val();
        var foundFlag = false;
        var Fkey = "";
        var Fprop = "";

            for(var key in res)  // Loop through the object, Big category
            {
                if(res.hasOwnProperty(key))  //
                {
                    // convert the category name into lower case
                    // for convinience
                    var lowerCaseKey = key.toLowerCase();

                    // macthing
                    if (user_input == lowerCaseKey)
                    {
//                        alert("Big found");
                        foundFlag = true;
                        break;
                    }

                    var temp = res[key];  // to accesss sub category

                    for(var prop in temp)  // loop through the object, sub category
                    {
                        if(temp.hasOwnProperty(prop))
                        {
                            var lowerCaseProp = prop.toLowerCase();

                            if(user_input == lowerCaseProp)
                            {
                                foundFlag = true;
                                Fkey = key.valueOf();  // big category
                                Fprop = prop.valueOf();  // sub category

                                category = Fkey;
                                description = res[Fkey][Fprop].desc;
                                break;
                            }
                            else
                            { continue;  }
                        }
                    } // end of inner for-loop

                    if(foundFlag == true)
                        break;
                } // end of If ()

            } // end of outter for-loop

            if(foundFlag == true){
                document.getElementById('result').innerHTML = "<h2>"+user_input+"<small> ("+category+") </small></h2>"+"<p class='lead'>" + description +"</p>";
                document.getElementById('linkHere').innerHTML = "<a href=tag.html?"+user_input+"> See more on "+user_input+"</a><br>";
            }
            else{
                document.getElementById('result').innerHTML = '<div class="alert alert-error" style="background-color: orange; opacity: 0.5; width: 600px;"> No Result </div>';}

        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
}

function toggleOverlay() {
    "use strict";
    var overlay = document.getElementById("overlay");
    var search_result = document.getElementById("search-result-frame");
    overlay.style.opacity = 0.7;
    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        search_result.style.display = "none";
    } else {
        overlay.style.display = "block";
        search_result.style.display = "block";
        showResult();
    }
}

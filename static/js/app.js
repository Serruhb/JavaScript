// from data.js
var tableData = data;

// Select where to append the table in the html file
var tbody = d3.select("tbody");

// iterate through the tableData array. 
tableData.forEach((sighting) => {
    var row = tbody.append("tr"); // append a new row to the table body

    // iterate through each object in the array and append the values into the newly create row
    Object.entries(sighting).forEach(([key, value]) => {
        //console.log(value);

        row.append("td").text(value);
    });

});



var filterTable = d3.select("#filter-btn");

filterTable.on("click", function() {


    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");


    var inputValue = inputElement.property("value");

    function filterData(date) {
        return date.datetime === inputValue;
    }

    var filteredTable = tableData.filter(filterData);

    console.log(filteredTable);

    var count = 0;
    for (i = 1; i < tableRow.length; i++) {
        var td = tableRow[i].getElementsByTagName("td");
        var tdate = td[0].textContent;

        if (tdate === inputValue) {
            tableRow[i].style.display = "";
            count += 1
        } else {
            tableRow[i].style.display = "none";
            //console.log("This date does not exist, Please try again.");
        }



    }



});
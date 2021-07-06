// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to iterate through the array of objects in our data file 
// and then append them to a table row
function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");

    });
}
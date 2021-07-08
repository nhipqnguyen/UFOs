// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to loop through each object in the array,
// append a row to the HTML table, and
// add each value from the object into a cell
function buildTable(data) {
      // First, clear out any existing data
    tbody.html("");
    // iterate through each row of the data through the array
    data.forEach((dataRow) => {
        // create a variable that will append a row to the table body
        let row = tbody.append("tr");
        // for each object from the array of UFO sightings,
        // add its values into its own dataRow
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to a table
            let cell = row.append("td");
            // extracting only the text of the value,
            // and add it to the cell
            cell.text(val);
            }
        );

    });
};

// create a function to handle clicks
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
// tell D3 to execute our handleClick() function when 
// the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
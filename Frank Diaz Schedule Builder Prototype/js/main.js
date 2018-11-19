/* This is a prototype for a Schedule Builder for Professor Rob McCaffrey. Let's see how this turns out. */


// Set up arrays for the Schedule

// var test = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
/*
var roomNumber = [140, 141, 142, 143, 144, 145]

var courses = ["1102C", "2100C", "2500C", "1108C", "2180C"];
*/

// Set up a table for schedule
function createSchedule() {
    var tableDiv = document.getElementById("schedule");
    var scheduleTable = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    
    scheduleTable.border = '1';
    scheduleTable.appendChild(tableBody);
    
    // Set up arrays with the shedule time and days
    var scheduleHeadings = new Array();
    scheduleHeadings[0] = "Time";
    scheduleHeadings[1] = "Sunday";
    scheduleHeadings[2] = "Monday";
    scheduleHeadings[3] = "Tuesday";
    scheduleHeadings[4] = "Wednesday";
    scheduleHeadings[5] = "Thursday";
    scheduleHeadings[6] = "Friday";
    scheduleHeadings[7] = "Saturday";
    
    // Set up the table's content
    var content = new Array();
    content[0] = new Array("Morning", "A", "B", "C", "D", "E", "F", "G");
    content[1] = new Array("Afternoon", "H", "I", "J", "K", "L", "M", "N");
    content[2] = new Array("Evening", "O", "P", "Q", "R", "S", "T", "U");

    // Set up the table columns
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < scheduleHeadings.length; i++) {
        var th = document.createElement('TH');
        th.width = '75';
        th.appendChild(document.createTextNode(scheduleHeadings[i]));
        tr.appendChild(th);
    }
    
    // Set up the table rows
    for (i = 0; i < content.length; i++) {
        var tr = document.createElement('TR');
        for (j = 0; j < content[i].length; j++) {
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(content[i][j]));
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
    tableDiv.appendChild(scheduleTable);
}





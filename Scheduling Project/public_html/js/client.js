
//Elise Schatzki-McClain



document.body.style.backgroundColor = "pink"

cells = document.getElementsByTagName("td") //handler for getting a list of cells
//creates an array list of cells in schedule
var cells_array = new Array()
for (cell of cells) {
    cells_array.push(cell)   
}

//calls for each cell a set of event handlers to add and delete events and change colors
cells_array.forEach((cell) => {
    cell.addEventListener("click", addEvent)   
    cell.addEventListener("mouseover", available)
    cell.addEventListener("mouseout", dehighlight)
    cell.addEventListener("dblclick", deleteEvent)
})


//function to delete and existing event
function deleteEvent() {
    if (this.innerHTML != ""){
        this.innerHTML = "" //clears html if hmtl is not already empty
    }
}

//tfunction checks if a time slot is open or not and changes color
function available() {
    if (this.innerHTML == ""){
        this.style.backgroundColor = "green" //if open, turn green
        //change color to green
    } else {
        this.style.backgroundColor = "red" //else turn red
        //change to red
    }
}

//functions changes color back to the background
function dehighlight() {
    this.style.backgroundColor = "pink"
}

//function adds an event to the schedule
function addEvent() {

    message = document.getElementById("result_text") //retreives the announcement text object
    if (this.innerHTML == "") { //checks the cell contents is empty

        
        eventName = document.getElementById("myEvent").value //retrieves the user written event
        this.innerHTML = "Event:" + eventName //makes the vent into the inner cell html
        message.innerHTML = "Your event is successfully scheduled! Yay!" //makes success announcement
    } else {
    
        message.innerHTML = "You are already busy at this time! Try another time!" // else, if space is already full, makes fail anouncement
    }

}







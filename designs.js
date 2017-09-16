//create event listener for the submit button when clicked
$('#submit').on('click keypress', function() {
    //this keeps the submit button from clearing out what was choosen
    event.preventDefault();
    //remove anything that was previously created in the DOM
    $('td').remove();
    $('tr').remove();
    //call makeGrid function
    makeGrid();
})

// When submit buttons is click by the user, call makeGrid()
function makeGrid() {
    //setting variables for row, column and table
    const row = $('#input_width').val();
    const column = $('#input_height').val();
    const table = $('#pixel_canvas');
    //setting a nested for loop to add tr's and td's to the DOM based off what user chooses
    for (var i = 0; i < column; i++) {
        $(table).append('<tr>');
    }
    for (var j = 0; j < row; j++) {
        $('tr').append('<td></td>')
    }
};

//create event listener that will grab the color choosen by user and set it as the background of the td that was clicked
$('#pixel_canvas').on('click', 'td', function() {
    const choosenColor = $('#colorPicker').val();
    $(this).css({
        "background-color": choosenColor
    });
});
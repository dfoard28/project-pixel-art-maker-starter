// Select color input

// Select size input

/*//create a listener that will store the value of the grid height when the input section is changed
$('#input_height').change(function(){
    let gridHeight = $(this).val();
    console.log(gridHeight);
})

//create a listner that will store the value of the grid width when the input section is changed
$('#input_width').change(function(){
    let gridWidth = $(this).val();
    console.log(gridWidth);
})*/

//create event listener for the submit button being clicked on
$('#submit').on('click keypress', function(){
    //this keeps the submit button from clearing out what was choosen.
    event.preventDefault();
    //remove anything that was previously created in the DOM
    $('td').remove();
    $('tr').remove();
    //call makeGrid function
    makeGrid();
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let row = $('#input_width').val();
    let column = $('#input_height').val();
    let table = $('#pixel_canvas');
        for(var i = 0; i < column; i++){
        $(table).append('<tr>');
        }
        for (var j = 0; j < row; j++){
        $('tr').append('<td></td>')
        }
    };

//create event listener that will set choosenColor to the color value that was picked
$('#colorPicker').change(function(){
    let choosenColor = $(this).val();
    console.log(choosenColor);
})
$('td').click(function(){
    let choosenColor = $('#colorPicker').val();
    console.log(choosenColor)
    $(this).css({"background-color":choosenColor});
})
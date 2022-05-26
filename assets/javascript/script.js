// adds current date by day word month day
$('#currentDay').text(moment().format("dddd MMMM Do"));

//saves text conent to loacl storeage
$('.saveBtn').on('click', function () {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
});

// changes background color based on current time will have to test during time between 9-5.
//gets info from local storage and renders it in the appropriate cell.
$('input').each(function () {
    $(this).val(localStorage.getItem($(this).attr("id")))
    if (parseInt($(this).attr("id")) > moment().hour()) {
        $(this).addClass("future")
    } else if (parseInt($(this).attr("id")) < moment().hour()) {
        $(this).addClass('past')
    } else {
        $(this).addClass('present')
    }
});


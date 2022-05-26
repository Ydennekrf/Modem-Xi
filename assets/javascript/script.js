// adds current date by day word month day
$('#currentDay').text(moment().format("dddd MMMM Do"));

//saves text conent to loacl storeage
$('.saveBtn').on('click', function () {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
});


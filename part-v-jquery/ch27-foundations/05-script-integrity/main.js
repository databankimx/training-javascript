$(function () {
    $("#check").on("click", function () {
        $("#status").text("jQuery loaded and the integrity-protected script is running.");
        console.log("jQuery version:", $.fn.jquery);
    });
});

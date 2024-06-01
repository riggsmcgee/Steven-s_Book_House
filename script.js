document.addEventListener("DOMContentLoaded", function() {
    var summaries = document.querySelectorAll(".summary");
    summaries.forEach(function(summaries) {
        summaries.style.display = "none"
    });
});


function toggleSummary(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === " ") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
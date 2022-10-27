// Don't show transparent div
document.querySelector(".transparent-div").style.display = "none";

//Add click event
document.querySelector(".btn.create").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".transparent-div").style.display = "block";

});

//Event listener close sign
document.querySelector(".fa-sharp.fa-solid.fa-xmark").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".transparent-div").style.display = "none";


});
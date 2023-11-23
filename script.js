function lengths() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    results.value = str.length;
}
function repeats() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    custums = prompt("how many times want to repeat....")
    results.value = str.repeat(custums)
}
function lastindexof() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    search = prompt("search....")
    // position = prompt ("position...")
    results.value = str.lastIndexOf(search)
}
function upercase() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    results.value = str.toUpperCase();
}
function lowercases() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    results.value = str.toLowerCase();
}
function replacs() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    remove = prompt("What you want to Remove...");
    replace = prompt("What you want to Replace...");
    results.value = str.replace(remove, replace);
}

function conccat(){
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    merge=prompt("Enter the string.... ")
    results.value = str.concat('', merge);
}
function trims(){
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    results.value = str.trim();
}

function slices(){
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    start=prompt("enter the start")
    end=prompt("enter the end")
    results.value=str.slice(start,end)
}


function split() {
    var str = document.getElementById("input").value;
    var results = document.getElementById("results");
    var ree = prompt("Enter the Split Element");
    results.value = str.split(ree).join('\n');
}

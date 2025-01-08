document.addEventListener("DOMContentLoaded", function() {
    const countrySelect = document.getElementById("countrySelect");


    fetch("destinations.php")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not alr man");
            return response.json();
        })
        .then(() => {
            countries.foreach((country) => {
                const option = document.createElement("option");
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        })
        .catch((err) => console.error("Error fetching countries:", err));
})

function openNav() {
    document.getElementById("JCsidenav").style.width = "205px";
}
function closeNav() {
    document.getElementById("JCsidenav").style.width = "0";
}

function home() {
    location.replace("homepage.html");
}
function destinations() {
    location.replace("lennot.html");
}
function help() {
    location.replace("help.html");
}

function confirm() {
    document.getElementById("confirmflight").style.visibility = "visible";
}
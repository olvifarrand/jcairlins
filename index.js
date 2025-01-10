document.addEventListener("DOMContentLoaded", function() {
    const countrySelect = document.getElementById("countrySelect");


    fetch("destinations.php")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not alr man");
            return response.json();
        })
        .then((countries) => {
            countries.forEach((country) => {
                const option = document.createElement("option");
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        })
        .catch((err) => console.error("Error fetching countries:", err));
})
document.addEventListener("DOMContentLoaded", function() {
    const timeSelect = document.getElementById("timeSelect");


    fetch("time.php")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not alr man");
            return response.json();
        })
        .then((times) => {
            times.forEach((time) => {
                const option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        })
        .catch((err) => console.error("Error fetching times:", err));
})
document.addEventListener("DOMContentLoaded", function() {
    const citySelect = document.getElementById("citySelect");


    fetch("city.php")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not alr man");
            return response.json();
        })
        .then((cities) => {
            cities.forEach((city) => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        })
        .catch((err) => console.error("Error fetching times:", err));
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
    alert("Cool, you did that"); ;
}
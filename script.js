var world_airports

function lookup() {
    clear()
    var item = document.getElementById("input").value
    var item = item.toUpperCase()
    console.log(item)
    console.log(item.length)
    if (item.length === 3) {
        for (airport in world_airports) {
            if (world_airports[airport].iata === item) {
                document.getElementById("icao").innerHTML = world_airports[airport].icao
                document.getElementById("iata").innerHTML = world_airports[airport].iata
                document.getElementById("name").innerHTML = world_airports[airport].name
                document.getElementById("city").innerHTML = world_airports[airport].city
                document.getElementById("state").innerHTML = world_airports[airport].state
                document.getElementById("country").innerHTML = world_airports[airport].country
                document.getElementById("lon").innerHTML = world_airports[airport].lon
                document.getElementById("lat").innerHTML = world_airports[airport].lat
                document.getElementById("tz").innerHTML = world_airports[airport].tz
            }
        }
    } else if (item.length === 4) {
        document.getElementById("icao").innerHTML = world_airports[item].icao
        document.getElementById("iata").innerHTML = world_airports[item].iata
        document.getElementById("name").innerHTML = world_airports[item].name
        document.getElementById("city").innerHTML = world_airports[item].city
        document.getElementById("state").innerHTML = world_airports[item].state
        document.getElementById("country").innerHTML = world_airports[item].country
        document.getElementById("lon").innerHTML = world_airports[item].lon
        document.getElementById("lat").innerHTML = world_airports[item].lat
        document.getElementById("tz").innerHTML = world_airports[item].tz
    }

}


function onload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "world_airports.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            world_airports = JSON.parse(xhr.response)
        }
    }
    xhr.send();
}

function clear() {
    document.getElementById("icao").innerHTML = ""
    document.getElementById("iata").innerHTML = ""
    document.getElementById("name").innerHTML = ""
    document.getElementById("city").innerHTML = ""
    document.getElementById("state").innerHTML = ""
    document.getElementById("country").innerHTML = ""
    document.getElementById("lon").innerHTML = ""
    document.getElementById("lat").innerHTML = ""
    document.getElementById("tz").innerHTML = ""
}
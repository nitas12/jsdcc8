$(document).ready(function() {
    $.get('https://swapi.co/api/planets/', function(data) {
        var planet = ''
        $.each(data.results, function(index, item) {

            planet += '<tr>'
            planet += `<td>${item.name}</td>`
            planet += `<td>${item.rotation_period}</td>`
            planet += `<td>${item.orbital_period}</td>`
            planet += `<td>${item.diameter}</td>`
            planet += `<td>${item.climate}</td>`
            planet += `<td>${item.terrain}</td>`
            planet += `<td>${item.population}</td>`
            planet += `<td>${item.gravity}</td>`
            planet += `</tr>`
        })
        $('#planet').append(planet)
    })

    $.get('https://swapi.co/api/people/', function(data) {
        var people = ''
        $.each(data.results, function(index, item) {
            people += `<tr>`
            people += `<td>${item.name}</td>`
            people += `<td>${item.height}</td>`
            people += `<td>${item.mass}</td>`
            people += `<td>${item.gender}</td>`
            people += `<td>${item.hair_color}</td>`
            people += `<td>${item.skin_color}</td>`
            people += `<td>${item.birth_year}</td>`
            people += `</tr>`
        })
        $('#people').append(people)
    })

    $.get('https://swapi.co/api/films/', function(data) {
        var film = ''
        $.each(data.results, function(index, item) {
            film += `<tr>`
            film += `<td>${item.title}</td>`
            film += `<td>${item.opening_crawl}</td>`
            film += `<td>${item.director}</td>`
            film += `<td>${item.producer}</td>`
            film += `<td>${item.release_date}</td>`
            film += `</tr>`
        })
        $('#film').append(film)
    })

    $.get('https://swapi.co/api/starships/', function(data) {
        var starship = ''
        $.each(data.results, function(index, item) {
            starship += `<tr>`
            starship += `<td>${item.name}</td>`
            starship += `<td>${item.model}</td>`
            starship += `<td>${item.manufacturer}</td>`
            starship += `<td>${item.cost_in_credits}</td>`
            starship += `<td>${item.length}</td>`
            starship += `<td>${item.max_atmosphering_speed}</td>`
            starship += `<td>${item.crew}</td>`
            starship += `<td>${item.passengers}</td>`
            starship += `<td>${item.consumables}</td>`
            starship += `<td>${item.starship_class}</td>`
            starship += `</tr>`
        })
        $('#starship').append(starship)
    })

});
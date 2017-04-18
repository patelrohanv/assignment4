// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
    // Magic!
    console.log('Keepin\'n it clean with an external script!');

})();

function useAPI() {
    var ret = new Array();
    var input = document.forms["mainForm"]["search"].value;

    var xrInterest = new XMLHttpRequest();
    xrInterest.open("GET", "http://www.mattbowytz.com/simple_api.json?data=interests", false);
    xrInterest.send();

    var interests = xrInterest.response;
    var JSONinterests = JSON.parse(interests);

    var interestsArr = JSONinterests["data"];
    var searchInterests = search(input, interestsArr);
    for (var i = 0; i < searchInterests.length; i++) {
        ret.push(searchInterests[i]);
    }

    var xrProgramming = new XMLHttpRequest();
    xrProgramming.open("GET", "http://www.mattbowytz.com/simple_api.json?data=programming", false);
    xrProgramming.send();

    var programming = xrProgramming.response;
    var JSONprogramming = JSON.parse(programming);


    var programmingArr = JSONprogramming["data"];
    var searchProgramming = search(input, programmingArr);
    for (var i = 0; i < searchProgramming.length; i++) {
        ret.push(searchProgramming[i]);
    }

    var xrComics = new XMLHttpRequest();
    xrComics.open("GET", "http://www.mattbowytz.com/simple_api.json?data=comics", false);
    xrComics.send();

    var comics = xrComics.response;
    var JSONcomics = JSON.parse(comics);


    var comicsArr = JSONcomics["data"];
    var searchComics = search(input, comicsArr);
    for (var i = 0; i < searchComics.length; i++) {
        ret.push(searchComics[i]);
    }
    //console.log(ret);
    if (input == "") {
        document.getElementById("results").innerHTML = "";
    } else {
        document.getElementById("results").innerHTML = "";
        for (var i = 0; i < ret.length; i++) {
            var g = "<a href=\"https://www.google.com/#q=" + ret[i] + "\"" + ">" + ret[i] + "</a>";
            console.log(g);
            document.getElementById("results").innerHTML += g;
            document.getElementById("results").innerHTML += "<br>";
        }
    }
}

function search(s, arr) {
    var ret = new Array();

    for (var i = 0; i < arr.length; i++) {
        var sub = arr[i].substr(0, s.length)
        var areEqual = s.toUpperCase() === sub.toUpperCase()
        if (areEqual) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
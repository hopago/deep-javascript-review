function Person(name, blog) {
    this.name = name;
    this.blog = blog;
}

var unikys = new Person("unikys", "http://unikys.tistory.com");

console.log(unikys instanceof Person); // true
console.log(unikys instanceof Object); // true
console.log(typeof unikys) // "object"

function getPersonName(person) {
    return person.name;
}

console.log(typeof getPersonName); // "function"

var color1 = new String("zinc");
var color2 = "zinc"
var color3 = String("zinc");

console.log(color1 === color2); // false
console.log(color1.constructor === String) // true
console.log(color2.constructor === String) // true
console.log(color3.constructor === String) // true

console.log(color1 instanceof String) // true
console.log(color2 instanceof String) // false
console.log(color3 instanceof String) // false

console.clear();
var color1ToString = color1.toString();
console.log(color1ToString instanceof String); // false

(function () {
    var window = {
        popup: function () {
            window.open("http://unikys.tistory.com")
        },
        alert: function () {
            this.alert("I'm not the true alert")
        },
        open: function (url) {
            this.alert("I know where you are going..." + url)
        }
    }
});

(function () {
    var subjects = ["1st subject", "2nd subject", "3rd subject"];
    for (var i = 0; i < subjects.length; i++) {
        var el = document.getElementById("subject" + i);
        el.innerHTML = el.value = subjects[i]; // el.innerHTML은 el.value의 할당값을 참조하게 되는가?
        el.addEventListener("click", function () {
            alert(this.value + "pressed!"); // el.value + pressed???
        })
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://unkys.tistory.com/list/");
    xhr.onload = function () {
        var contents = JSON.parse(xhr.responseText);
        for (var i = 0; i < contents.length; i++) {
            var el = document.getElementById("content" + i);
            el.innerHTML = contents[i]
        }
    }
})

    (function () {
        var subjects = ["1st subject", "2nd subject", "3rd subject"], el, i, xhr;
        for (i = 0; i < subjects.length; i++) {
            (function (index) {
                el = document.getElementById("subject" + index);
                el.innerHTML = el.value = subjects[index];
                el.addEventListener("click", function () {
                    alert(this.value + "pressed!");
                })
            })(i);
        }
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://unkys.tistory.com/list/");
        xhr.onload = function () {
            var contents = JSON.parse(xhr.responseText);
            for (i = 0; i < contents.length; i++) {
                el = document.getElementById("content" + i);
                el.innerHTML = contents[i]
            }
        }
    })();

<body>
    <div id="idvMouseOver">Mouse over</div>
    <div id="divFloatingContent">Floating Content</div>
</body>

(function () {
    var divMouseOver = document.getElementById("divMouseOver"),
        divFloatingContent = document.getElementById("divFloatingContent");
    divMouseOver.onmouseover = function () {
        var xhr = new XMLHttpRequest(),
            divMouseOverStyle = divMouseOver.style;
        divMouseOverStyle.backgroundColor = "#FF0000";
        divMouseOverStyle.color = "white";
        xhr.open("GET", "http://myserver.com/contents");
        xhr.onload = function () {
            var localDivFloatingContent = divFloatingContent;
            localDivFloatingContent.innerHTML = xhr.responseText;
            localDivFloatingContent.style.display = "block"
        }
    }
})()
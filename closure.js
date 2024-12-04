<>
    <button id="btnToggle">Toggle Button</button>
    <div id="divPending">Pending</div>
</>

(function () {
    var pendingInterval = false,
        div = document.getElementById("divPending");
        btn = document.getElementById("btnToggle");

    function startPending() {
        if (div.innerHTML.length > 13) {
            div.innerHTML = "Pending"
        }
        div.innerHTML += ".";
    }

    btn.addEventListener("click", function () {
        if (!pendingInterval) {
            pendingInterval = setInterval(startPending, 500);
        } else {
            clearInterval(pendingInterval);
            pendingInterval = false;
        }
    })
})();
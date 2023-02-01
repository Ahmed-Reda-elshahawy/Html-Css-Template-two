let el = document.querySelector(".icon");
let ul = document.getElementById("UL");
let li = document.querySelectorAll(".link");

// let lis = document.getElementsByClassName("link");

el.addEventListener("click", () => {
    if (ul.style.display == "none") {
        ul.style.cssText =
            `display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;left: 0;
            width: 100%;
            background-color: black;
            opacity: 0.5;`;
        for (i = 0; i < li.length; i++) {
            li[i].style.cssText = `padding:10px`;
        }
    }
    else {
        ul.style.display = "none";
    }
})
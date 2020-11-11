var count = document.getElementById("count"),

    textArea = document.getElementById("text"),

    maxlength = textArea.getAttribute("maxlength");

textArea.oninput =  function () {

    count.innerHTML = maxlength - this.value.length ;

    if (count.innerHTML == 0 ) {

        count.classList.add('zero');
    }
    else{
        count.classList.remove("zero");
    }
}
function searchSelectBox() {
    const select = document.querySelector(".searchbox__select--select-tag");
    select.addEventListener("change", (e) => {

        // setting content of p tag of select box in input
        const p = document.querySelector(".select__top--txt");
        for (let key in e.target) {
            if (e.target[key].selected === true) {
                p.innerText = e.target[key].innerText;
                break;
            }
        }
        const frame = document.querySelector(".searchbox__select--frame");
        const top = document.querySelector(".searchbox__select--top");

        frame.style.minWidth = `${top.offsetWidth}px`;
        select.style.minWidth = `${top.offsetWidth}px`;

        const input = document.querySelector(".searchbox__input");
        input.focus();
    });
}
searchSelectBox();

function shadowsOfSearchBox() {
    const input = document.querySelector(".searchbox__input");
    const searchbox = document.querySelector(".nav1__searchbox");
    input.addEventListener("focus", (e) => {        
        searchbox.classList.add("nav1__searchbox--active");
    });

    input.addEventListener("blur",(e)=>{
        searchbox.classList.remove("nav1__searchbox--active");
    });
    const select = document.querySelector(".searchbox__select--select-tag");
    const frame = document.querySelector(".searchbox__select--frame");
    select.addEventListener("focus",(e)=>{
        frame.classList.add("searchbox__select--active");
    });
    select.addEventListener("blur",(e)=>{
        frame.classList.remove("searchbox__select--active");
    });
}

shadowsOfSearchBox();
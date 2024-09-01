function heroControls() {
    const que = Array.from(document.querySelectorAll(".hero__slides"));
    const leftbtn = document.querySelector(".hero__btn--left");
    const rightbtn = document.querySelector(".hero__btn--right");

    que[que.length - 1].classList.add("pre");
    que[0].classList.add("cent");
    que[1].classList.add("next");

    leftbtn.addEventListener("click",right)
    rightbtn.addEventListener("click",left)

    function left() {

        que[que.length - 1].classList.remove("pre");

        que[0].classList.add("left");
        que[1].classList.add("left");
        setTimeout(() => {
            que[0].classList.remove("cent");    
            que[1].classList.remove("next");

            que.push(que.shift());

            que[que.length - 1].classList.add("pre");
            que[que.length - 1].classList.remove("left");

            que[0].classList.add("cent");
            que[0].classList.remove("left");

            que[1].classList.add("next");

        }, 50);

    }
    
    function right() {
        que[1].classList.remove("next");

        que[que.length - 1].classList.add("right");
        que[0].classList.add("right");
        setTimeout(() => {
            que[0].classList.remove("cent");
            que[que.length - 1].classList.remove("pre");

            que.unshift(que.pop());
            console.log(que)
            que[1].classList.add("next");
            que[1].classList.remove("right");

            que[0].classList.add("cent");
            que[0].classList.remove("right");

            que[que.length - 1].classList.add("pre");

        }, 50);
    }
}

heroControls();

"use strict";

const plates = document.querySelectorAll(".content__plate");

plates.forEach(e => {
    e.addEventListener("click", expandAnswer);
})

function expandAnswer(e) {
    const currSvg = e.currentTarget.querySelector(".content__svg");
    const currAns = e.currentTarget.querySelector(".content__answer-container");
    const currHead = e.currentTarget.querySelector(".content__question-header");

    if (e.currentTarget.classList.contains("content__plate--active")) {
        e.currentTarget.classList.remove("content__plate--active");
        currSvg.classList.remove("content__svg--active");
        currAns.classList.remove("content__answer-container--active");
        currHead.classList.remove("content__question-header--active");

        return;
    }

    activate();

    async function activate() {
        await new Promise((resolve, _) => {
            plates.forEach(e => {
                e.classList.remove("content__plate--active");
                e.querySelector(".content__svg").classList.remove("content__svg--active");
                e.querySelector(".content__answer-container").classList.remove("content__answer-container--active");
                e.querySelector(".content__question-header").classList.remove("content__question-header--active");
            })

            resolve("Success");
        })

        e.currentTarget.classList.toggle("content__plate--active");
        currSvg.classList.toggle("content__svg--active");
        currAns.classList.toggle("content__answer-container--active");
        currHead.classList.toggle("content__question-header--active");
    }
}
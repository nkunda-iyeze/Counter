// set initial account
let count = 0;

// select values and buttons

const value = document.querySelector(`#value`);
const btns = document.querySelectorAll(`.btn`);
// console.log(btns)

btns.forEach(function (btn) {
    btn.addEventListener(`click`, function (e) {
        // console.log(value)
        // the styles variable containes 
        const styles = e.currentTarget.classList;
        if (styles.contains(`decrease`)) {
            count--;
        } else if (styles.contains(`reset`)) {
            count = 0;
        } else {
            count++;
        }
        if (count > 0) {
            value.style.color = `green`
        } else if (count < 0) {
            value.style.color = `red`;
        } else {
            value.style.color = `black`;
        }
        value.textContent = count;
        // changeing colors of the text


    })
})
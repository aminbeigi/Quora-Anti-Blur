// globals
const HREF = 'https://qsbr.fs.quoracdn.net/-4-main.css-27-a63fda2be3e297f3.css';
const elements = document.querySelectorAll("link[href='" + HREF + "']");

// funcitons
const removeBlur = async () => {
    elements.forEach((e) => {
        e.remove();
    });
}

removeBlur();
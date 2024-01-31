let result = document.getElementById("res");
const reset = () => (result.innerHTML = "");
const input = (item) => (result.innerHTML += item);

function calculate() {
    let code = result.innerHTML;
    if (!code) return;
    const matches = code.match(/[0-1]+/g);
    if (matches) {
    for (const match of matches)
      code = code.replace(match, parseInt(Number(match), 2));
    }
    try {
    eval(`code=(${code})`);
    } catch (e) {
    console.error(e);
    }
    result.innerHTML = Math.round(code).toString(2);
}

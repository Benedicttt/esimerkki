let jsonData;

async function getData() {
    console.log("getData()")

    await fetch('https://api.github.com/users/benedicttt')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
        });
}

async function dataGithub() {
    console.log("dataGithub()")

    await new Promise(r => setTimeout(r, 1000));

    for (let key in jsonData) {
        let value = jsonData[key];
        let data = document.getElementById("data")

        data.innerHTML += `<p > {${key }: "${value}"}, </p>`;
    }
}
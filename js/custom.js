//fetch("jsonDat.json")
// .then(res=>console.log(res.json()))
// .then(data=> console.log(data))

const dataFromFile = "http://localhost:63342/src/js/jsonDat.json"

fetch(dataFromFile)
    .then(res => res.json())
    .then(data => {

        const barCanvas = document.getElementById("barCanvas");
        const barChart = new Chart(barCanvas, {
            type: "bar", data: {
                labels: data.date_population.map(element => element.date), datasets: [{
                    data: data.date_population.map(element => element.population), backgroundColor: ["green","white", "red"]
                }]
            }, options: {
                scales: {
                    y: {
                        suggestedMax: 900
                    }
                }
            }
        })

    })



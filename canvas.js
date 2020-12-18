// Randomly generate numbers in an array of length i < X, put it nav bar
function createArray(N) {
    for (var numbers = [], i = 0; i < N; ++i) numbers[i] = i;
    return numbers;
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1) + 1);
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function createLabels(N) {
    let labels = [];
    for (let i = 0; i < data.length + 1; i++)
    {
        labels.push(i);
    }
    return labels;
}

// Set the graph data to the numbers
inc_array = createArray(100);
numbers = shuffle(inc_array);
data = numbers;

var labels = createLabels(100);



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [],
        }]
    },
    options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    responsive: true
                }
            }],
            xAxes: [{
                display: false,
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                gridLines: {
                    display: false,
                },
            }],
        },
        animation: {
            duration: 0,
        }
    }
});

// Configure height and width of canvas
ctx.canvas.height = 1000;
ctx.canvas.width = 2000;

for (let i = 0; i < data.length; i++)
{
    // Populate the graph with initial colour
    myChart.data.datasets[0].backgroundColor.push("#ff6384");
}
myChart.update();
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showAlgorithms() {
    document.getElementById("algorithm_content").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.algorithm_btn')) {
var myDropdown = document.getElementById("algorithm_content");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
    }
}

function setAlgorithm(alg) {
    if (alg == 'bubbleSort')
    {
        // Change the name in the algorithms menu
        alg_name = document.getElementById("alg_dropdown")
        alg_name.innerHTML = "Bubble Sort &#9662"

        // set the id of the HTML to the algorithm
        let set_alg = document.getElementsByClassName("algorithm");
        set_alg.id = ('bubbleSort');
    }
    else if (alg == 'Quicksort')
    {
        let alg_name = document.getElementById("alg_dropdown")
        alg_name.innerHTML = "Quicksort (Lomuto) &#9662"

        let set_alg = document.getElementsByClassName("algorithm");
        set_alg.id = ('Quicksort');
    }
    else if (alg == 'cocktailShaker')
    {
        let alg_name = document.getElementById("alg_dropdown")
        alg_name.innerHTML = "Cocktail Shaker Sort &#9662"

        let set_alg = document.getElementsByClassName("algorithm");
        set_alg.id = ('cocktailShaker');
    }
     
}

function sort() {
    let selectedAlgorithm = document.getElementsByClassName('algorithm').id;
    if (selectedAlgorithm == 'bubbleSort')
    {
        data = bubble_sort(data);
    }
    else if (selectedAlgorithm == 'cocktailShaker')
    {
        data = cocktail_sort(data);
    }
}


/*** SLIDER STUFF ***/
function sliderVal(val) {
    // create new shuffled array depending on val
    let new_array = createArray(val);
    let new_shuffled = shuffle(new_array);
    // update working data var for sort algs
    data = new_shuffled;
    // update visual data in chart
    myChart.data.datasets[0].data = new_shuffled;
    myChart.data.labels = createLabels(val); 
    myChart.update();
}

/*** 'Generate New Data' buttton ***/
function newData() {
    // fetch the current size and generate new data with it
    let current_size = myChart.data.datasets[0].data.length;
    let new_array = createArray(current_size);
    let new_shuffled = shuffle(new_array);

    // put back into myChart
    myChart.data.datasets[0].data = new_shuffled;
    myChart.update();
}
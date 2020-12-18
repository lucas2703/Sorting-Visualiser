/*** SLEEP FUNCTION JAVASCRIPT ALTERNATIVE ***/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*****************************************************/
/*              SORTING ALGORITHMS                   */
/*****************************************************/

/*** Bubble sort (optimised) ***/ 
async function bubble_sort(arr) {
    let n = arr.length;
    while (n > 0)
    {
        console.log(arr);
        new_n = 0;

        for (i = 1; i < n; i++) 
        {
            // Visually compare the data
            myChart.data.datasets[0].backgroundColor[i - 1] = '#008a27';
            myChart.data.datasets[0].backgroundColor[i] = '#00c738';
            myChart.update();

            if (arr[i - 1] > arr[i]) 
            {
                // If prev value > than current val, swap them
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                // Save location of the last swap = new maximum
                new_n = i;
            }

            await sleep(50);

            // Set them back
            myChart.data.datasets[0].backgroundColor[i - 1] = '#ff6384';
            myChart.data.datasets[0].backgroundColor[i] = '#ff6384';
            myChart.update();

        }

        // Return to that max value of the swap for time efficiency
        n = new_n;
    }
    return(arr);
}

//console.log(bubble_sort(numbers));


/*** Cocktail Shaker Sort ***/
async function cocktail_sort(arr) {
    var swapped = true;
    var forward_n = arr.length;
    let forward_new_n = arr.length;
    let backward_n = 0;
    let backward_new_n = 0;
    while (true)
    {
        swapped = false;

        // Forward iteration
        for (let i = backward_n; i < forward_n - 1; i++)
        {
            // Visually compare the data
            myChart.data.datasets[0].backgroundColor[i + 1] = '#008a27';
            myChart.data.datasets[0].backgroundColor[i] = '#00c738';
            myChart.update();

            if (arr[i] > arr[i + 1])
            {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                if (forward_new_n != 0)
                {                    
                    forward_new_n = i + 1;
                }
            }

            await sleep(10);

            // Set them back
            myChart.data.datasets[0].backgroundColor[i + 1] = '#ff6384';
            myChart.data.datasets[0].backgroundColor[i] = '#ff6384';
            myChart.update();
        }

        forward_n = forward_new_n;

        // If no changes, then break
        if (!swapped)
        {
            console.log("breaks");
            return arr;
        }
    
        swapped = false;
    
        // Backward iteration
        for (let i = forward_n; i > backward_n; i--)
        { 
            // Visually compare the data
            myChart.data.datasets[0].backgroundColor[i + 1] = '#008a27';
            myChart.data.datasets[0].backgroundColor[i] = '#00c738';
            myChart.update();

            if (arr[i] > arr[i + 1])
            {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;                
                backward_new_n = i;
            }

            await sleep(10);

            // Set them back
            myChart.data.datasets[0].backgroundColor[i + 1] = '#ff6384';
            myChart.data.datasets[0].backgroundColor[i] = '#ff6384';
            myChart.update();
        }

        backward_n = backward_new_n;
    }
}

//console.log(numbers);
//document.write(numbers);
//document.write("<br />");
//console.log(cocktail_sort(numbers));
//document.write(numbers)

/***  Quicksort (Lomuto partition scheme) ***/
function quicksort(arr, lo, hi) {
    if (lo < hi)
    {
        // partition() reorders arr soo all elements before the 'pivot' come before & after
        let p = qs_partition(arr, lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
    return arr;
}

// Partition function for the quicksort 
function qs_partition(arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo;
    for (let j = lo; j < hi; j++)
    {
        if (arr[j] < pivot)
        {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
        }
    }

    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    return i;
}

//console.log(quicksort(numbers, 0, (numbers.length - 1)));
const content = document.getElementById("content")


const apiUrl = 'https://www3.septa.org/api/NextToArrive/index.php?req1=Temple%20University&req2=Glenside&req3=3';

// example API call by FreeCodeCamp.org
fetch(apiUrl)
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // Display data in an HTML element
    console.log(JSON.stringify(data, null, 2))
    content.textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
    console.error('Error:', error);
});

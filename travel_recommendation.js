document.getElementById('search').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission
            const query = document.querySelector('input[type="text"]').value.toLowerCase();
            fetch('travel_recommendation_api.json') // Replace with your JSON file path
                .then(response => response.json())
                .then(data => {
                    const results = data.filter(item => item.name.toLowerCase().includes(query));
                    displayResults(results);
                })
                .catch(error => console.error('Error fetching the JSON data:', error));
        });

        function displayResults(result) {
            const resultsDiv = document.getElementById('result');
            resultsDiv.innerHTML = ''; // Clear previous results
            if (result.length === 0) {
                resultsDiv.innerHTML = '<p>No results found</p>';
            } else {
                result.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = <img src="${item.image}"></img>;
                                      <h2>${item.name}</h2>;
                
                    resultsDiv.appendChild(div);
                });
            }
        }
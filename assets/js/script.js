let books = [];

fetch('https://raw.githubusercontent.com/username/repository/branch/books.json')
    .then(response => response.json())
    .then(data => {
        books = data; // Store the data in the higher scope variable
        console.log('Books have been loaded:', books);
    })
    .catch(error => console.error('Error loading the JSON data:', error));

// Note: Accessing 'books' here would be premature, it won't have the data yet.

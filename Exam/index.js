async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const List = document.getElementById('list_of_album');
        
        // Clear the list
        List.innerHTML = '';
        
        const data = await response.json();
        const loading = document.getElementById('Loading');
        
        // Hide loading text after data is fetched
        if (loading) {
            loading.style.display = 'none';
        }
        
        data.forEach(element => {
            if (element.id >= 15) {
                const li = document.createElement("li");
                li.textContent = element.title;
                List.appendChild(li);  
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } 
}

// Make sure the DOM is fully loaded before running
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});
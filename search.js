const searchBox = document.querySelector(".search-input");
        const suggestions= document.getElementById("suggestions");
        searchBox.addEventListener("input", function(){
            suggestions.innerHTML = `
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            <li>Result for "${searchBox.value}"</li>
            `;
        });
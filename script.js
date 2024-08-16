function searchWikipedia() {
    const query = document.getElementById('query').value;
const url = `https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;

fetch(url)
.then(response => response.json())
.then(data => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';






    data.query.search.array.forEach(result => {
        const resultDiv =  document.createElement('div');
        resultDiv.classname = 'result';
    



        const title = document.createElement('a');
        title.innerText = result.title;







        const snippet = document.createElement('p');
        snippet.innerText = result.snippet + '...';






        const link = document.createElement('a');
        link.href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(result.title)}`;
        link.target = '_blank';
        link.innerText = 'Leia mais';





        resultDiv.appendChild(title);
        resultDiv.appendChild(snippet);
        resultDiv.appendChild(link);




        resultsDiv.appendChild(resultDiv);
    });
})
.catch(error => console.error('Erro ao buscar na Wikipedia:', error));
}

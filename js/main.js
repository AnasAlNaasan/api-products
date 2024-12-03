function getAPI() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var x = this.responseText;
            var boxUpdate = '';
            var apiProducts = JSON.parse(x);
            var apiJson = apiProducts.products;

            for (i = 0; i < apiJson.length; i++) {
                let box = `
                <div class='col-md-4'>
                    <img src='${apiJson[i].images}' class='w-100'>
                    <h3>${apiJson[i].id}</h3>
                    <h5>${apiJson[i].title}</h5>
                </div>
                `;
                boxUpdate = boxUpdate + box;
            }

            document.querySelector('.test').innerHTML = boxUpdate;
        }
    };
    xhttp.open("GET", "https://dummyjson.com/products", true);
    xhttp.send();
}

getAPI();
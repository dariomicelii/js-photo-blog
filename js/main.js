const cardsRow = document.getElementById("cards-row");
const layoverEl = document.getElementById("layover");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((dato) => {
      console.log(dato.url);
      cardsRow.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card m-5" style="width: 18rem" id="card-element">
            <img src="${dato.url}"
                class="card-img-top p-3"
                alt="..."/>
            <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
      </div>`;
    });
    const cardEl = document.querySelectorAll("#cards-row.card");

    cardEl.forEach((card) => {
      cardEl.addEventListener("click", function () {
        alert("Hai cliccato la card");
      });
    });
  });

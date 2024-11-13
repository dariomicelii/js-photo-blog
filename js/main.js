const cardsRow = document.getElementById("cards-row");
const layoverEl = document.getElementById("layover");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((dato) => {
      console.log(dato.url);
      cardsRow.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" id="colonna">
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

    const cardEl = document.querySelectorAll("#cards-row .card");
    const layoverImg = document.querySelector("#layover img");

    cardEl.forEach((card) => {
      card.addEventListener("click", function () {
        const current_img = this.getElementsByTagName("img")[0].src;
        const layoverImg = document.querySelector("#layover img");
        layoverImg.src = current_img;
        layoverEl.classList.remove("d-none");
      });
    });

    const buttonChiusura = document.getElementById("button-chiusura");

    buttonChiusura.addEventListener("click", () => {
      layoverEl.classList.add("d-none");
    });
  });

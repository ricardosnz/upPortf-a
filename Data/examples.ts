
const url = 'https://amazon-avo.vercel.app/api/avo';

function fetchData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //creamos el fragment
      let fragment = document.createDocumentFragment();

      data.data.forEach((item) => {
        let image = document.createElement('img');

        let title = document.createElement('h2');

        let price = document.createElement('span');

        const container = document.createElement('div');
        container.append(image, title, price);
        //agregamos los nodos al fragment y no al DOM directamente
        fragment.appendChild(container);
      });
      //solo renderizamos una sola vez el DOM
      document.body.append(fragment);
    });
}

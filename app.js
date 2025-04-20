const products = [
  {
    name: 'Monopoly Banca Virtual',
    price: 29.99,
    age: 8,
    seller: 'Hasbro',
    image: 'https://juguettos.com/3485234-thickbox_default/hasbro-gaming-monopoly-banca-virtual-juego-de-mesa.jpg'
  },
  {
    name: 'Puzzle 500 Piezas Dragon Ball',
    price: 9.99,
    age: 12,
    seller: 'Educa',
    image: 'https://juguettos.com/3471563-thickbox_default/puzzle-500-piezas-dragon-ball.jpg'
    },
    {
    name: 'LEGO Technic Lamborghini Huracán',
    price: 52.99,
    age: 10,
    seller: 'LEGO',
    image: 'https://juguettos.com/3477910-thickbox_default/lego-technic-lamborghini-huracan-tecnica-42161.jpg'
    },
    {
    name: 'Hot Wheels City Desafío del T-Rex',
    price: 34.99,
    age: 5,
    seller: 'HOT WHEELS',
    image: 'https://juguettos.com/3445775-thickbox_default/hot-wheels-city-desafio-del-t-rex.jpg'
    },
    {
    name: 'Playmovil Sports & Action Campo de Fútbol',
    price: 44.99,
    age: 6,
    seller: 'Playmovil',
    image: 'https://juguettos.com/3480478-large_default/playmobil-sports-action-campo-de-futbol-71120.jpg'
    },
    {
    name: 'Adrenalyn La Liga 2024-205 Pocket Box Platinum',
    price: 7.95,
    age: 7,
    seller: 'Adrenalyn',
    image: 'https://juguettos.com/3462038-thickbox_default/adrenalyn-la-liga-2024-205-pocket-box-platinum-varios-modelos.jpg'
    },
    {
    name: 'Pokémon Pack de Combate',
    price: 12.99,
    age: 8,
    seller: 'Pokémon',
    image: 'https://juguettos.com/3471869-thickbox_default/A0312539.jpg'
    },
    {
    name: 'Super Mario Figura Donkey Kong 15cm',
    price: 24.99,
    age: 4,
    seller: 'NINTENDO',
    image: 'https://juguettos.com/3483115-large_default/super-mario-figura-donkey-kong-15-cm.jpg'
    },
    {
    name: 'Batman Batmóvil Metal de la Película de 1989 y Figura Batman',
    price: 14.99, 
    age: 10,
    seller: 'juguettos',
    image: 'https://juguettos.com/3487355-thickbox_default/batman-batmovil-metal-1989-y-batman.jpg'
    },
    {
    name: 'Dinosaurio Gigante',
    price: 34.99,
    age: 6,
    seller: 'juguettos',
    image: 'https://juguettos.com/3203476-thickbox_default/dinosaurio-gigante.jpg'
    },
    {
      name: 'Puzzle Harry Potter 1000 Piezas',
      price: 19.99,
      age: 12,
      seller: 'Educa',
      image: 'https://juguettos.com/3187991-thickbox_default/puzzle-harry-potter-1000-piezas.jpg'
    },
    {
      name: 'Playmobil Casa de Muñecas',
      price: 89.99,
      age: 4,
      seller: 'Playmobil',
      image: 'https://juguettos.com/3235100-thickbox_default/playmobil-casa-de-munecas.jpg'
    },
    {
      name: 'Hot Wheels Circuito Mega Loop',
      price: 49.99,
      age: 6,
      seller: 'Hot Wheels',
      image: 'https://juguettos.com/3294459-thickbox_default/hot-wheels-circuito-mega-loop.jpg'
    },
    {
      name: 'Barbie Dreamhouse Aventura',
      price: 199.99,
      age: 5,
      seller: 'Mattel',
      image: 'https://juguettos.com/3275988-thickbox_default/barbie-dreamhouse-aventura.jpg'
    },
    {
      name: 'LEGO Star Wars AT-AT',
      price: 159.99,
      age: 10,
      seller: 'LEGO',
      image: 'https://juguettos.com/3329817-thickbox_default/lego-star-wars-at-at.jpg'
    },
    {
      name: 'Pelota de Baloncesto Spalding',
      price: 25.99,
      age: 7,
      seller: 'Spalding',
      image: 'https://juguettos.com/3182467-thickbox_default/pelota-baloncesto-spalding.jpg'
    },
    {
      name: 'Tren Eléctrico de Madera',
      price: 44.99,
      age: 3,
      seller: 'Brio',
      image: 'https://juguettos.com/3218485-thickbox_default/tren-electrico-de-madera.jpg'
    },
    {
      name: 'Nerf Ultra Blaster X',
      price: 69.99,
      age: 8,
      seller: 'Hasbro',
      image: 'https://juguettos.com/3301017-thickbox_default/nerf-ultra-blaster-x.jpg'
    },
    {
      name: 'Robot Interactivo Z6',
      price: 59.99,
      age: 6,
      seller: 'Clementoni',
      image: 'https://juguettos.com/3256473-thickbox_default/robot-interactivo-z6.jpg'
    },
    {
      name: 'Coche Radiocontrol 4x4 Extremo',
      price: 129.99,
      age: 8,
      seller: 'Ninco',
      image: 'https://juguettos.com/3209871-thickbox_default/coche-radiocontrol-4x4-extremo.jpg'
    },
    {
      name: 'Castillo Medieval de Caballeros',
      price: 74.99,
      age: 5,
      seller: 'Playmobil',
      image: 'https://juguettos.com/3285217-thickbox_default/castillo-medieval-de-caballeros.jpg'
    },
    {
      name: 'Puzzle 3D Torre Eiffel',
      price: 29.99,
      age: 10,
      seller: 'Ravensburger',
      image: 'https://juguettos.com/3314987-thickbox_default/puzzle-3d-torre-eiffel.jpg'
    },
    {
      name: 'Monopoly Clásico',
      price: 34.99,
      age: 8,
      seller: 'Hasbro',
      image: 'https://juguettos.com/3291127-thickbox_default/monopoly-clasico.jpg'
    },
    {
      name: 'Patinete Plegable Infantil',
      price: 49.99,
      age: 5,
      seller: 'Decathlon',
      image: 'https://juguettos.com/3334479-thickbox_default/patinete-plegable-infantil.jpg'
    }
];

const recorrerArray = () => {
  const container = document.querySelector('.main-content');
  products.forEach(product => {
    const card = document.createElement('div');
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "250px";
    card.style.height = "430px";
    card.style.textAlign = "center";
    card.style.backgroundColor = "#f9f9f9";
    card.classList.add('producto');
    card.dataset.seller = product.seller.toLowerCase();

    const image = document.createElement("img");
    image.src = product.image;
    image.style.width = "10rem";
    image.style.width = "10rem";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Precio: ${product.price}€`;

    const age = document.createElement("p");
    age.textContent = `Edad recomendada: ${product.age}+`;

    const seller = document.createElement("p");
    seller.textContent = `Vendedor: ${product.seller}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(age);
    card.appendChild(seller);
    container.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  recorrerArray();
});

const abrirfiltros = () => {
  const spawnButton = document.createElement('button');
  spawnButton.textContent = 'FILTROS';
  spawnButton.style.fontSize = "1rem";
  spawnButton.style.backgroundColor = '#4ccc';
  spawnButton.style.color = 'white';
  spawnButton.style.padding = '10px 20px'; 
  spawnButton.style.border = 'none';
  spawnButton.style.borderRadius = '5px';
  spawnButton.style.fontFamily = 'Bubblegum Sans';

  const segundoLi = document.querySelector('#barra-nav-list li:nth-child(2)');
  if (segundoLi) {
    segundoLi.appendChild(spawnButton);
  }

  spawnButton.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar'); 
    if (sidebar) {
      sidebar.classList.toggle('visible'); 
    }
  });
  spawnButton.addEventListener('click', () => {
    const filterOn = document.querySelector('.main-content'); 
    if (filterOn) {
      filterOn.classList.toggle('reduced'); 
    }
  });
};
abrirfiltros();


document.getElementById('search').addEventListener('input', function() {
  const filtro = this.value.toLowerCase();
  const productos = document.querySelectorAll('.producto');

  productos.forEach(producto => {
      const texto = producto.textContent.toLowerCase();
      if (texto.includes(filtro)) {
          producto.style.display = '';
      } else {
          producto.style.display = 'none';
      }
  });
});






//filtros--------------------------------------------------------------------------------------------------


let filtroPrecio = parseFloat(document.getElementById('slider-precio').value);
let filtroEdad = parseInt(document.getElementById('slider-edad').value);
let filtroSellers = [];

function aplicarFiltros() {
  const productos = document.querySelectorAll('.producto');
  
  productos.forEach(producto => {
    const precio = parseFloat(producto.dataset.price);
    const edad = parseInt(producto.dataset.age);
    const seller = producto.dataset.seller.toLowerCase();
    const cumplePrecio = precio <= filtroPrecio;
    const cumpleEdad = edad <= filtroEdad;
    const cumpleSeller = filtroSellers.length === 0 || filtroSellers.includes(seller);

    if (cumplePrecio && cumpleEdad && cumpleSeller) {
      producto.style.display = '';
    } else {
      producto.style.display = 'none';
    }
  });
}



const slider = document.getElementById('slider-precio');
const valorPrecio = document.getElementById('valor-precio');

slider.addEventListener('input', () => {
  valorPrecio.textContent = `${slider.value} €`;
  filtrarPorPrecio(slider.value);
});
const filtrarPorPrecio = (maxPrice) => {
  const productos = document.querySelectorAll('.producto');
  productos.forEach((producto, index) => {
    if (products[index].price <= maxPrice) {
      producto.style.display = '';
    } else {
      producto.style.display = 'none';
    }
  });
};



const slider2 = document.getElementById('slider-edad');
const valorEdad = document.getElementById('valor-edad');

slider2.addEventListener('input', () => {
  valorEdad.textContent = `${slider2.value} +`;
  filtrarPorEdad(slider2.value);
});
const filtrarPorEdad = (maxEdad) => {
  const productos = document.querySelectorAll('.producto');
  productos.forEach((producto, index) => {
    if (products[index].age <= maxEdad) {
      producto.style.display = '';
    } else {
      producto.style.display = 'none';
    }
  });
};


const sellerCheckboxes = document.querySelectorAll('#filtro-vendedor input[type="checkbox"]');
const cachedCheckboxes = Array.from(sellerCheckboxes);
cachedCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedSellers = cachedCheckboxes
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    const productElements = document.querySelectorAll('.producto');
    productElements.forEach(productElement => {
      const vendedor = productElement.dataset.seller;
      if (selectedSellers.length === 0 || selectedSellers.includes(vendedor)) {
        productElement.style.display = 'block'; 
      } else {
        productElement.style.display = 'none';
      }
    });
  });
});

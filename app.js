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
    seller: 'Hot Wheels',
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
    seller: 'Juguettos',
    image: 'https://juguettos.com/3462038-thickbox_default/adrenalyn-la-liga-2024-205-pocket-box-platinum-varios-modelos.jpg'
    },
    {
    name: 'Pokémon Pack de Combate',
    price: 12.99,
    age: 8,
    seller: 'NINTENDO',
    image: 'https://http2.mlstatic.com/D_NQ_NP_604288-MLA78075040540_082024-O.webp'
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
    seller: 'Juguettos',
    image: 'https://juguettos.com/3487355-thickbox_default/batman-batmovil-metal-1989-y-batman.jpg'
    },
    {
    name: 'Dinosaurio Gigante',
    price: 34.99,
    age: 6,
    seller: 'Juguettos',
    image: 'https://juguettos.com/3203476-thickbox_default/dinosaurio-gigante.jpg'
    },
    {
      name: 'Puzzle Harry Potter 1000 Piezas',
      price: 19.99,
      age: 12,
      seller: 'Educa',
      image: 'https://th.bing.com/th/id/OIP.byA9conICieWQyWgeGqBAgHaGb?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Playmobil Casa de Muñecas',
      price: 89.99,
      age: 4,
      seller: 'Playmobil',
      image: 'https://cdn.idealo.com/folder/Product/6556/7/6556794/s11_produktbild_max/playmobil-dollhouse-casa-de-munecas-70205.jpg'
    },
    {
      name: 'Hot Wheels Circuito Mega Loop',
      price: 49.99,
      age: 5,
      seller: 'Hot Wheels',
      image: 'https://th.bing.com/th/id/OIP.bJnCaC649_Sjb4Uif8X5-QHaE6?rs=1&pid=ImgDetMain'
    },
    {
      name: 'LEGO NINJAGO Ninja Dojo Templo Clásico',
      price: 90.93,
      age: 8,
      seller: 'LEGO',
      image: 'https://th.bing.com/th/id/OIP.ZV2MksHdSMP2FpAy17BJUQHaGx?rs=1&pid=ImgDetMain'
    },
    {
      name: 'LEGO Star Wars AT-AT',
      price: 159.99,
      age: 12,
      seller: 'LEGO',
      image: 'https://m.media-amazon.com/images/I/61VVkd21IYL._AC_.jpg'
    },
    {
      name: 'Pelota de Baloncesto Spalding',
      price: 25.99,
      age: 7,
      seller: 'Spalding',
      image: 'https://th.bing.com/th/id/OIP.0AVNDcWFberT4dzhJoOq8gHaIx?rs=1&pid=ImgDetMain'
    },
    {
      name: 'Tren Eléctrico de Madera',
      price: 44.99,
      age: 3,
      seller: 'Brio',
      image: 'https://m.media-amazon.com/images/I/61+wgGX+GzL._AC_SL1024_.jpg'
    },
    {
      name: 'Nerf Ultra Blaster X',
      price: 69.99,
      age: 9,
      seller: 'Hasbro',
      image: 'https://mensgear.b-cdn.net/wp-content/uploads/2020/08/Untitled-design-1-5-980x657.jpg'
    },
    {
      name: 'Figura Gogeta SSJ4 Dragon Stars Series',
      price: 21.99,
      age: 6,
      seller: 'Bandai',
      image: 'https://entrefiguras.com/wp-content/uploads/figura-gogeta-ssj4-dragon-stars-series14-bandai-box.jpg'
    },
    {
      name: 'Banco de trabajo Builder',
      price: 29.95,
      age: 3,
      seller: 'Brio',
      image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202210/21/00156613124637____1__1200x1200.jpg?impolicy=Resize&width=1200'
    },
    {
      name: 'Castillo Medieval de Caballeros',
      price: 74.99,
      age: 5,
      seller: 'Playmobil',
      image: 'https://m.media-amazon.com/images/I/51m1gByv3HL.jpg'
    },
    {
      name: 'Transformers figura EarthSpark',
      price: 15.95,
      age: 6,
      seller: 'Hasbro',
      image: 'https://www.juguetespanre.com/907012-large_default/transformers-figuras-earthspark-figura-de-elita-de-hasbro.jpg'
    },
    {
      name: 'Monopoly Clásico',
      price: 34.99,
      age: 8,
      seller: 'Hasbro',
      image: 'https://warmusgames.com/wp-content/uploads/2022/05/Monopoly-Clasico-caja.jpg'
    },
    {
      name: 'Patinete Plegable Infantil',
      price: 49.99,
      age: 5,
      seller: 'Juguettos',
      image: 'https://www.bing.com/th?id=OPEC.Cb7jfBhlH5aaUw474C474&o=5&pid=21.1&w=144&h=144&qlt=100&dpr=1&pcl=f5f5f5'
    },
    {
      name: 'Balón Euroleague Varsity TF-150 Goma INdoor/Outdoor',
      price: 29.95,
      age: 6,
      seller: 'Spalding',
      image: 'https://spalding-basketball.com/cdn/shop/products/spalding-euroleague-varsity-tf-150-rubber-indooroutdoor-basketball-927088_720x.jpg?v=1697008258'
    },
    {
      name: 'Barco pirata Playmobil Astérix',
      price: 44.25,
      age: 5,
      seller: 'Playmobil',
      image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202502/11/00102712369434____6__1200x1200.jpg?impolicy=Resize&width=1200'
    },
    {
      name: 'Coche de carreras teledirigido',
      price: 28.99,
      age: 5,
      seller: 'Brio',
      image: 'https://ravensburger.cloud/images/product-cover/650x445/Coche-de-carreras-teledirigido-63038800.webp'
    }
];

const recorrerArray = () => {
  const container = document.querySelector('.main-content');
  products.forEach(product => {
    const card = document.createElement('div');
    const image = document.createElement("img");
    const name = document.createElement("h3");
    const price = document.createElement("p");
    const age = document.createElement("p");
    const seller = document.createElement("p");

    card.classList.add('producto');
    card.dataset.seller = product.seller.toLowerCase();
    card.dataset.price = product.price;
    card.dataset.age = product.age;
    image.src = product.image;
    image.style.width = "10rem";
    image.style.height = "10rem";
    name.textContent = product.name;
    price.textContent = `Precio: ${product.price}€`;
    age.textContent = `Edad recomendada: ${product.age}+`;
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

// Función para mostrar solo productos en OFERTA
function showOffers() {
  const products = document.querySelectorAll('.producto');
  products.forEach(product => {
    const productText = product.textContent;
    const priceMatch = productText.match(/Precio:\s*([0-9]+(?:\.[0-9]+)?)\s*€/i);
    
    if (priceMatch) {
      const price = parseFloat(priceMatch[1]);
      if (price < 15) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    } else {
      product.style.display = 'none';
    }
  });
}
const btnOffers = document.getElementById('btn-offers');
if (btnOffers) {
  btnOffers.textContent = "OFERTAS";
  btnOffers.style.cursor = "pointer";
  btnOffers.style.fontSize = "1rem";
  btnOffers.style.backgroundColor = '#4ccc';
  btnOffers.style.color = 'white';
  btnOffers.style.padding = '10px 20px'; 
  btnOffers.style.border = 'none';
  btnOffers.style.borderRadius = '5px';
  btnOffers.style.fontFamily = 'Bubblegum Sans';
  btnOffers.addEventListener('click', showOffers);
}


//Input y boton de busqueda
const buscarjuguetes = () => {
  window.executeSearch = () => {
    const products = document.querySelectorAll('.producto');
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery === "") {
      alert("Por favor, ingresa un término de búsqueda.");
      return;
    }
    let foundAny = false;
    products.forEach(product => {
      const productText = product.textContent.toLowerCase();
      if (productText.includes(searchQuery)) {
        product.style.display = '';
        foundAny = true;
      } else {
        product.style.display = 'none';
      }
    });
    if (!foundAny) {
      alert("No se han encontrado resultados para tu búsqueda");
    }
  };
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        executeSearch();
      }
    });
  }
};
buscarjuguetes();





//filtros--------------------------------------------------------------------------------------------------

// Variables globales
let filtroPrecio = parseFloat(document.getElementById('slider-precio').value);
let filtroEdad = parseInt(document.getElementById('slider-edad').value);
let filtroSellers = [];
const slider = document.getElementById('slider-precio');
const valorPrecio = document.getElementById('valor-precio');
const slider2 = document.getElementById('slider-edad');
const valorEdad = document.getElementById('valor-edad');
const sellerCheckboxes = document.querySelectorAll('#filtro-vendedor input[type="checkbox"]');

// Función para aplicar los filtros a la vez
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

// Eventos para los sliders
slider.addEventListener('input', () => {
  valorPrecio.textContent = `${slider.value} €`;
  filtroPrecio = parseFloat(slider.value);
  aplicarFiltros();
});

slider2.addEventListener('input', () => {
  valorEdad.textContent = `${slider2.value} +`;
  filtroEdad = parseInt(slider2.value);
  aplicarFiltros();
});

// Evento para los checkboxes
sellerCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    filtroSellers = Array.from(sellerCheckboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());
    aplicarFiltros();
  });
});

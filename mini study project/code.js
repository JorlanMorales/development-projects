let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {

  let nombre = prompt("Ingrese tu nombre:");

  let edad = prompt("Ingresa tu año de nacimineto:");

  let ciudad = prompt("Ingresa la ciudad donde vives:");

  let javascript = confirm("te interesa javascript?");

  let interesado;

  edad = 2023 - edad;

  javascript ? interesado = "si" :interesado = "no"

  datosPersona.nombre = nombre;

  datosPersona.edad = edad;

  datosPersona.ciudad = ciudad;

  datosPersona.javascript = interesado;

}

function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  const nombre = document.querySelector("#nombre");

  const edad = document.querySelector("#edad");

  const ciudad = document.querySelector("#ciudad");

  const javascript = document.querySelector("#javascript");

  nombre.innerHTML = datosPersona.nombre;

  edad.innerHTML = datosPersona.edad;

  ciudad.innerHTML = datosPersona.ciudad;

  javascript.innerHTML = datosPersona.javascript;

}


function recorrerListadoYRenderizarTarjetas() {

  const card = document.querySelector("#fila");

  card.innerHTML="";

    listado.forEach(caja => {

      card.innerHTML+= `

        <div class="caja">

          <img src="${caja.imgUrl}" alt="${caja.lenguajes}">

          <p class="lenguaje">${caja.lenguajes}</p>

          <p class="bimestre">${caja.bimestre}</p>

        </div>

      `

    });

}

function alternarColorTema() {

  const sitio = document.querySelector("div");

         
  sitio.classList.toggle("dark");


}

const aparecer = () => {

  const escondido = document.querySelector("#sobre-mi")

  window.addEventListener("keydown", (e) =>{

    if(e.key === `f`){

      escondido.classList.remove("oculto");

    }

  })

}

aparecer();
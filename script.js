const mainNavbar = document.getElementById('mainNavbar');
const subNavbar = document.getElementById('subNavbar');
const content = document.getElementById('content');

const sectionsSustentabilidad = {
  inicio: {
    title: '¿Qué es la Sustentabilidad?',
    text: `
      <div>
        <img src="./descarga.jpg" alt="Naturaleza y sustentabilidad" style="max-width:100%; border-radius:15px; box-shadow:0 7px 20px rgba(72,161,77,0.25); margin-bottom:1.5rem;" />
        <p>La sustentabilidad no es solo una palabra: es un estilo de vida que busca <strong>armonizar</strong> nuestro desarrollo con el cuidado del planeta.</p>
        <p class="tip">🌿 <strong>Tip:</strong> Pequeñas acciones diarias, como reciclar o ahorrar energía, pueden generar un gran impacto global.</p>
        <ul>
          <li>🌱 Cuidar el agua y los recursos naturales</li>
          <li>🌱 Usar energías renovables siempre que se pueda</li>
          <li>🌱 Reducir, reutilizar y reciclar materiales</li>
          <li>🌱 Promover consumo responsable y local</li>
        </ul>
        <p>¡Ser sustentable es contribuir a un mundo más justo, sano y lleno de vida!</p>
      </div>
    `
  },
  documentos: {
    title: 'Documentos para Descargar',
    text: `
      <p>A continuación te dejamos un documento con información detallada sobre la sustentabilidad. Podés descargarlo haciendo clic en el botón.</p>
      <div class="my-4 text-center">
        <img src="./pdf-cover.jpg" alt="Portada PDF Sustentabilidad" style="max-width: 300px; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15);" />
        <div class="mt-3">
          <a href="Sustentabilidad - Jovenes Ingenieros.pdf" class="btn btn-outline-success btn-lg" download>Descargar PDF</a>
        </div>
      </div>
    `
  },
  exploremos: {
    title: 'Exploremos la Sustentabilidad',
    text: `
      <p>Seleccioná alguna de las siguientes preguntas para aprender más:</p>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Qué es?</h5>
              <p class="card-text flex-grow-1">Descubrí el significado y la esencia de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="es">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Por qué?</h5>
              <p class="card-text flex-grow-1">Entendé la importancia de cuidar nuestro planeta.</p>
              <button class="btn btn-success mt-auto" data-section="pq">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Para qué?</h5>
              <p class="card-text flex-grow-1">Conocé los objetivos y beneficios de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="pa">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Quién?</h5>
              <p class="card-text flex-grow-1">Descubrí quiénes son los actores clave en la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="qu">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cuándo?</h5>
              <p class="card-text flex-grow-1">Conocé la historia y el contexto temporal de la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="cua">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Dónde?</h5>
              <p class="card-text flex-grow-1">Explorá los lugares clave donde se aplican prácticas sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="do">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cómo?</h5>
              <p class="card-text flex-grow-1">Aprendé sobre las metodologías y prácticas sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="co">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Con qué?</h5>
              <p class="card-text flex-grow-1">Descubrí los recursos y herramientas que ayudan en la sustentabilidad.</p>
              <button class="btn btn-success mt-auto" data-section="cn">Ver más</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">¿Cuánto?</h5>
              <p class="card-text flex-grow-1">Entendé la magnitud e impacto de las acciones sustentables.</p>
              <button class="btn btn-success mt-auto" data-section="cu">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    `
  }
};

// Mostrar la página principal
function mostrarInicio() {
  subNavbar.style.display = 'none';
  mainNavbar.style.display = 'flex';
  content.innerHTML = `
    <div class="text-center">
      <h1 class="mb-4">Bienvenidos a Jóvenes Ingenieros</h1>
      <p class="lead mb-4">Somos un grupo de estudiantes de ingeniería en sistemas comprometidos con la sustentabilidad y el cuidado del medio ambiente.</p>

      <div class="card mx-auto" style="max-width: 400px; cursor:pointer;" id="cardSustentabilidad">
        <img src="./descarga.jpg" class="card-img-top" alt="Sustentabilidad" />
        <div class="card-body">
          <h5 class="card-title">Sustentabilidad</h5>
          <p class="card-text">Descubre todo sobre la sustentabilidad, su importancia y cómo podemos contribuir.</p>
          <button class="btn btn-success">Explorar Sustentabilidad</button>
        </div>
      </div>
    </div>
  `;

  const card = document.getElementById('cardSustentabilidad');
  const btn = card.querySelector('button');
  btn.addEventListener('click', e => {
    e.stopPropagation();
    mostrarSustentabilidad();
  });
}

// Mostrar sección contacto
function mostrarContacto() {
  subNavbar.style.display = 'none';
  mainNavbar.style.display = 'flex';
  content.innerHTML = `
    <div class="text-center">
      <h1 class="mb-3">Contacto</h1>
      <p class="fs-5">Para contactarnos puedes enviarnos un correo a: <a href="mailto:jovenesingenieros@gmail.com">jovenesingenieros@gmail.com</a></p>
      <p class="fs-6">O visitarnos en nuestra sede ubicada en la Universidad Tecnológica.</p>
    </div>
  `;
}

// Mostrar la sección sustentabilidad
function mostrarSustentabilidad() {
  mainNavbar.style.display = 'none';
  subNavbar.style.display = 'flex';
  content.style.paddingTop = '70px';
  mostrarSeccionSustentabilidad('inicio'); // por defecto mostrar "inicio"
}

// Función recursiva para generar HTML desde objetos anidados
function generarHtmlRecursivo(obj) {
  let html = '';
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      html += `<h3 class="mt-4">${key}</h3>${obj[key]}`;
    } else if (typeof obj[key] === 'object') {
      html += `<h2 class="mt-5">${key}</h2>`;
      html += generarHtmlRecursivo(obj[key]);
    }
  }
  return html;
}

// Mostrar una sección específica de sustentabilidad
function mostrarSeccionSustentabilidad(key) {
  const sec = sectionsSustentabilidad[key];
  let html = `<h1 class="mb-4">${sec ? sec.title : ''}</h1>`;

  if (key === 'inicio' || key === 'exploremos' || key === 'documentos') {
    html += sec ? sec.text : '';
    content.innerHTML = html;

    if (key === 'exploremos') {
      // Agregar eventos a botones "Ver más" de los cards
      content.querySelectorAll('button[data-section]').forEach(btn => {
        btn.addEventListener('click', e => {
          const sectionKey = e.target.getAttribute('data-section');
          mostrarSeccionSustentabilidad(sectionKey);
          document.querySelectorAll('.subNavLink').forEach(link => {
            link.classList.remove('active');
          });
        });
      });
    }
  } else {
    // Cargar contenido desde JSON para las preguntas específicas
    fetch('sustentabilidad.json')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el contenido');
        return res.json();
      })
      .then(data => {
        const seccion = data[key];
        if (!seccion) {
          html += '<p>Contenido no disponible.</p>';
        } else {
          html += generarHtmlRecursivo(seccion);
        }
        // Agregar botón "Volver a Exploremos" al final
        html += `
          <div class="mt-4">
            <button id="volverExploremos" class="btn btn-outline-success">Volver a Exploremos</button>
          </div>
        `;
        content.innerHTML = html;

        // Evento para volver a Exploremos
        document.getElementById('volverExploremos').addEventListener('click', () => {
          mostrarSeccionSustentabilidad('exploremos');
          document.querySelectorAll('.subNavLink').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === 'exploremos');
          });
        });
      })
      .catch(err => {
        content.innerHTML = html + '<p class="text-danger">Error al cargar el contenido.</p>';
        console.error(err);
      });
  }

  // Actualizar estado activo en navbar secundario
  document.querySelectorAll('.subNavLink').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === key);
  });
}

// Eventos navbar principal
document.getElementById('navInicio').addEventListener('click', e => {
  e.preventDefault();
  mostrarInicio();
});
document.getElementById('navContacto').addEventListener('click', e => {
  e.preventDefault();
  mostrarContacto();
});

// Evento volver en navbar secundario
document.getElementById('volver').addEventListener('click', e => {
  e.preventDefault();
  mostrarInicio();
});

// Eventos navbar secundario (Inicio, Exploremos, Documentos)
document.querySelectorAll('.subNavLink').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = e.target.getAttribute('data-section');
    mostrarSeccionSustentabilidad(key);
  });
});

// Mostrar inicio al cargar la página
mostrarInicio();

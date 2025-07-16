// Lógica específica para Sustentabilidad

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
        <img src="SustentabilidadPortada.png" alt="Portada PDF Sustentabilidad" style="max-width: 300px; border-radius:12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15);" />
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

function mostrarSustentabilidad() {
  mainNavbar.style.display = 'none';
  subNavbar.style.display = 'flex';
  content.style.paddingTop = '70px';
  mostrarSeccionSustentabilidad('inicio');
}

function mostrarSeccionSustentabilidad(key) {
  const sec = sectionsSustentabilidad[key];
  let html = `<h1 class="mb-4">${sec ? sec.title : ''}</h1>`;

  if (key === 'inicio' || key === 'exploremos' || key === 'documentos') {
    html += sec ? sec.text : '';
    content.innerHTML = html;

    if (key === 'exploremos') {
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
        html += `
          <div class="mt-4">
            <button id="volverExploremos" class="btn btn-outline-success">Volver a Exploremos</button>
          </div>
        `;
        content.innerHTML = html;
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

  document.querySelectorAll('.subNavLink').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === key);
  });
} 

// Función para mostrar secciones específicas
function mostrarSeccion(seccion) {
  // Ocultar la sección exploremos
  document.getElementById('exploremos').style.display = 'none';
  
  // Mostrar el contenido específico
  mostrarContenidoSeccion(seccion);
}

// Función para mostrar el contenido de una sección específica
function mostrarContenidoSeccion(seccion) {
  fetch('sustentabilidad.json')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo cargar el contenido');
      return res.json();
    })
    .then(data => {
      const seccionData = data[seccion];
      if (!seccionData) {
        mostrarError('Contenido no disponible para esta sección.');
        return;
      }
      
      // Crear el HTML para mostrar el contenido
      let html = `
        <section class="container my-5" id="contenido-seccion">
          <div class="row text-center mb-5">
            <div class="col-12">
              <button class="btn btn-outline-success mb-4" onclick="volverAExploremos()">
                ← Volver a Exploremos
              </button>
              <h2 class="display-5 fw-bold text-success">${obtenerTituloSeccion(seccion)}</h2>
              <p class="lead">Descubre todo sobre ${obtenerTituloSeccion(seccion).toLowerCase()}</p>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="card shadow-lg">
                <div class="card-body p-5">
      `;
      
      // Agregar el contenido de cada subsección
      for (const [key, value] of Object.entries(seccionData)) {
        if (typeof value === 'string') {
          if (value.match(/\.(png|jpg|jpeg|gif)$/i)) {
            // Corregir la ruta si contiene 'sustentabilidad/'
            let rutaImg = value.replace(/^sustentabilidad\//, '');
            if (key === '') {
              html += `
                <div class="mb-4 text-center">
                  <img src="${rutaImg}" alt="Imagen" class="img-fluid mb-3" style="max-width: 100%; height: auto;" />
                </div>
              `;
            } else {
              html += `
                <div class="mb-4">
                  <h4 class="text-success mb-3">${key}</h4>
                  <div class="contenido-texto">
                    <img src="${rutaImg}" alt="${key}" class="img-fluid mb-3" style="max-width: 100%; height: auto;" />
                  </div>
                </div>
              `;
            }
          } else {
            html += `
              <div class="mb-4">
                <h4 class="text-success mb-3">${key}</h4>
                <div class="contenido-texto">
                  ${value}
                </div>
              </div>
            `;
          }
        } else if (typeof value === 'object') {
          html += `
            <div class="mb-4">
              <h4 class="text-success mb-3">${key}</h4>
              <div class="contenido-texto">
          `;
          
          for (const [subKey, subValue] of Object.entries(value)) {
            html += `
              <div class="mb-3">
                <h5 class="text-info">${subKey}</h5>
                <div class="contenido-texto">
                  ${subValue}
                </div>
              </div>
            `;
          }
          
          html += `
              </div>
            </div>
          `;
        }
      }
      
      html += `
                </div>
              </div>
            </div>
          </div>
          
          <!-- Botón de volver al final -->
          <div class="row text-center mt-5">
            <div class="col-12">
              <button class="btn btn-success btn-lg" onclick="volverAExploremos()">
                ← Volver a Exploremos
              </button>
            </div>
          </div>
        </section>
      `;
      
      // Insertar el contenido después de la sección de estadísticas
      const statsSection = document.querySelector('.stats-section');
      statsSection.insertAdjacentHTML('afterend', html);
      
      // Scroll suave hacia el nuevo contenido
      document.getElementById('contenido-seccion').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    })
    .catch(err => {
      mostrarError('Error al cargar el contenido. Por favor, intenta nuevamente.');
      console.error(err);
    });
}

// Función para obtener el título de la sección
function obtenerTituloSeccion(seccion) {
  const titulos = {
    'es': '¿Qué es la Sustentabilidad?',
    'pq': '¿Por qué es Importante?',
    'pa': '¿Para qué Sirve?',
    'qu': '¿Quiénes Participan?',
    'cua': '¿Cuándo Aplicarla?',
    'do': '¿Dónde Aplicarla?',
    'co': '¿Cómo Aplicarla?',
    'cn': '¿Con qué Recursos?',
    'cu': '¿Cuánto Impacta?'
  };
  return titulos[seccion] || 'Contenido';
}

// Función para volver a la sección exploremos
function volverAExploremos() {
  // Ocultar el contenido específico
  const contenidoSeccion = document.getElementById('contenido-seccion');
  if (contenidoSeccion) {
    contenidoSeccion.remove();
  }
  
  // Mostrar la sección exploremos
  document.getElementById('exploremos').style.display = 'block';
  
  // Scroll suave hacia exploremos
  document.getElementById('exploremos').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Función para mostrar errores
function mostrarError(mensaje) {
  const html = `
    <section class="container my-5" id="contenido-seccion">
      <div class="row text-center mb-5">
        <div class="col-12">
          <div class="alert alert-danger">
            <h4>Error</h4>
            <p>${mensaje}</p>
          </div>
        </div>
      </div>
      
      <!-- Botón de volver al final -->
      <div class="row text-center mt-5">
        <div class="col-12">
          <button class="btn btn-success btn-lg" onclick="volverAExploremos()">
            ← Volver a Exploremos
          </button>
        </div>
      </div>
    </section>
  `;
  
  const statsSection = document.querySelector('.stats-section');
  statsSection.insertAdjacentHTML('afterend', html);
}

// Smooth scrolling para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 
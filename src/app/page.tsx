'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Aleo } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faLocationDot,faChevronLeft, faChevronRight,faHelmetSafety, faCompassDrafting,faClipboardCheck, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";



const aleo = Aleo({ subsets: ['latin'] });


const servicios = [
  {
    titulo: "Consultoría de proyectos",
    descripcion: "Ofrecemos asesoramiento técnico especializado para el diseño y planificación de proyectos civiles, desde la conceptualización, descripción de actividades a ejecutarse, presupuesto de obra y hasta la elaboración de los planos y especificaciones técnicas. También brindamos apoyo en la selección de materiales, tecnologías y procesos constructivos más adecuados para cada proyecto."
  },
  {
    titulo: "Supervisión de obras",
    descripcion: "Nos encargamos de la supervisión técnica, administrativa y financiera de los proyectos civiles en todas sus etapas, asegurando que se cumplan los plazos, presupuestos y estándares de calidad requeridos."
  },
  {
    titulo: "Construcción de obras civiles",
    descripcion: " somos especialistas en la construcción de obras civiles de todo tipo, desde pequeñas infraestructuras hasta grandes proyectos urbanos e industriales, ofreciendo soluciones integrales y personalizadas para cada cliente."
  },
  {
    titulo: "Diseño y planificación",
    descripcion: "contamos con un equipo altamente capacitado para el diseño y planificación de proyectos civiles, utilizando tecnologías de última generación para garantizar la calidad y eficiencia en cada etapa del proyecto."
  }
]

const serviciosIconos = [
  <FontAwesomeIcon className={styles.iconoService} icon={faHelmetSafety}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faCompassDrafting}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faPersonChalkboard}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faClipboardCheck}  style={{ color: "#065569" }} />,
  <FontAwesomeIcon icon={faEnvelope} className={styles.iconosContactosIconos} style={{marginBottom:'4vh'}}/>,
  <FontAwesomeIcon icon={faLocationDot} className={styles.iconosContactosIconos}/>
];

const serviciosIconosHover = [
  <FontAwesomeIcon className={styles.iconoService} icon={faHelmetSafety} bounce style={{ color: "#3491A8" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faCompassDrafting} bounce style={{ color: "#3491A8" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faPersonChalkboard} bounce style={{ color: "#3491A8" }} />,
  <FontAwesomeIcon className={styles.iconoService} icon={faClipboardCheck} bounce style={{ color: "#3491A8" }} />,
  <FontAwesomeIcon icon={faEnvelope} className={styles.iconosContactosIconos} bounce style={{marginBottom:'4vh'}}/>,
  <FontAwesomeIcon icon={faLocationDot} bounce className={styles.iconosContactosIconos}/>
];
  

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [hoveredMail, setHoveredMail] = useState(false);
  const [hoveredMap, setHoveredMap] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnterMail = () => {
    setHoveredMail(true);
  };

  const handleMouseLeaveMail = () => {
    setHoveredMail(false)
  };

  const handleMouseEnterMap = () => {
    setHoveredMap(true);
  };

  const handleMouseLeaveMap = () => {
    setHoveredMap(false)
  };

  const [scrolled, setScrolled] = useState(false);
  
  const [scrollStates, setScrollStates] = useState({
    scrolledObra1: false,
    scrolledObra2: false,
    scrolledObra3: false,
    scrolledObra4: false,
    scrolledObra5: false,
    scrolledObra6: false,
  });


  const setSingleScrollState = (key: string, value: boolean) => {
    setScrollStates((prevStates) => ({
      ...prevStates,
      [key]: value,
    }));
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 900) { // Puedes ajustar el valor según tus necesidades
      setScrolled(true);
      if(offset>1600){
        setSingleScrollState('scrolledObra1', true);
        if(offset>2000){
          setSingleScrollState('scrolledObra2', true);
          if(offset>2400){
            setSingleScrollState('scrolledObra3', true);
            if(offset>2800){
              setSingleScrollState('scrolledObra4', true);
              if(offset>3200){
                setSingleScrollState('scrolledObra5', true);
                if(offset>3700){
                  setSingleScrollState('scrolledObra6', true);
                }
                else{setSingleScrollState('scrolledObra6', false);}
              }
              else{setSingleScrollState('scrolledObra5', false);}
            }
            else{setSingleScrollState('scrolledObra4', false);}
          }
          else{setSingleScrollState('scrolledObra3', false);}
        }
        else{setSingleScrollState('scrolledObra2', false);}
      }
      else{setSingleScrollState('scrolledObra1', false);}
    } else {
      setScrolled(false);
    }
    console.log(offset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <nav className={`${styles.tituloNav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.tituloLogo}>
          <Image
            src="/img/Erigo-logo.png"
            alt="Erigo Logo"
            className={styles.erigoLogo}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className={`${styles.tituloTitulo} ${scrolled ? styles.scrolled : ''}`}>
          <h2>ERIGO INGENIERIA</h2>
        </div>
        <div className={styles.navSegmentos}>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Sobre Nosotros</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Nuestros Proyectos</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>De Interés</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Contáctanos</h4>
          </div>
        </div>
      </nav>

      <section className={styles.vistaPrincipal}>
        <div className={styles.imagenFondo}>
          <div className={styles.fondoFilter}></div>
        </div>
        <div className={styles.cardIntroduccion}>
          <h1 className={styles.introduccionTexto}>
            Somos una empresa consultora, supervisora y constructora de diversas obras civiles, con mucha experiencia en el mercado.
          </h1>
        </div>
        <div className={styles.introduccionFlecha}>
          <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronLeft} fade />
        </div>
        <div className={styles.introduccionFlechaDerecha}>
          <FontAwesomeIcon className={styles.iconoFlecha} icon={faChevronRight} fade />
        </div>
        <div className={styles.mainFooter}></div>
      </section>

      <div className={styles.vistaDato}>
        <div className={styles.datoFooter}></div>
        <div className={styles.datoLeft}><h2 className={styles.introduccionTexto} style={{fontSize:'35px'}}>Desde su fundación, hemos trabajado en una gran variedad de proyectos, desde pequeñas obras de construcción hasta grandes infraestructuras, nos comprometemos con la excelencia y la satisfacción del cliente. </h2> <br /> <h2 className={styles.introduccionTexto} style={{fontSize:'50px'}}>Juntos construimos el futuro</h2></div>
      </div>

      <div className={styles.vista2}>
        <div className={styles.vista2Titulo}>
          <h1 className={styles.tituloVista2}>Nuestros Servicios</h1>
        </div>
        <div className={styles.vista2Servicios}>
          <div className={styles.serviciosIconos}></div>
          <div className={styles.vista2ServiciosFila}>
            {servicios.map((servicio, index) => (
              <div key={index} className={styles.servicioContenedor}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.servicioIcono}>
                  {hoveredIndex === index ? serviciosIconosHover[index] : serviciosIconos[index]}
                </div>
                <div className={styles.vista2Servicio}>
                  <div className={styles.servicioImagen}>
                    <div className={styles.servicioImagenSombra}>
                      <div className={styles.servicioDescripcion} style={{
                        height: hoveredIndex === index ? '100%' : '100%',
                        transition: 'height 1s',
                      }}>
                        <div style={{ height: hoveredIndex === index ? '12%' : '90%', transition: 'height 1s' }}></div>
                        <h2 className={styles.descripcionH2} style={{ height: hoveredIndex === index ? '10%' : '0%', transition: 'height 1s' }}>{servicio.titulo}</h2>
                        <br />
                        <h3 className={styles.descripcionH3} style={{marginTop: hoveredIndex === index ? (index === 2 ? '5%' : '-10px') : '30px', height: hoveredIndex === index ? '78%' : '0%', transition: 'margin-top 1s, height 1s' }}>
                          {servicio.descripcion}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mainFooter} style={{bottom:'-1%', position: 'relative'}}></div>
        </div>
        
      </div>

      <div className={styles.division2}>
      <div className={styles.datoFooter} style={{position: 'relative',top: '90%'}}></div>
      <div className={styles.datoLeft}><h2 className={styles.introduccionTexto} style={{fontSize:'35px',    position: 'relative',top: '-9%'}}> Hemos trabajado en una variedad de proyectos, desde pequeñas infraestructuras hasta grandes proyectos urbanos e industriales, brindando soluciones integrales y personalizadas para cada cliente </h2> </div>
      </div>

      <div className={styles.obrasCiviles}>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra1 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra1 ? '320vh' : '390vh'
              }}
              >
                    <div className={styles.obraDescripcion}>
                      <div className={styles.obraTexto}>
                        <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                        <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                      </div>
                    </div>
                    <div className={styles.obraImagen}>
                    </div>
                    <div className={styles.obraFilter} style={{
                      backgroundColor: scrollStates.scrolledObra1 ? 'transparent' : 'white'
                    }}></div>
            </div>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra2 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra2 ? '390vh' : '460vh'
              }}
              >
                <div className={styles.obraFilter} style={{
                  backgroundColor: scrollStates.scrolledObra2 ? 'transparent' : 'white'
                }}></div>
            <div className={styles.obraImagenInverse}>
            </div>
            <div className={styles.obraDescripcionInverse}>
                <div className={styles.obraTexto}>
                  <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                  <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                </div>
            </div>
            </div>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra3 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra3 ? '460vh' : '530vh'
              }}
              >
              <div className={styles.obraDescripcion}>
                <div className={styles.obraTexto}>
                  <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                  <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                </div>
              </div>
              <div className={styles.obraImagen}>
              </div>
              <div className={styles.obraFilter} style={{
                backgroundColor: scrollStates.scrolledObra3 ? 'transparent' : 'white'
              }}></div>
            </div>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra4 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra4 ? '530vh' : '600vh'
              }}
              >
            <div className={styles.obraFilter} style={{
              backgroundColor: scrollStates.scrolledObra4 ? 'transparent' : 'white'
            }}></div>
            <div className={styles.obraImagenInverse}>
            </div>
            <div className={styles.obraDescripcionInverse}>
                <div className={styles.obraTexto}>
                  <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                  <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                </div>
            </div>
            </div>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra5 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra5 ? '600vh' : '670vh'
              }}
              >
              <div className={styles.obraDescripcion}>
                <div className={styles.obraTexto}>
                  <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                  <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                </div>
              </div>
              <div className={styles.obraImagen}>
              </div>
              <div className={styles.obraFilter} style={{
                backgroundColor: scrollStates.scrolledObra5 ? 'transparent' : 'white'
              }}></div>
            </div>

            <div className={`${styles.obraTipo} ${scrollStates.scrolledObra6 ? styles.scrolled : ''}`}
              style={{
                position: 'absolute',
                top: scrollStates.scrolledObra6 ? '670vh' : '740vh'
              }}
              >
            <div className={styles.obraFilter} style={{
              backgroundColor: scrollStates.scrolledObra6 ? 'transparent' : 'white'
            }}></div>
            <div className={styles.obraImagenInverse}>
            </div>
            <div className={styles.obraDescripcionInverse}>
                <div className={styles.obraTexto}>
                  <h3 className={styles.textoObraTitulo}>Obras Viales</h3>
                  <h3 className={styles.textoObraDescripcion}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at eaque ratione adipisci. Odit sapiente ducimus, aliquid voluptatum odio nesciunt? Est rem mollitia ab tenetur deserunt? Maiores odit ullam consectetur quas sapiente natus ad totam. Explicabo molestiae placeat ducimus? Officiis sint consectetur quaerat esse fuga architecto ullam tenetur totam ipsa!</h3>

                </div>
            </div>
            </div>

      </div>

      <div className={styles.contacto}>
        <div className={styles.contactoInfo}>
            <div className={styles.horarios}>
              <h2 className={styles.horariosH2}>Horario de atención</h2>
              <div className={styles.horariosFecha}>
                <div className={styles.horariosDia}>
                  <h3 className={styles.horariosH3}>Lunes a Viernes</h3>
                  <h3 className={`${styles.horariosH3} ${aleo.className}`}>Sábados</h3>
                </div>
                <div className={styles.horariosHora}>
                  <h3>8am - 5pm</h3>
                  <h3>8am- 12pm</h3>
                </div>
              </div>

            </div>
            <div className={styles.info}>
               <h2 className={styles.horariosH2}>Teléfono: #999 9999-9999</h2>
              <div className={styles.horariosFecha}>
                <div className={styles.iconosContactos} style={{width:'12%'}}>
                <div onMouseEnter={handleMouseEnterMail} onMouseLeave={handleMouseLeaveMail}>
                {hoveredMail ? serviciosIconosHover[4] : serviciosIconos[4]}
                </div>
                <div onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeaveMap}>
                {hoveredMap ? serviciosIconosHover[5] : serviciosIconos[5]}
                </div>
                
                </div>
                <div className={styles.horariosDia} style={{width:'30%'}}>
                  <h3 className={styles.horariosH3} style={{marginBottom:'4vh'}}>Email</h3>
                  <h3 onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeaveMap} className={`${styles.horariosH3} ${aleo.className}`}>Ubicacion</h3>
                </div>
                <div className={styles.horariosHora} style={{width:'70%'}}>
                  <h3 style={{marginBottom:'4vh'}} >clientes@erigoingenieria.com</h3>
                  <h3 onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeaveMap}>Col. El Hato, Calle Principal Frente a MotoRepuestos</h3>
                </div>
              </div>
            </div>
        </div>

        <div className={styles.redesSociales} style={{display:'flex'}}>
            <div style={{width: '50%', height: '100%', display:'flex'}}>
              <div className={styles.dibujoBonito}>
                <div className={styles.paredIzq}></div>
                <div className={styles.techo}></div>
                <div className={styles.paredDer}></div>
              </div>
              <div className={styles.dibujoBonito} style={{
                left: '-14%',
                top: '-3vh'
              }}>
                <div className={styles.paredIzq2}></div>
                <div className={styles.techo2}></div>
                <div className={styles.paredDer2}></div>
              </div>
              <div className={styles.dibujoBonito} style={{
                left: '-30%',
                top: '-8vh'
              }}>
                <div className={styles.paredIzq3}></div>
                <div className={styles.techo3}></div>
                <div className={styles.paredDer3}></div>
              </div>


            </div>

            <div style={{width: '50%', height:'100%',  display:'flex', alignItems:'flex-end'}}>
              <div style={{width:'80%', height:'30%',  display:'flex',justifyContent: 'flex-end'}}>
                <div className={styles.contenedorIcono}>
                <FontAwesomeIcon icon={faFacebookSquare} style={{height:'90%'}}/>
                </div>
                <div className={styles.contenedorIcono}>
                <FontAwesomeIcon icon={faInstagram} style={{height:'90%'}}/>
                </div>
              </div>
              <div className={styles.wasapIcon}>
              <div className={styles.contenedorIcono}
              style={{
                backgroundColor: '#2db742',
                borderRadius: '15px',
                display: 'flex',
                justifyContent: 'center',
                height: '90%',
                alignItems: 'center',
              }}>
                <FontAwesomeIcon icon={faWhatsapp} style={{height:'90%'}}/>
                </div>
              </div>
            </div>
        </div>

      </div>
{/* 
      <Link href="/proyectos">
                <button>Go to First Page</button>
      </Link> */}
    </main>
  );
}

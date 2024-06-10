'use client';
import styles from "../page.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faClipboardCheck, faCompassDrafting, faEnvelope, faHelmetSafety, faLocationDot, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function proyectos() {
    const router = useRouter()

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
    
      const [scrolled, setScrolled] = useState(false);
      const [hoveredMap, setHoveredMap] = useState(false);

      const handleMouseEnterMap = () => {
        setHoveredMap(true);
      };
    
      const handleMouseLeaveMap = () => {
        setHoveredMap(false)
      };
  
      const scrollWin = (x:number, y:number) => {
        window.scrollBy(x, y);
      }

      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 500) { // Puedes ajustar el valor según tus necesidades
            setScrolled(true);
          if(offset>560){
            setSingleScrollState('scrolledObra1', true);
            if(offset>1000){
              setSingleScrollState('scrolledObra2', true);
              if(offset>1400){
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
        }else {
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

    return (
        <main className={styles.main2}>
            
            <div className={styles.proyectoHidder}> </div>    

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
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`} onClick={() => router.push('/')}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Sobre Nosotros</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`} onClick={() => scrollWin(0, -9500)}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Nuestros Proyectos</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>De Interés</h4>
          </div>
          <div className={`${styles.segmento} ${scrolled ? styles.scrolled : ''}`} onClick={() => scrollWin(0, 9500)}>
            <h4 className={`${styles.segmentoTexto} ${scrolled ? styles.scrolled : ''}`}>Contáctanos</h4>
          </div>
        </div>
            </nav>

            <section className={styles.vistaPrincipal} style={{zIndex:'500', position: 'absolute'}}>
                <div className={styles.imagenFondo}>
                <div className={styles.fondoFilter} style={{backgroundColor: '#0011249e'}}></div>
                </div>
                <div className={styles.cardIntroduccion}>
                <h1 className={styles.introduccionTexto} style={{display: 'flex', marginBottom:'6vh', color:'#ededede8'}}>
                    Nuestra Historia
                </h1>
                <h2 style={{color:'#ededede8'}}>
                Con el tiempo, nos hemos consolidado como una de las principales empresas del sector en su región, contamos con experiencia en una gran variedad de proyectos y seguimos creciendo cada dia.
                </h2>
                </div>
                <div className={styles.mainFooter} style={{backgroundColor: 'white'}}></div>
            </section>

            <div className={styles.vista2Titulo} style={{marginLeft:'0', height: '10vh',zIndex: '200',backgroundColor: 'white',paddingLeft: '4%', top:'100vh', position:'absolute'}}>
                <h1 className={styles.tituloVista2}>Erigo Ingenieria</h1>
                </div>

                <section className={styles.LineaTiempo2}>
                </section>
                <div className={styles.proyecto2}>
                    <div className={styles.historiaR} style={{display:'flex', flexDirection:'row-reverse', alignItems:'center'}}>
                        <div className={styles.historiaRImagen}></div>
                    </div>
                    <div className={styles.historiaR} style={{display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'flex-end'}}>
                        <h2 style={{color: '#065569ff', marginRight: '16.5vh'}}>202X</h2>
                        <h3 style={{color: '#065569ff'}}>Titulo de Proyecto</h3>
                    </div>
                    <div className={styles.historiaR} style={{display:'flex', flexDirection:'row-reverse', alignItems:'center'}}>
                        <div className={styles.historiaRImagen}></div>
                    </div>
                </div>

                <div className={styles.proyecto2} style={{right:'0'}}>
                    <div className={styles.historiaR} style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
                        <h2 style={{color: '#065569ff'}}>202X</h2>
                        <h3 style={{color: '#065569ff'}}>Titulo de Proyecto</h3>
                    </div>
                    <div className={styles.historiaR} style={{display:'flex', flexDirection:'row', alignItems:'center', transform: 'scaleX(-1)'}}>
                        <div className={styles.historiaRImagen}></div>
                    </div>
                    <div className={styles.historiaR} style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
                        <h2 style={{color: '#065569ff'}}>202X</h2>
                        <h3 style={{color: '#065569ff'}}>Titulo de Proyecto</h3>
                    </div>
                </div>

                <div className={styles.iconosLineaTiempo}>
                    <div className={styles.iconoTiempo}>
                    <FontAwesomeIcon icon={faCircle} style={{color: scrollStates.scrolledObra1 ? "#065569ff" : "#969696", height: "60px", transition: 'color 1s ease'}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "white", height: "45px"}} />
                    </div>

                </div>

                <div className={styles.iconosLineaTiempo} style={{top: '185vh', backgroundColor: 'transparent'}}>
                <div className={styles.iconoTiempo}>
                <FontAwesomeIcon icon={faCircle} style={{color: scrollStates.scrolledObra2 ? "#065569ff" : "#969696", height: "60px", transition: 'color 1s ease'}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "white", height: "45px"}} />
                    </div>

                </div>

                <div className={styles.iconosLineaTiempo} style={{    top: '290vh',backgroundColor: 'white',flexDirection: 'column',height: '90vh'}}>
                    <div className={styles.iconoTiempo}>
                    <FontAwesomeIcon icon={faCircle} style={{color: scrollStates.scrolledObra3 ? "#065569ff" : "#969696", height: "60px", transition: 'color 1s ease'}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "white", height: "45px"}} />
                    </div>

                </div>

                <div className={styles.mainFooter} style={{bottom:'-271%', position: 'absolute', zIndex:'1000', height:'5%'}}></div>

                <div className={styles.contacto} style={{bottom:'-350vh', overflowY:'hidden', position: 'absolute'}}>
        <div className={styles.contactoInfo}>
            <div className={styles.horarios}>
              <h2 className={styles.horariosH2}>Horario de atención</h2>
              <div className={styles.horariosFecha}>
                <div className={styles.horariosDia}>
                  <h3 className={styles.horariosH3}>Lunes a Viernes</h3>
                  <h3 className={styles.horariosH3}>Sábados</h3>
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
                <div>
                 {serviciosIconos[4]}
                </div>
                <div onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeaveMap}>
                {hoveredMap ? serviciosIconosHover[5] : serviciosIconos[5]}
                </div>
                
                </div>
                <div className={styles.horariosDia} style={{width:'30%'}}>
                  <h3 className={styles.horariosH3} style={{marginBottom:'4vh'}}>Email</h3>
                  <h3 onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeaveMap} className={`${styles.horariosH3}`}>Ubicacion</h3>
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
        </main>
    )
};
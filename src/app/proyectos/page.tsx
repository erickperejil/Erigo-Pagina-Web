import styles from "../page.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function proyectos() {


    return (
        <main className={styles.main2}>
            
            <div className={styles.proyectoHidder}> </div>    

            <nav className={styles.tituloNav}>
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
                <div className={styles.tituloTitulo}>
                <h2>ERIGO INGENIERIA</h2>
                </div>
                <div className={styles.navSegmentos}>
                <div className={styles.segmento}>
                    <h4 className={styles.segmentoTexto}>Sobre Nosotros</h4>
                </div>
                <div className={styles.segmento}>
                    <h4 className={styles.segmentoTexto}>Nuestros Proyectos</h4>
                </div>
                <div className={styles.segmento}>
                    <h4 className={styles.segmentoTexto}>De Interés</h4>
                </div>
                <div className={styles.segmento}>
                    <h4 className={styles.segmentoTexto}>Contáctanos</h4>
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
                    <div className={styles.historiaR}></div>
                    <div className={styles.historiaR}></div>
                    <div className={styles.historiaR}></div>
                </div>

                <div className={styles.proyecto2} style={{right:'0'}}>
                    <div className={styles.historiaR}></div>
                    <div className={styles.historiaR}></div>
                    <div className={styles.historiaR}></div>
                </div>

                <div className={styles.iconosLineaTiempo}>
                    <div className={styles.iconoTiempo}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "#969696",}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "red",}} />
                    </div>

                </div>


                <div className={styles.iconosLineaTiempo} style={{top: '185vh', backgroundColor: 'transparent'}}>
                    <div className={styles.iconoTiempo}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "#969696",}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "red",}} />
                    </div>

                </div>


                <div className={styles.iconosLineaTiempo} style={{    top: '290vh',backgroundColor: 'white',flexDirection: 'column',}}>
                    <div className={styles.iconoTiempo}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "#969696",}} />
                    </div>
                    <div className={styles.iconoTiempo} style={{position: 'absolute',width: '80%'}}>
                    <FontAwesomeIcon icon={faCircle} style={{color: "red",}} />
                    </div>

                </div>

                <div className={styles.mainFooter} style={{bottom:'-271%', position: 'absolute', zIndex:'1000', height:'5%'}}></div>
        </main>
    )
};
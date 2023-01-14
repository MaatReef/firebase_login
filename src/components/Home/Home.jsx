import { Link , useNavigate} from "react-router-dom";
import { auth } from "../../firebase"
import styles from "./Home.module.css";

function salir() {
  return auth.signOut()
  navigate("/");
}
export function Home(props) {
  return (
    <div className={styles.innerBox}>
      <div >
        <div>
          <h1 style={{ textAlign: 'center' }}>
            <Link to="/login">{props.name?`Hora: 18:23pm`:"Login"}</Link>
          </h1>
          <br />
          <h1 style={{ textAlign: 'center' }}>
            <Link to="/signup">{props.name?`Temperatura: 21º`:"Registrar"}</Link>
          </h1>
        </div>
      </div>
      <h2 style={{ textAlign: 'center' }}>{props.name?`Bienvenido - ${props.name}`:""}</h2>
      <button onClick={salir} style={{ textAlign: 'center' }}>{props.name?`¿Deseas Salir?`:"Inicie sesión desde Login"}</button>
     
    </div>
  );
}
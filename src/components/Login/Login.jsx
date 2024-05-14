import {FaUser, FaLock} from 'react-icons/fa'
import {useState} from 'react'
import './login.css'
const Login = () => {
    const [userName, setUserName] = useState('') 
    const [password, setPassword] = useState('')
    const enviarForm = (event) =>{
        event.preventDefault()
        alert(`Enviando os dados ${userName} ${password} `)
    }

  return (
    <div className="container">
        <form onSubmit={enviarForm}>
            <h1>Faça seu login</h1>
            <div className='input'>
                <input type="text" required placeholder="E-mail" onChange={(e) => setUserName(e.target.value)} /> 
                <FaUser className='icon'/>
            </div>
           
            <div className='input'>
                <input type="password" required placeholder="Senha" onChange={(e) => setPassword(e.target.value)} /> 
                <FaLock className='icon'/>
            </div>

            <div className='lembre-mim'>
                <label><input type="checkbox" />Lembre de mim</label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className='criar-conta'>
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
);
}

export default Login
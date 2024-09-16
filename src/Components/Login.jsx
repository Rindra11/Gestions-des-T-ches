import { useState } from 'react'
import Logo from '../assets/Logo/login.svg'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`le email que vous avez entrer a: ${email}`)
    }

    return (
        <div className='container'>
          <div className='column-left'>
            <img src={Logo} alt="" />
          </div>
          <div className='column-right'>
            <div className='Header-right'>
                <h1 className=''>Connexion</h1>    
            </div>
    
            <form action="GET">
                <label htmlFor="">Adresse email <br />
                    <input type="text" value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='entrer votre email'/>
                </label>
                <div className=''>
                    <label htmlFor="">
                     <a href="http://">Mot de passe oublié?</a><br />
                     <input type="password" value={password}
                     onChange={(e) => setPassword(e.target.value)}   
                     placeholder='entrer votre mot de passe'/>
                    </label>  
                </div>
                <button type='submit' className=''>Se connecter</button>
            </form>
          </div>
          
          <div className='text-pink'>
            <label htmlFor="">Vous n'avez pas encore de compte?</label><br />
             <label htmlFor="">Inscrivez-vous?</label>
          </div>
        </div>
      )
}



export default Login

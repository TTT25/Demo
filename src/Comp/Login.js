import React from 'react';
import axios from 'axios';


export default class Login extends React.Component{
// export default function Login() {

    // const [username,setusername]=useState("");
    // const [password,setpassword]=useState("");


//    async function SignUP()
//     {
//         console.warn(username,password)
//         let item={username,password};
//         let result= await fetch("https://localhost:5001/api/user/authenticate",{method:'POST', headers:{
//         "Content-Type":"application/json",
//         "Accept":'application/json'

//         },body:JSON.stringify(item)
//     });
//     result = result.json();
//     localStorage.setItem(JSON.stringify(result))

    // }

    state = {
        username: '',
        password:''
      }
      handleChange = event => {
        this.setState({ username: event.target.value });
      }

      handleChange1 = event => {
        this.setState({ password: event.target.value });
      }
    
    handleSubmit = event => {
    event.preventDefault();

    // const SignUP = (username, password) => {
    // return 
    axios.post("https://localhost:44375/api/User/authenticate", {
        username:this.state.username,
        password:this.state.password,
        // username,
        // password
      })
      .catch((error) => {
        return error.response;
      });
//   };
}

    render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1>Login Page </h1>
         <div className="col-sm-6">
           {/* <input type="text" placeholder="email" className= "from-control" onChange={(e)=>setusername(e.target.value)}/> */}
           <input type="text" placeholder="email" className= "from-control"  onChange={this.handleChange}/>
           <br />
               {/* <input type="text" placeholder="email" className= "from-control" onChange={(e)=>setpassword(e.target.value)}/> */}
           <input type="password" placeholder="pass" className= "from-control" onChange={this.handleChange1}/>
           <br />
           {/* <button onClick={SignUP} className="btn btn-primary">Login</button> */}
           <button onClick={this.handleSubmit} className="btn btn-primary">Login</button>
         </div>
        </header>
      </div>
    );
  }
}
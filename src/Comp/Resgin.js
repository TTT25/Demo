import React,{ useEffect,useState} from 'react';
import ProductApi from '../api/productApi';





// export default class Resgin extends React.Component{
export default function Resgin() {

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

//     state = {
//         username: '',
//         password:'',
//         email:'',
//         name:'',
//         phoneNumber:''

//       }
//       handleChange = event => {
//         this.setState({ username: event.target.value });
//       }

//       handleChange1 = event => {
//         this.setState({ password: event.target.value });
//       }
//       handleChange2 = event => {
//         this.setState({ email: event.target.value });
//       }
    
//       handleChange3 = event => {
//         this.setState({ name: event.target.value });
//       }
    
//       handleChange4 = event => {
//         this.setState({ phoneNumber: event.target.value });
//       }
    
    
//     handleSubmit = event => {
//     event.preventDefault();

//     // const SignUP = (username, password) => {
//     // return 
//     axios.post("https://localhost:44375/api/User/authenticate", {
//         username:this.state.username,
//         password:this.state.password,
       
//         email:this.state.email,
//         name:this.state.name,
//         phoneNumber:this.state.name

//         // username,
//         // password,
//         // email,
//         // name,
//         // 
//       })
//       .catch((error) => {
//         return error.response;
//       });
// //   };
// }
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    

    async function SignUP(){
      console.warn(username,password,email,name,phoneNumber);
      const fetchRes = async()=>{
        try{
          console.log(username,password,email,name,phoneNumber);
          await ProductApi.register(username,password,email,name,phoneNumber);
        
       }catch(error){
        console.log('Fail',error);
    }
  }
}

// useEffect(()=>{
//     const fetchRes = async()=>{
//       try{
//         const response = await ProductApi.register(username,password,email,name,phoneNumber);
      
//      }catch(error){
//       console.log('Fail',error);
//     }
//   }
//     fetchRes()
// });

    // render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1>Login Page </h1>
         <div className="col-sm-6">
           <input type="text" placeholder="UserName" className= "from-control" onChange={(e)=>setusername(e.target.value)}/>
           {/* <input type="text" placeholder="username" className= "from-control"  onChange={this.handleChange}/> */}
           <br />
               <input type="pass" placeholder="pass" className= "from-control" onChange={(e)=>setpassword(e.target.value)}/>
           {/* <input type="password" placeholder="pass" className= "from-control" onChange={this.handleChange1}/> */}
           <br />
           <input type="text" placeholder="email" className= "from-control" onChange={(e)=>setemail(e.target.value)}/>
           {/* <input type="text" placeholder="name" className= "from-control" onChange={this.handleChange2}/> */}
           <br />
           <input type="text" placeholder="name" className= "from-control" onChange={(e)=>setname(e.target.value)}/>
           {/* <input type="text" placeholder="number" className= "from-control" onChange={this.handleChange3}/> */}
           <br />
           <input type="text" placeholder="phone" className= "from-control" onChange={(e)=>setphoneNumber(e.target.value)}/>
           {/* <input type="text" placeholder="number" className= "from-control" onChange={this.handleChange4}/> */}
           <br />
           <button onClick={SignUP} className="btn btn-primary">Login</button>
           {/* <button onClick={this.handleSubmit} className="btn btn-primary">Login</button> */}
         </div>
        </header>
      </div>
    );
  // }
}
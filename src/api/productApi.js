import axiosClient from "./axiosClient";


const ProductApi = {
    
    register:(username,password,email,name,phoneNumber)=>{
        const url = '/User';
        return axiosClient.post(url,{ username,password,email,name,phoneNumber});

    }
}
export default ProductApi;

    
   
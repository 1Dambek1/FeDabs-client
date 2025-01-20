import api from "./api"
interface ILogin  {
        email: string;
        password: string;

}

export async function login (credentials:ILogin)  {
    const response = await api.post("/auth/login", credentials);
    return response.data
}

export const logout = () =>{
    localStorage.removeItem("token");
}

export const fetchCurrentUser = async () => {
    const response = await api.get('/auth/me'); 
    return response.data;
  };
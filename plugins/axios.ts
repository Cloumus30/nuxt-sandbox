import axios from "axios";

export default defineNuxtPlugin((nuxtApp) =>{
    const defaultUrl = "https://dummyjson.com";
    const baseUrl = "https://b67944447d8d73.lhr.life";

    let apiDummy = axios.create({
        baseURL: defaultUrl,
        headers:{
            common:{

            }
        }
    });

    let apiBase = axios.create({
        baseURL: baseUrl,
        headers:{
         
         common:{
            // 'localtonet-skip-warning':true,
         }
        }
    })

    // apiBase.interceptors.request.use((config) =>{
    //     config.headers.set('localtonet-skip-warning', true);
    //     return config;
    // })
    
    return {
        provide:{
            apiDummy:apiDummy,
            apiBase: apiBase,
        }
    }
})
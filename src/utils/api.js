import axios from "axios";

// yapılan her istekte geçerli olmasını işstediğimiz ayarları tanımladığınız bir axios örneği oluşturuyoruz
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //baseURL:"https://yt-api.p.rapidapi.com",
    params: {
        geo: 'TR',
        lang: 'tr'
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        //'X-RapidAPI-Key': "5a0d6cda68msh0c88a68f0e5e0bcp108355jsn1db8195d2169",
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      },
})
export default api;
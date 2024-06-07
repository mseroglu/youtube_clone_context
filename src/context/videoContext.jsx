import { useEffect, useState, createContext } from "react";

import { categories } from "../constants";
import api from "../utils/api";

//* 1.adım: context yapısının temelini oluşturduk
export const VideoContext = createContext();

//* 2.adım: sağlayıcı bileşeni oluşturma
export const VideoProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const type = selectedCategory.type;
        // seçilen kategori menu ise durdur
        if (type === "menu") return;

        //yüklemeyi true ya çek
        setIsLoading(true);

        const url = type === "home" || type === "trending" ? `/${type}` : `/search?query=${selectedCategory.name}`;
                
        api.get(url)
        .then((res) => {setVideos(res.data.data); setError(null);})
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false))        

    }, [selectedCategory])
    
    return (
        <VideoContext.Provider value={{ selectedCategory, setSelectedCategory, isLoading, error, videos }}>
            {children}
        </VideoContext.Provider>)

}
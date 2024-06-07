import { Link } from "react-router-dom";
import { categories } from "../constants";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);
  
  return (
    <div className="flex flex-col p-1 md:p-3 gap-3">
      {
      categories.map((item, i) => (        
        <Link key={i} onClick={() => setSelectedCategory(item)}>          
          <div className={` ${selectedCategory.name === item.name && "bg-[#46342c]" } flex flex-col p-2
           w-[50px] md:w-[100px] lg:flex-row items-center text-md lg:gap-5 lg:w-[200px] hover:bg-gray-800 rounded-xl`}>
            <span className="text-3xl">{ item.icon }</span>
            <span className="max-md:hidden line-clamp-1">{ item.name }</span>
          </div>
          {item.divider && <hr/> }
        </Link>
      ))
      }
      

    </div>
  )
}

export default SideBar;

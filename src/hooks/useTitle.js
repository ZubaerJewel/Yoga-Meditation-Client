import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - Yoga School`;
     }, [title])
};

export default useTitle;
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect,useState } from "react";

const BOOK_URL: string = 'https://my-json-server.typicode.com/cutamar/mock/books'


export function useBook(id:string|undefined) {
  const url:string = id?`${BOOK_URL}/${id}`:BOOK_URL
  const [favorites,setFavorites] = useState<string[]>([])


  const { isPending, error, data, isError } = useQuery({
      queryKey: [url],
      queryFn: () =>
          fetch(url).then((res) =>
              res.json(),
          ),
          staleTime:1000*60*60*3,    
  })



  useEffect(()=>{
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(storedFavorites)
    
  },[])


  const toggleFavorite = useCallback((e:React.SyntheticEvent<HTMLButtonElement, MouseEvent>,id:string)=>{
    e.stopPropagation()
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  },[])
  return { isPending, error, data, isError,toggleFavorite,favorites }
}


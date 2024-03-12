
import useData from "./useData";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
  }
  
  // interface FetchGameResponse {
  //   count: number;
  //   results: Games[];
  // }

  // removed after writing useData hook
const useGames = () => useData<Games>('/games')
// {
//     const [games, setGames] = useState<Games[]>([]);
//     const [error, setError] = useState("");
//     const[isLoading, setLoading]=useState(false);
  
//     useEffect(() => {
//         const controller = new AbortController();

//     setLoading(true);
//       apiClient
//         .get<FetchGameResponse>("/games",{signal:controller.signal})
//         .then((res) => {setGames(res.data.results);setLoading(false);})
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message);
//             setLoading(false);
//         });
//         return ()=> controller.abort();
//     },[]);

//     return{games,error,isLoading}
// }
// removed after useData hook

export default useGames;
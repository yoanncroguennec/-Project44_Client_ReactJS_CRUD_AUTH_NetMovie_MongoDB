import { useOutletContext } from "react-router-dom";
import ListMovie from "../../components/common/movies/ListMovie";
import { Header, Pagination } from "../../components/layouts";
import SearchByCriteria from "../../components/common/appLayout/SearchByCriteria";
import Featured from "./Featured";
import { useState } from "react";

export default function ListMovies() {
const [toggled, setToggled] = useState(true);
  const [obj, page, setPage] = useOutletContext();

  console.log('====================================');
  console.log("rrr", {obj});
  console.log('====================================');


    function toggleButton(){
      setToggled(!toggled);
    };

  return (
    <div>
      <Featured />
      {/* <div>
        <SearchByCriteria />
      </div>
      <div>
        <Pagination
          page={page}
          limit={obj.limit ? obj.limit : 0}
          total={obj.total ? obj.total : 0}
          setPage={(page) => setPage(page)}
        />
      </div> */}
      {/* <Header /> */}
      <button onClick={toggleButton}>Togglr</button>
      {toggled ? "hhh" : "aaaz"}
      <div>
        <ListMovie movies={obj.movies ? obj.movies : []} />
      </div>
      {/* <Pagination
        page={page}
        limit={obj.limit ? obj.limit : 0}
        total={obj.total ? obj.total : 0}
        setPage={(page) => setPage(page)}
      /> */}
    </div>
  );
}

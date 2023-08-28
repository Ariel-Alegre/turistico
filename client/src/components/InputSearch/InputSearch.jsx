import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./InputSearch.scss";

export default function InputSearch() {
  return (
    <div className="input-search">
        <div>

      <input type="text" placeholder="Buscar..." />
      <button className="inputsearch-icon" >
        <SearchRoundedIcon  className="icons-searchinput" />
      </button>
        </div>
    </div>
  );
}

import "../css/index.css";
import search from "./search";
import render from "./render";

const id = prompt('quien es ese poquemo?')
search(id)
  .then((data) => {
    render(data)
  })
  .catch(() => {
    console.log('no se encontraron registros')
  })
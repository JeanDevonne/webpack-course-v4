import "../css/index.css";
import text from "./text.js";

text();

if (module.hot) {
  module.hot.accept("./text.js", function() {
    text();
  });
}

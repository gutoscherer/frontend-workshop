import _ from "lodash";
import './style.css';
import Sponge from './sponge.png';

function component() {
  const element = document.createElement("div");
  const mySponge = new Image();
  mySponge.src = Sponge;

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');
  element.appendChild(mySponge);

  return element;
}

document.body.appendChild(component());

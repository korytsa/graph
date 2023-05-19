import React from "react";
import {
  Graph
} from "react-d3-graph";

import './style.css';
import config from "./config";
import data from "./data";

export function App () {
  return(
    <div className="main">
       <Graph id = "graph"
        config = {config}
        data = {data}
        />
    </div>
  )
}

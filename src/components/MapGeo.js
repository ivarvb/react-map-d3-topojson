import React, {Component, useRef, useEffect} from 'react';

import * as topojson from "topojson-client";
import * as d3 from 'd3'
import './MapGeo.css';

class MapGeo extends Component {
  constructor() {
    super();
    this.state = {
      //usData: null,
      usCongress: null 
    };

  }

  componentWillMount() {

    d3.queue().
    defer(d3.json, "https://raw.githubusercontent.com/Swizec/113th-congressional-districts/master/public/us-congress-113.json").
    await((error, usCongress) => {
      this.setState({
        //usData,
        usCongress });

    });
  }

  componentDidUpdate() {
    const svg =  d3.select(this.refs.anchor);

    let width = this.props.width;
    let height = this.props.height;
    let counties = this.props.counties;
    let handled = this.props.handled;

    //install d3 & topojson
    //npm install d3@4
    //npm install topojson-client
    const projection = d3.geoAlbers().
    scale(1000).
    translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    const congress = this.state.usCongress;

    svg.append("g").
    attr("class", "districts").
    attr("clip-path", "url(#clip-land)").
    selectAll("path").
    data(topojson.feature(congress, congress.objects.districts).features).
    enter().append("path").
    attr("d", path).
      on("click", function(d) {
        //// Use for the actual map,
        //// where d.id is an int attribute in the .json file
        //// to identify each countie.
        // let idcounties = d.id

        let idcounties = 1
        handled(counties[idcounties]);
      }).
    append("title").
    text(function (d) {return d.id;});
  }

  render() {
    const { usCongress } = this.state;
    if (!usCongress) {
      return null;
    }
    return React.createElement("g", { ref: "anchor" });
  }
}

export default MapGeo;




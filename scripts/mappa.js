// Interpret the data as the correct format. Use d3.csv or d3.tsv accordingly.
data = d3.csv("/assets/dataset/data_mappa.csv");

//percorso immagini
let percorsoImmagini = "/assets/mappa_imgs/normale/";
let promptArray = [
  "climate-change",
  "climate-crisis",
  "climate-emergency",
  "people-affected-by-climate-change",
  "people-affected-by-extreme-weather",
  "people-affected-by-floodings",
  "people-affected-by-droughts",
  "people-affected-by-smog",
  "people-affected-by-wildfires",
  "people-engaging-in-sustainability",
  "people-recycling-for-sustainability",
  "people-zero-emissions",
  "people-using-renewable-energy",
  "people-engaging-in-circular-economy",
  "people-living-eco-friendly",
  "climate-change-engineers",
  "climate-change-volunteers",
  "people-buying-second-hand-for-sustainability",
  "people-careful-to-zero-waste",
  "people-daily-zero-waste-choices",
  "people-ethics-of-reuse",
  "sustainable-projects-for-preventing-climate-change",
  "climate-change-activists",
  "climate-change-researchers",
  "companies-making-greenwashing",
  "consumerism-affecting-climate-change",
];

//boolean filtri
let a = false;
let b = false;
let c = false;
let d = false;
let e = false;
let f = false;
let g = false;
let h = false;
let all = false;

// Select the container where we will put our HTML elements

for (let i = 0; i < promptArray.length; i++) {
  let divId = "#" + promptArray[i];
  let promptDiv = d3.select(divId);

  data.then(function (data) {
    // crea div per ogni elemento con prompt climate change
    let card = promptDiv
      .selectAll("div")
      .data(data)
      .join("div")
      // all'hover fai apparire il prompt
      // .attr("onmouseover", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=1";
      // })
      // .attr("onmouseout", function () {
      //   return "d3.select(this)._groups[0][0].lastChild.style.opacity=0";
      // })
      .attr("class", "card")
      // crea div solo per le immagini con prompt climate change
      .style("display", "none")
      .filter(function (d) {
        return d.prompt == promptArray[i];
      })
      .style("display", "block");

    // IMMAGINI
    card
      .append("img")
      .attr("class", "card-img-top")
      .attr("src", function (d) {
        let link_image = d.link_image;
        let path = percorsoImmagini;
        // Concatenate the path and the link_image of the image
        return path + link_image;
      });

    // // PROMPT
    // card
    //   .append("div")
    //   .attr("class", "card-prompt")
    //   .text(function (d) {
    //     return "prompt: " + d.prompt;
    //   });


    // let testo = d3.select("#Testo");
    // testo
    // .text(scritta)


  });
}

//––––––––––––––––––––––––––––––––––––––––

//FILTRI DEI BIAS
let biasContainer = d3.select("#bias");

// crea il bottone all
// biasContainer
//   .append("button")
//   .attr("class", "bottoniBias")
//   .attr("id", "bottoneBiasAll")
//   .text("ALL")
//   .style("background", "rgba(0, 0, 0, 0.7)")
//   .style("color", "white")
//   .on("click", function () {
//     d3.selectAll(".card").style("opacity", "1");
//     a = false;
//     b = false;
//     c = false;
//     d = false;
//     e = false;
//     f = false;
//     g = false;
//     h = false;
//     // diversifica visivamente il bottone attivo e cambia titolo
//     let bottoneAll = d3.select("#bottoneBiasAll");
//     bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
//     bottoneAll.style("color", "white");
//     let titolo = d3.select("#main-title");
//     titolo.text("Explore all the biases");
//     // resetta tutti gli altri
//     let bottoneA = d3.select("#bottoneBiasA");
//     bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneA.style("color", "black");
//     let bottoneB = d3.select("#bottoneBiasB");
//     bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneB.style("color", "black");
//     let bottoneC = d3.select("#bottoneBiasC");
//     bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneC.style("color", "black");
//     let bottoneD = d3.select("#bottoneBiasD");
//     bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneD.style("color", "black");
//     let bottoneE = d3.select("#bottoneBiasE");
//     bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneE.style("color", "black");
//     let bottoneF = d3.select("#bottoneBiasF");
//     bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneF.style("color", "black");
//     let bottoneG = d3.select("#bottoneBiasG");
//     bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneG.style("color", "black");
//     let bottoneH = d3.select("#bottoneBiasH");
//     bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
//     bottoneH.style("color", "black");
//   });

// crea il bottone A
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasA")
  .text("IT'S GIVING *RACISM*")
  // al click, resetta e mostra solo le immagini A
  .on("click", function () {
    if (a == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.A == "FALSE";
        })
        .style("opacity", "0.2");
      a = true;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneA.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias uno...");
      // resetta tutti gli altri
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (a == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.A == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasA");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone B
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasB")
  .text("BIG GREEN DREAM TEAM")
  // al click, resetta e mostra solo le immagini B
  .on("click", function () {
    if (b == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.B == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = true;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneB.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias due...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (b == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.B == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasB");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone C
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasC")
  .text("LANDSCAPE DÉJÀ VU")
  // al click, resetta e mostra solo le immagini C
  .on("click", function () {
    if (c == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.C == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = true;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneC.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias tre...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (c == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.C == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasC");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone D
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasD")
  .text("SOLUTIONS, BUT GREENWASHED")
  // al click, resetta e mostra solo le immagini D
  .on("click", function () {
    if (d == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.D == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = true;
      e = false;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneD.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias quattro...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (d == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.D == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasD");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone E
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasE")
  .text("CLIMATE PATCHWORK")
  // al click, resetta e mostra solo le immagini E
  .on("click", function () {
    if (e == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.E == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = true;
      f = false;
      g = false;
      h = false;

      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneE.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias cinque...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (e == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.E == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;

      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasE");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone F
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasF")
  .text("SCRIPTS BEFORE PICS")
  // al click, resetta e mostra solo le immagini F
  .on("click", function () {
    if (f == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.F == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = true;
      g = false;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneF.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias sei...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneG.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (f == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.F == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasF");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });

// crea il bottone G
biasContainer
  .append("button")
  .attr("class", "bottoniBias")
  .attr("id", "bottoneBiasG")
  .text("DOWN TO EARTH")
  // al click, resetta e mostra solo le immagini G
  .on("click", function () {
    if (g == false) {
      d3.selectAll(".card")
        .style("opacity", "1")
        .filter(function (d) {
          return d.G == "FALSE";
        })
        .style("opacity", "0.2");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = true;
      h = false;
      // diversifica visivamente il bottone attivo e cambia titolo
      let bottoneG = d3.select("#bottoneBiasG");
      bottoneG.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneG.style("color", "white");
      let titolo = d3.select("#main-title");
      // titolo.text("Bias sette...");
      // resetta tutti gli altri
      let bottoneA = d3.select("#bottoneBiasA");
      bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneA.style("color", "black");
      let bottoneB = d3.select("#bottoneBiasB");
      bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneB.style("color", "black");
      let bottoneC = d3.select("#bottoneBiasC");
      bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneC.style("color", "black");
      let bottoneD = d3.select("#bottoneBiasD");
      bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneD.style("color", "black");
      let bottoneE = d3.select("#bottoneBiasE");
      bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneE.style("color", "black");
      let bottoneF = d3.select("#bottoneBiasF");
      bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneF.style("color", "black");
      let bottoneH = d3.select("#bottoneBiasH");
      bottoneH.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneH.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
      bottoneAll.style("color", "black");
      // al secono click sul bottone, togli il filtro e mostra tutte le img
    } else if (g == true) {
      d3.selectAll(".card")
        .filter(function (d) {
          return d.G == "FALSE";
        })
        .style("opacity", "1");
      a = false;
      b = false;
      c = false;
      d = false;
      e = false;
      f = false;
      g = false;
      h = false;
      // resetta formattazione bottone e titolo
      let bottone = d3.select("#bottoneBiasG");
      bottone.style("background", "rgba(255, 255, 255, 0.7)");
      bottone.style("color", "black");
      let bottoneAll = d3.select("#bottoneBiasAll");
      bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
      bottoneAll.style("color", "white");
      let titolo = d3.select("#main-title");
      titolo.text("Explore all the biases");
    }
  });


  // crea il bottone H
biasContainer
.append("button")
.attr("class", "bottoniBias")
.attr("id", "bottoneBiasH")
.text("NONSENSE OUT OF HAND")
// al click, resetta e mostra solo le immagini H
.on("click", function () {
  if (h == false) {
    d3.selectAll(".card")
      .style("opacity", "1")
      .filter(function (d) {
        return d.H == "FALSE";
      })
      .style("opacity", "0.2");
    a = false;
    b = false;
    c = false;
    d = false;
    e = false;
    f = false;
    g = false;
    h = true;

    // diversifica visivamente il bottone attivo e cambia titolo
    let bottoneH = d3.select("#bottoneBiasH");
    bottoneH.style("background", "rgba(0, 0, 0, 0.7)");
    bottoneH.style("color", "white");
    // let titolo = d3.select("#main-title");
    // titolo.text("Bias sette...");
    // resetta tutti gli altri
    let bottoneA = d3.select("#bottoneBiasA");
    bottoneA.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneA.style("color", "black");
    let bottoneB = d3.select("#bottoneBiasB");
    bottoneB.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneB.style("color", "black");
    let bottoneC = d3.select("#bottoneBiasC");
    bottoneC.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneC.style("color", "black");
    let bottoneD = d3.select("#bottoneBiasD");
    bottoneD.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneD.style("color", "black");
    let bottoneE = d3.select("#bottoneBiasE");
    bottoneE.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneE.style("color", "black");
    let bottoneF = d3.select("#bottoneBiasF");
    bottoneF.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneF.style("color", "black");
    let bottoneG = d3.select("#bottoneBiasG");
    bottoneG.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneG.style("color", "black");
    let bottoneAll = d3.select("#bottoneBiasAll");
    bottoneAll.style("background", "rgba(255, 255, 255, 0.7)");
    bottoneAll.style("color", "black");
    // al secono click sul bottone, togli il filtro e mostra tutte le img
  } else if (h == true) {
    d3.selectAll(".card")
      .filter(function (d) {
        return d.H == "FALSE";
      })
      .style("opacity", "1");
    a = false;
    b = false;
    c = false;
    d = false;
    e = false;
    f = false;
    g = false;
    h = false;
    // resetta formattazione bottone e titolo
    let bottone = d3.select("#bottoneBiasH");
    bottone.style("background", "rgba(255, 255, 255, 0.7)");
    bottone.style("color", "black");
    let bottoneAll = d3.select("#bottoneBiasAll");
    bottoneAll.style("background", "rgba(0, 0, 0, 0.7)");
    bottoneAll.style("color", "white");
    let titolo = d3.select("#main-title");
    titolo.text("Explore all the biases");
  }
});


//PROMPT che SEGUE IL CURSORE
// function scrittaSi(x) {
//   let t = x.id;
//   let tDef = t.replaceAll('-', ' ');
//   let Testo = document.getElementById("Testo");
//   Testo.innerText = "Prompt: " + tDef;

//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "block";

//   const onMouseMove = (e) => {
//   Box.style.left = e.pageX + "px";
//   Box.style.top = e.pageY + "px";
// };
// document.addEventListener("mousemove", onMouseMove);
// }

// function ScrittaNo(x) {
//   let Box = document.getElementById("BoxTesto");
//   Box.style.display = "none";
// }


//Menu
let menuSx = d3.select("#sx");
let menuDx = d3.select("#dx");
let menuLogo = d3.select("#title");

// crea il bottone CATALOGUE
menuSx
  .append("a")
  .attr("href", "/pages/catalogo.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "catalogue")
  .text("BIAS CATALOGUE")
  .on("click", function () {});

// crea il bottone ATLAS
menuSx
  .append("a")
  .attr("href", "/pages/mappa.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "atlas")
  .text("PROMPT EXPLORER");
// .on("click", function () {
// });

// crea il bottone ABOUT
menuDx
  .append("a")
  .attr("href", "/pages/about.html")
  .append("button")
  .attr("class", "bottoniMenu")
  .attr("id", "about")
  .text("ABOUT");
// .on("click", function () {
// });
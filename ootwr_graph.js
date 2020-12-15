function toggle() {
  var help = document.getElementById("help");
  if (help.style.display === "none") {
    help.style.display = "flex";
  } else {
    help.style.display = "none";
  }
}
/*
lightbox
https://codepen.io/darcyvoutt/pen/MaamWg
*/
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id, url, playername, version) {
  var video = url;
  document.getElementById(video_id).src = video; // adding URL to video src in html
  document.getElementById(div).style.display = 'flex';
  document.getElementById('player_version').innerHTML = "Player: " + playername + " || Version: " + version;
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
  document.getElementById('player_version').innerHTML = '';
}
/*
chart js
https://www.chartjs.org/
*/

const xmin = moment('2003-01-01', "YYYY-MM-DD");
const xmax = moment('2021-06-01', "YYYY-MM-DD");

const dates0 = new Array; // array of dates0
const times0 = new Array; // array of times0
const players0 = new Array; // array of player names
const versions0 = new Array; // array of game versions0
const videos0 = new Array; //array of videos0 of speedruns
const plot_data0 = new Array; // array of points
var first_date;
var last_date;

const dates1 = new Array; // array of dates0
const times1 = new Array; // array of times0
const players1 = new Array; // array of player names
const versions1 = new Array; // array of game versions0
const videos1 = new Array; //array of videos0 of speedruns
const plot_data1 = new Array; // array of points
var first_date1;
var last_date1;

const dates2 = new Array; // array of dates0
const times2 = new Array; // array of times0
const players2 = new Array; // array of player names
const versions2 = new Array; // array of game versions0
const videos2 = new Array; //array of videos0 of speedruns
const plot_data2 = new Array; // array of points
var first_date2;
var last_date2;

const dates3 = new Array; // array of dates0
const times3 = new Array; // array of times0
const players3 = new Array; // array of player names
const versions3 = new Array; // array of game versions0
const videos3 = new Array; //array of videos0 of speedruns
const plot_data3 = new Array; // array of points
var first_date3;
var last_date3;

const dates4 = new Array; // array of dates0
const times4 = new Array; // array of times0
const players4 = new Array; // array of player names
const versions4 = new Array; // array of game versions0
const videos4 = new Array; //array of videos0 of speedruns
const plot_data4 = new Array; // array of points
var first_date4;
var last_date4;

Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.defaultFontFamily = 'Koholint';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#303030';

// get data from csv
async function getData0() {
  const response = await fetch('ootwr_history.csv');
  const data = await response.text();
  const rows_unparsed = data.split('\n'); // Raw strings
  let i = 0;
  rows_unparsed.forEach(elt => {
    let row = elt.split(',');
    let t = row[1].split(':');
    dates0[i] = moment(row[0], "YYYY-MM-DD");
    times0[i] = (parseInt(t[0]) * 3600) + (parseInt(t[1]) * 60) + parseInt(t[2]);
    players0[i] = row[2];
    versions0[i] = row[3];
    videos0[i] = row[4];
    plot_data0.push({
      'x': dates0[i],
      'y': times0[i]
    });
    i++;
  });
  first_date = new Date(dates0[dates0.length - 1]);
  last_date = new Date(dates0[0])
}
// get second csv data
async function getData1() {
  const response = await fetch('ootwr_history_100.csv');
  const data = await response.text();
  const rows_unparsed = data.split('\n'); // Raw strings
  let i = 0;
  rows_unparsed.forEach(elt => {
    let row = elt.split(',');
    let t = row[1].split(':');
    dates1[i] = moment(row[0], "YYYY-MM-DD");
    times1[i] = (parseInt(t[0]) * 3600) + (parseInt(t[1]) * 60) + parseInt(t[2]);
    players1[i] = row[2];
    versions1[i] = row[3];
    videos1[i] = row[4];
    plot_data1.push({
      'x': dates1[i],
      'y': times1[i]
    });
    i++;
  });
  first_date1 = new Date(dates1[dates1.length - 1]);
  last_date1 = new Date(dates1[0])
}

// get third csv data
async function getData2() {
  const response = await fetch('ootwr_history_mst.csv');
  const data = await response.text();
  const rows_unparsed = data.split('\n'); // Raw strings
  let i = 0;
  rows_unparsed.forEach(elt => {
    let row = elt.split(',');
    let t = row[1].split(':');
    dates2[i] = moment(row[0], "YYYY-MM-DD");
    times2[i] = (parseInt(t[0]) * 3600) + (parseInt(t[1]) * 60) + parseInt(t[2]);
    players2[i] = row[2];
    versions2[i] = row[3];
    videos2[i] = row[4];
    plot_data2.push({
      'x': dates2[i],
      'y': times2[i]
    });
    i++;
  });
  first_date2 = new Date(dates2[dates2.length - 1]);
  last_date2 = new Date(dates2[0])
}

// get fourth csv data
async function getData3() {
  const response = await fetch('ootwr_history_all_dungeons.csv');
  const data = await response.text();
  const rows_unparsed = data.split('\n'); // Raw strings
  let i = 0;
  rows_unparsed.forEach(elt => {
    let row = elt.split(',');
    let t = row[1].split(':');
    dates3[i] = moment(row[0], "YYYY-MM-DD");
    times3[i] = (parseInt(t[0]) * 3600) + (parseInt(t[1]) * 60) + parseInt(t[2]);
    players3[i] = row[2];
    versions3[i] = row[3];
    videos3[i] = row[4];
    plot_data3.push({
      'x': dates3[i],
      'y': times3[i]
    });
    i++;
  });
  first_date3 = new Date(dates3[dates3.length - 1]);
  last_date3 = new Date(dates3[0])
}

// get fifth csv data
async function getData4() {
  const response = await fetch('ootwr_history_glitchless_100.csv');
  const data = await response.text();
  const rows_unparsed = data.split('\n'); // Raw strings
  let i = 0;
  rows_unparsed.forEach(elt => {
    let row = elt.split(',');
    let t = row[1].split(':');
    dates4[i] = moment(row[0], "YYYY-MM-DD");
    times4[i] = (parseInt(t[0]) * 3600) + (parseInt(t[1]) * 60) + parseInt(t[2]);
    players4[i] = row[2];
    versions4[i] = row[3];
    videos4[i] = row[4];
    plot_data4.push({
      'x': dates4[i],
      'y': times4[i]
    });
    i++;
  });
  first_date4 = new Date(dates4[dates4.length - 1]);
  last_date4 = new Date(dates4[0])
}


// chart js starts here
const chart_data = {
  datasets: [{
      borderWidth: 2,
      pointHitRadius: 10,
      pointRadius: 5,
      pointHoverRadius: 5,
      label: 'Any%',
      data: plot_data0,
      steppedLine: 'after',
      pointStyle: 'triangle',
      borderColor: '#732C32',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: '#732C32',
    },
    {
      borderWidth: 2,
      pointHitRadius: 10,
      pointRadius: 5,
      pointHoverRadius: 5,
      label: '100%',
      data: plot_data1,
      steppedLine: 'after',
      pointStyle: 'triangle',
      borderColor: '#618C56',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: '#618C56',
    },
    {
      borderWidth: 2,
      pointHitRadius: 10,
      pointRadius: 5,
      pointHoverRadius: 5,
      label: 'MST',
      data: plot_data2,
      steppedLine: 'after',
      pointStyle: 'triangle',
      borderColor: '#A6874E',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: '#A6874E',
    },
    {
      borderWidth: 2,
      pointHitRadius: 10,
      pointRadius: 5,
      pointHoverRadius: 5,
      label: 'All Dungeons',
      data: plot_data3,
      steppedLine: 'after',
      pointStyle: 'triangle',
      borderColor: '#BF712C',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: '#BF712C',
    },
    {
      borderWidth: 2,
      pointHitRadius: 10,
      pointRadius: 5,
      pointHoverRadius: 5,
      label: 'Glitchless Any%',
      data: plot_data4,
      steppedLine: 'after',
      pointStyle: 'triangle',
      borderColor: '#A65132',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: '#A65132',
    }

  ]
};

async function chart() {
  await getData0();
  await getData1();
  await getData2();
  await getData3();
  await getData4();
  const ctx = document.getElementById('myChart');
  const myLineChart = new Chart(ctx, {
    type: 'line',
    data: chart_data,
    options: {
      tooltips: {
        titleFontFamily: 'Arial',
        bodyFontFamily: 'Arial',
        bodyFontSize: 10,
        mode: 'nearest',
        //position: 'nearest',
        callbacks: {
          label: function(t, data) {
            var indice = t.index;
            if (t.datasetIndex === 0) {
              return players0[indice] + ' // ' + Math.floor((times0[indice] % 86400) / 3600) + 'h ' + Math.floor(((times0[indice] % 86400) % 3600) / 60) + 'm ' + ((times0[indice] % 86400) % 3600) % 60 + 's // ' + versions0[indice];
            }
            if (t.datasetIndex === 1) {
              return players1[indice] + ' // ' + Math.floor((times1[indice] % 86400) / 3600) + 'h ' + Math.floor(((times1[indice] % 86400) % 3600) / 60) + 'm ' + ((times1[indice] % 86400) % 3600) % 60 + 's // ' + versions1[indice];
            }
            if (t.datasetIndex === 2) {
              return players2[indice] + ' // ' + Math.floor((times2[indice] % 86400) / 3600) + 'h ' + Math.floor(((times2[indice] % 86400) % 3600) / 60) + 'm ' + ((times2[indice] % 86400) % 3600) % 60 + 's // ' + versions2[indice];
            }
            if (t.datasetIndex === 3) {
              return players3[indice] + ' // ' + Math.floor((times3[indice] % 86400) / 3600) + 'h ' + Math.floor(((times3[indice] % 86400) % 3600) / 60) + 'm ' + ((times3[indice] % 86400) % 3600) % 60 + 's // ' + versions3[indice];
            }
            if (t.datasetIndex === 4) {
              return players4[indice] + ' // ' + Math.floor((times4[indice] % 86400) / 3600) + 'h ' + Math.floor(((times4[indice] % 86400) % 3600) / 60) + 'm ' + ((times4[indice] % 86400) % 3600) % 60 + 's // ' + versions4[indice];
            }
          }
        },
      },
      //end tooltips
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            parser: 'MM/DD/YYYY HH:mm',
            tooltipFormat: 'MMMM DD, YYYY',
            unit: 'year',
            displayFormats: {
              year: 'YYYY'
            }
          },
          ticks: {
            min: first_date,
            max: last_date,
          }
        }],
        yAxes: [{
          ticks: {
            userCallback: function(v) {
              return epoch_to_hh_mm_ss(v)
            },
            max: 28800,
            min: 0,
            stepSize: 60 * 30
          }
        }]
      },
      // annotations
      annotation: {
        mode: 'index',
        axis: 'x',
        events: ['click', 'mouseenter', 'mouseleave'],
        drawTime: 'beforeDatasetsDraw',
        annotations: [{
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[72],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Arbitrary Code Execution',
              yAdjust: 30,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[93],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Get Item Delay',
              yAdjust: 55,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[111],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Void Warp',
              yAdjust: 30,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[142],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Wrong Warp',
              yAdjust: 5,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[162],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Door of Time Skip',
              yAdjust: 30,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[164],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 2,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Reverse Bottle Adventure',
              yAdjust: 55,
            }
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[166],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 1,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'top',
              content: 'Early Shadow & Spirit Temples',
              yAdjust: 30,
            },
          },

          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: dates0[167],
            borderColor: '#6C7339',
            borderDash: [10, 10],
            borderWidth: 1,
            label: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: "top",
              content: 'Ganon\'s Trials Skip',
              yAdjust: 5,
            }
          }
        ]
      },
      plugins: {
        // Start zoom options
        zoom: {
          // Container for pan options
          pan: {
            enabled: true,
            mode: 'xy',
            // Pan Range
            rangeMin: {
              x: first_date,
              y: 0
            },
            rangeMax: {
              x: last_date,
              y: 8 * 3600
            },
          },
          // Container for zoom options
          zoom: {
            enabled: true,
            mode: 'xy',
            rangeMin: {
              x: first_date,
              y: 0
            },
            rangeMax: {
              x: last_date,
              y: 8 * 3600
            },
          },
        }, // end zoom options
      },
    }
  });

  ctx.onclick = function(evt) {
    var activePoints = myLineChart.getElementAtEvent(evt);
    var url,playername,version;
    // use _datasetIndex and _index from each element of the activePoints array
    if (activePoints.length > 0) { //check if it's a point on the graph
      if (activePoints[0]._datasetIndex == 0) {
		  playername=players0[activePoints[0]._index];
		  version=versions0[activePoints[0]._index];
        console.log(players0[activePoints[0]._index] + " " + versions0[activePoints[0]._index] + " " + videos0[activePoints[0]._index]);
        url = videos0[activePoints[0]._index];
      }
      if (activePoints[0]._datasetIndex == 1) {
		  playername=players1[activePoints[0]._index];
		  version=versions1[activePoints[0]._index];
        console.log(players1[activePoints[0]._index] + " " + versions1[activePoints[0]._index] + " " + videos1[activePoints[0]._index]);
        url = videos1[activePoints[0]._index];
      }
      if (activePoints[0]._datasetIndex == 2) {
		  playername=players2[activePoints[0]._index];
		  version=versions2[activePoints[0]._index];
        console.log(players2[activePoints[0]._index] + " " + versions2[activePoints[0]._index] + " " + videos2[activePoints[0]._index]);
        url = videos2[activePoints[0]._index];
      }
      if (activePoints[0]._datasetIndex == 3) {
		  playername=players3[activePoints[0]._index];
		  version=versions3[activePoints[0]._index];
        console.log(players3[activePoints[0]._index] + " " + versions3[activePoints[0]._index] + " " + videos3[activePoints[0]._index]);
        url = videos3[activePoints[0]._index];
      }
      if (activePoints[0]._datasetIndex == 4) {
		  playername=players4[activePoints[0]._index];
		  version=versions4[activePoints[0]._index];
        console.log(players4[activePoints[0]._index] + " " + versions4[activePoints[0]._index] + " " + videos4[activePoints[0]._index]);
        url = videos4[activePoints[0]._index];
      }
      if(url.length > 5){revealVideo('video', 'youtube', url,playername,version);};
    }
  };
}

// https://github.com/chartjs/Chart.js/issues/2791#issuecomment-237690528
function epoch_to_hh_mm_ss(epoch) {
  return new Date(epoch * 1000).toISOString().substr(12, 7)
}

chart();

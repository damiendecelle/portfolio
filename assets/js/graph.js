var options = {
          series: [{
          name: 'Compétence',
          data: [6,8,7,6,7,6,9,10],
        }],
          chart: {
          height: 450,
          type: 'radar',
        },
        colors: ['#49fcd4'],
        title: {
            text: 'Notation de mes compétences'
          },
        xaxis: {
          categories: ['Statistiques', 'Programmation', 'Bases de données', 'Développement web', 'Connaissance métiers', 'Graphisme', 'Gestion de projets', 'SIG'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

var options2 = {
  series: [
  {
    name: 'Logiciel SIG',
    data: [
      {
        x: 'QGIS',
        y: 700
      },
      {
        x: 'ArcGIS',
        y: 300
      },
    ]
  },
  {
    name: 'ETL Spatial',
    data: [
      {
        x: 'FME',
        y: 800
      },
    ]
  },
  {
    name: 'Python',
    data: [
      {
        x: 'GDAL/OGR',
        y: 240
      },
      {
        x: 'Pandas/Geopandas',
        y: 210
      },
      {
        x: 'Plotly',
        y: 105
      },
      {
        x: 'Autres',
        y: 35
      },
    ]
  },
  {
    name: 'Bases de Données',
    data: [
      {
        x: 'Postgres/PostGIS',
        y: 600
      },
    ]
  },
  {
    name: 'Front-end',
    data: [
      {
        x: 'HTML',
        y: 200
      },
      {
        x: 'CSS',
        y: 120
      },
      {
        x: 'JavaScript',
        y: 180
      },
    ]
  },
  {
    name: 'Javascript',
    data: [
      {
        x: 'MapboxGL',
        y: 270
      },
      {
        x: 'Leaflet',
        y: 120
      },
      {
        x: 'Openlayer',
        y: 120
      },
      {
        x: 'D3',
        y: 60
      },
      {
        x: 'Autres',
        y: 30
      },
    ]
  },
  {
    name: 'R',
    data: [
      {
        x: 'Tidyverse',
        y: 160
      },
      {
        x: 'Sf',
        y: 100
      },
      {
        x: 'FactoMiner',
        y: 60
      },
      {
        x: 'Ggplot2',
        y: 60
      },
      {
        x: 'Autres',
        y: 20
      },
    ]
  },
  {
    name: 'Graphisme',
    data: [
      {
        x: 'Adobe Illustrator',
        y: 140
      },
      {
        x: 'Adobe Photoshop',
        y: 50
      },
      {
        x: 'Inkscape',
        y: 30
      },
    ]
  },
],
  legend: {
  show: true
},
chart: {
  height: 500,
  type: 'treemap'
},
colors: [
  "#008FFB", "#49fcd4"],
title: {
  text: 'TreeMap de mes compétences techniques'
}
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

var options3 = {
  series: [
  {
    name: 'Licence Géographie, Aménagement, Environnement<br>Université Rennes 2, Rennes (35), France',
    data: [
      {
        x: 'Parcours Universitaire',
        y: [
          new Date(2016, 8, 2).getTime(),
          new Date(2019, 4, 32).getTime()
        ]
      },
    ]
  },
  {
    name: 'Master mension Géomatique SIGAT<br>Université Rennes 2, Rennes (35), France',
    data: [
      {
        x: 'Parcours Universitaire',
        y: [
          new Date(2019, 8, 2).getTime(),
          new Date(2021, 9, 23).getTime()
        ]
      },
    ]
  },
  {
    name: 'Géomaticien / DREAL Nouvelle-Aquitaine<br>Bordeaux (33), France',
    data: [
      {
        x: 'Stage',
        y: [
          new Date(2020, 5, 2).getTime(),
          new Date(2020, 7, 32).getTime()
        ]
      },
    ]
  },
  {
    name: 'Geomaticien / EPF Bretagne<br>Rennes (35), France',
    data: [
      {
        x: 'Stage',
        y: [
          new Date(2021, 4, 18).getTime(),
          new Date(2021, 9, 16).getTime()
        ]
      },
    ]
  },
  {
    name: "Rayons d'Action<br>Rennes (35), France",
    data: [
      {
        x: 'Projet 1',
        y: [
          new Date(2020, 0, 2).getTime(),
          new Date(2020, 3, 28).getTime()
        ]
      },
    ]
  },
  {
    name: 'Covoiturage.Beta.gouv<br>Paris (75), France',
    data: [
      {
        x: 'Projet 2',
        y: [
          new Date(2020, 0, 2).getTime(),
          new Date(2020, 3, 28).getTime()
        ]
      },
    ]
  },
  {
    name: "Air Breizh<br>Rennes (35), France",
    data: [
      {
        x: 'Projet 1',
        y: [
          new Date(2020, 9, 2).getTime(),
          new Date(2021, 0, 5).getTime()
        ]
      },
    ]
  },
  {
    name: 'Lacroix Group<br>Nantes (44), France',
    data: [
      {
        x: 'Projet 1',
        y: [
          new Date(2021, 0, 13).getTime(),
          new Date(2021, 4, 4).getTime()
        ]
      },
    ]
  },
  {
    name: 'Kermap<br>Rennes (35), France',
    data: [
      {
        x: 'Projet 2',
        y: [
          new Date(2021, 0, 18).getTime(),
          new Date(2021, 4, 4).getTime()
        ]
      },
    ]
  },
],
  chart: {
  height: 450,
  type: 'rangeBar'
},
title: {
  text: 'Timeline de mes différentes expériences'
},
plotOptions: {
  bar: {
    horizontal: true,
    barHeight: '30%',
    rangeBarGroupRows: true
  }
},
colors: [
  "#008FFB", "#49fcd4"],
fill: {
  type: 'solid'
},
xaxis: {
  type: 'datetime'
},
legend: {
  show: false
},
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
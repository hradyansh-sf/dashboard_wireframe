const charts = document.querySelectorAll(".chart");
const charts2 = document.querySelectorAll(".chart2");



charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {







    
    type: "bar",
    data: {
      labels: ["PM",
        "RC",
        "NN",
        "NH",
        "KK",
        "YS",
        "SS",
        "SD",
        "AS",
        "SW",
        "LA",
        "MK"],
      datasets: [
        {
          label: "# of Total Hrs",
          data: [12, 19, 30, 5, 2, 3, 12, 19, 3, 12, 19, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },

        {
          label: "# of Morning Class",
          data: [4, 9, 10, 5, 2, 3, 12, 19, 3, 4, 9, 10],
          backgroundColor: [
            
            "rgba(54, 162, 235, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(54, 162, 235, 1)",
            
          ],
          borderWidth: 1,
        },

        {
          label: "# of Afternoon Class",
          data: [2, 5, 12, 5, 2, 3, 12, 19, 3, 2, 5, 12],
          backgroundColor: [
            
            "rgba(255, 206, 86, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(255, 206, 86, 1)",
            
          ],
          borderWidth: 1,
        },

        {
          label: "# of Evening Class",
          data: [6, 5, 8, 5, 2, 3, 12, 19, 3, 6, 5, 8],
          backgroundColor: [
            
            "rgba(75, 192, 192, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(75, 192, 192, 1)",
            
          ],
          borderWidth: 1,
        },
      ],
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    
  });
});



charts2.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {







    
    type: 'radar',
    data: {
      labels: [
        'Trainer Rating',
        'Course Content Delivery Rating',
        '% of escalations (-negative review)',
        '% of escalations (+positive review)',
        'Batch Performance',
        'Attendance',
        'Assignments Recieved'
      ],
      datasets: [{
        label: 'Hradyansh',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Kalpana K',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    },
    
    /*data: {
      labels: ["PM",
        "RC",
        "NN",
        "NH",
        "KK",
        "YS",
        "SS",
        "SD",
        "AS",
        "SW",
        "LA",
        "MK"],
      datasets: [
        {
          label: "# of Total Hrs",
          data: [12, 19, 30, 5, 2, 3, 12, 19, 3, 12, 19, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },

        {
          label: "# of Morning Class",
          data: [4, 9, 10, 5, 2, 3, 12, 19, 3, 4, 9, 10],
          backgroundColor: [
            
            "rgba(54, 162, 235, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(54, 162, 235, 1)",
            
          ],
          borderWidth: 1,
        },

        {
          label: "# of Afternoon Class",
          data: [2, 5, 12, 5, 2, 3, 12, 19, 3, 2, 5, 12],
          backgroundColor: [
            
            "rgba(255, 206, 86, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(255, 206, 86, 1)",
            
          ],
          borderWidth: 1,
        },

        {
          label: "# of Evening Class",
          data: [6, 5, 8, 5, 2, 3, 12, 19, 3, 6, 5, 8],
          backgroundColor: [
            
            "rgba(75, 192, 192, 0.2)",
            
          ],
          borderColor: [
            
            "rgba(75, 192, 192, 1)",
            
          ],
          borderWidth: 1,
        },
      ],
      
    },*/
    options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Faculty and their Batch / Module Report'
      }
    }
  },
    
  });
});






















$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

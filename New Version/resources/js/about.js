var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["PYTHON", "DJANGO", "HTML", "CSS", "JAVASCRIPT", "ANGULARJS", "SQL", "ORACLE", "POSTGRES", "GITHUB"],
        datasets: [{
            label: 'SkillSet in %',
            data: [95, 85, 90, 90, 70, 50, 80, 80, 80, 70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(226, 46, 46, 0.2)',
                'rgba(160, 93, 27, 0.35)',
                'rgba(109, 177, 97, 0.44)',
                'rgba(5, 113, 113, 0.19)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                 'rgba(226, 46, 46, 0.76)',
                'rgba(160, 93, 27, 0.72)',
                'rgba(109, 177, 97, 0.91)',
                'rgba(5, 113, 113, 0.69)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
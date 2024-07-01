const pieCtx = document.getElementById('pieChart').getContext('2d');
const barCtx = document.getElementById('barChart').getContext('2d');

const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Aplicações Recorrentes', 'Renda Fixa', 'Investimentos em Ações', 'Dividendos'],
        datasets: [{
            label: 'Investimentos',
            data: [59.22, 12.5, 28.82, 5.61],
            backgroundColor: ['#95A617', '#E1F25C', '#3F1111', '#BE5655']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                
            }
        }
    }
});

const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Aplicações Recorrentes', 'Renda Fixa', 'Investimentos em Ações', 'Dividendos'],
        datasets: [{
            label: 'Investimentos',
            data: [59.22, 12.5, 28.82, 5.61],
            backgroundColor: ['#95A617', '#E1F25C', '#3F1111', '#BE5655']
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            }
        }
    }
});

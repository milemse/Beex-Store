const line_options = {
    series: [{
        name: 'Semana 1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
        toolbar: {
            show: false
        },
        width: '100%',
        type: 'area',
    },
    colors: ['#0066aa', '#6CC070', '#D9AE2E'],
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    grid: {
        show: false
    },
    xaxis: {
        type: 'datetime',
        categories: ["2023-09-18", "2023-09-19", "2023-09-20", "2023-09-21", "2023-09-22", "2023-09-23", "2023-09-24"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yyyy'
        }
    }
}

const donut_options = {
    series: [30, 40, 30],
    chart: {
        toolbar: {
            show: false
        },
        width: '77%',
        type: 'donut',
    },
    labels: ["Efectivo", "Tarjeta", "Transferencia"],
    colors: ['#0066aa', '#6CC070', '#D9AE2E'],
    legend: {
        show: true,
        position: 'bottom'
    },
    dataLabels: {
        enabled: false
    },
    states: {
        hover: {
            filter: {
                type: 'none'
            }
        }
    }
} 

const line_chart = new ApexCharts(document.querySelector('#line-chart'), line_options)
line_chart.render()

const donut_chart = new ApexCharts(document.querySelector('#donut-chart'), donut_options)
donut_chart.render()
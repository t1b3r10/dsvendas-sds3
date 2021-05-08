import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    // FORMA CORRETA SUBSTITUINDO A ERRADA LOGO ABAIXO
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {

        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                //chartData = {labels: myLabels, series: mySeries};
                setChartData({ labels: myLabels, series: mySeries });

                //console.log(response.data)
                //console.log(chartData)
            });

    }, []);

    //    FORMA ERRADA QUE SERÁ TROCADA
    //let chartData : ChartData = {labels: [], series: []};

    //axios.get(`${BASE_URL}/sales/amount-by-seller`)
    //    .then(response => {
    //        const data = response.data as SaleSum[];
    ///        const myLabels = data.map(x => x.sellerName);
    //        const mySeries = data.map(x => x.sum);
    //
    //        //chartData = {labels: myLabels, series: mySeries};
    //        setChartData({ labels: myLabels, series: mySeries });
    //
    //        //console.log(response.data)
    //        console.log(chartData)
    //    });

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Yrli Moreira', 'Lais Lima', 'Caio Lima', 'Logan', 'Padmé']
    //}

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            //options={{ ...options, labels: mockData.labels }}
            //series={mockData.series}
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
import React from 'react'
import { Bar } from 'react-chartjs-2'
import randomColor from 'randomcolor'

const OperatorTransaction = () => {

    const color = randomColor(
        {
            count: 5,
            format: 'rgb'
        }
    );

    const data = {
        labels: ['Operador 1', 'Operador 2', 'Operador 3', 'Operador 4', 'Operador 4'],
        datasets: [
            {
                label: 'Transacciones por operador',
                data: [80, 20, 57, 33, 19],
                backgroundColor: color
            }
        ]
    };

    return (
        < div className="chart" >
            <Bar data={data} />
        </div >
    );
}
export default OperatorTransaction;
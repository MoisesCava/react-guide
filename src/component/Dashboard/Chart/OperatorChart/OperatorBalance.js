import React from 'react'
import { Line } from 'react-chartjs-2'
import randomColor from 'randomcolor'

const OperatorBalance = () => {

    const color = randomColor(
        {
            count: 5,
            format: 'rgb'
        }
    );

    const data = {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
            {
                label: 'Transacciones por operador',
                data: [19, 20, 57, 33, 67, 100, 69 ],
                backgroundColor: 'rgb(72, 201, 176)'
            }
        ]
    };

    return (
        < div className="chart" >
            <Line data={data} />
        </div >
    );
}
export default OperatorBalance;
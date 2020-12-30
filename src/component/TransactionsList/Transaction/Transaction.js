import React from "react";

import "./Transaction.css";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Transaction = ({ ...props }) => {


    const goBack = () => {

        props.history.push("/lista-transacciones")

    }


    return (
        <Card className="transaction-card-wrapper" variant="outlined">
            <CardContent>


                <Typography color="textSecondary" gutterBottom>
                    transaccion
            </Typography>

                <Typography variant="h5" component="h2">
                    {props.match.params.ref}
                </Typography>


                <Typography color="textSecondary">
                    informacion extra:
            </Typography>

                <Typography variant="body2" component="p">
                    Monto: 1000 $
                    <br />
                    operador : juan
                    <br />
                    estatus : aprobado

                </Typography>



            </CardContent>
            <CardActions>
                <Button size="small" onClick={goBack} >Volver</Button>
            </CardActions>
        </Card>

    )

}









export default Transaction;
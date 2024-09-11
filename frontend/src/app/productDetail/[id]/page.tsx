'use client'

import { getDetailProduct } from "@/api/products/apiProducts";
import * as React from 'react';
import { AxiosResponse } from 'axios';
import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import Image from "next/image";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaymentIcon from '@mui/icons-material/Payment';
import Card from "@/components/Card";
import TableInfoCard from "@/components/TableInfoCard";

const CardDetail: React.FC = (props: any) => {
    return (
        <div className="card">
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Card />
                </Grid>
                <Grid item xs={7}>
                    <TableInfoCard />
                    <div className="">
                        <Button variant="contained">Add to card</Button>
                        <Button variant="contained">Buy</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardDetail;
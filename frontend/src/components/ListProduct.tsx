'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import CardItem from './CardItem';
import { getListProduct } from '@/api/products/apiProducts';
// import { Product } from '@/api/products/type';
import { AxiosResponse } from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ListProduct: React.FC = () => {

    const [data, setData] = React.useState<AxiosResponse | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const list = await getListProduct();
            setData(list);
        };

        fetchData();
    }, []);

    // console.log(data);

    return (
        <Grid container spacing={2}>
            {
                data?.map((product: any, index: any) => (
                    // console.log(product.card_images[0].image_url_small);

                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Item key={index}>
                            <Card sx={{ minWidth: 275 }}>
                                <Link href={`/productDetail/${product.id}`}>
                                    <Image src={product.card_images[0].image_url_small} alt='' width={268} height={391} />
                                </Link>
                            </Card>
                        </Item>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ListProduct;
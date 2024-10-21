import { List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProductsList: React.FC = () => {

    const [products, setProducts] = useState<any>();

    const fetchProducts = async () => {
        const productData = await fetch("/api/products", {
            method: "GET",
        })
            .then(response => {
                return response.json();
            }).catch(error => undefined);

        if (productData) {
            setProducts(productData)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price&nbsp;</TableCell>
                            <TableCell align="right">Description&nbsp;</TableCell>
                            <TableCell align="right">Image&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product: any, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="right">{product.title}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{product.description}</TableCell>
                                <TableCell align="right">
                                    <img src={product?.images[0].substring(2, product?.images[0].length - 2)} width={"30px"} height={"30px"} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ProductsList
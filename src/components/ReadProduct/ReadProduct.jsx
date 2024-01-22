import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ReadProduct.css";
const ReadProduct = () => {
  const { readProduct, data, deleteProduct } = useProductContext();

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div className="menu">
      {data.map((el) => (
        <Card sx={{ maxWidth: 345, padding: "20px" }}>
          <CardMedia
            sx={{ height: "340px", width: "300px" }}
            image={el.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {el.year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => deleteProduct(el.id)} size="small">
              delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ReadProduct;

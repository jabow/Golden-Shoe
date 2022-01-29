import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	let handleAddToCart;
	if (product.inventory.available) {
		handleAddToCart = () => onAddToCart(product.id, 1);
	}

	let inStock;
	if (product.inventory.available === 0) {
		inStock = <div className={classes.red}>Out of Stock</div>;
	} else if (product.inventory.available < 3) {
		inStock = (
			<div className={classes.orange}>
				Only {product.inventory.available} left!
			</div>
		);
	} else {
		inStock = <div className={classes.green}>In Stock</div>;
	}

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.image.url}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{product.name}
					</Typography>
					<Typography gutterBottom variant="h5" component="h2">
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant="body2"
					color="textSecondary"
					component="p"
				/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<Typography
					gutterBottom
					variant="h5"
					component="h2"
					className="red"
				>
					{inStock && inStock}
				</Typography>
				<IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;

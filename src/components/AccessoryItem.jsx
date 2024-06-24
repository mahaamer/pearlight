import React from "react"

const AccessoryItem = ({ item, onBuy }) => {
	const { type, name, description, price, imageUrl, bought } = item
	const priceWithTaxes = (price * 1.2).toFixed(2) // Assuming 20% tax

	return (
		<div style={itemStyle}>
			<img src={imageUrl} alt={name} style={imageStyle} />
			<h2>{name}</h2>
			<p>{description}</p>
			<p>النوع: {type}</p>
			<p>السعر:{price} جنيه</p>
			<p>سعر العرض :{priceWithTaxes} جنيه</p>
			<button
				onClick={() => onBuy(item.id)}
				style={bought ? boughtButtonStyle : buttonStyle}
			>
				{bought ? "تم الشراء" : "شراء"}
			</button>
		</div>
	)
}

const itemStyle = {
	border: "1px solid #ddd",
	borderRadius: "8px",
	padding: "15px",
	margin: "10px",
	textAlign: "center",
	backgroundColor: "#fff",
	boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
	transition: "transform 0.3s, box-shadow 0.3s",
}

const imageStyle = {
	width: "250px",
	height: "250px",
	borderRadius: "8px",
}

const buttonStyle = {
	padding: "10px 20px",
	borderRadius: "5px",
	border: "none",
	cursor: "pointer",
	backgroundColor: "#007BFF",
	color: "#fff",
	marginTop: "10px",
	transition: "background-color 0.3s",
}

const boughtButtonStyle = {
	...buttonStyle,
	backgroundColor: "#4CAF50",
}

export default AccessoryItem

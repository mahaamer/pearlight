import React from "react"

const Tabs = ({ selectedType, onSelectType }) => {
	const types = ["الكل", "سلسلة", "سوار", "قلادة", "تم الشراء"]

	return (
		<div style={tabsStyle}>
			{types.map((type) => (
				<button
					key={type}
					onClick={() => onSelectType(type)}
					style={type === selectedType ? activeTabStyle : tabStyle}
				>
					{type}
				</button>
			))}
		</div>
	)
}

const tabsStyle = {
	display: "flex",
	justifyContent: "center",
	marginBottom: "20px",
}

const tabStyle = {
	padding: "10px 20px",
	cursor: "pointer",
	border: "1px solid #ddd",
	borderRadius: "5px",
	margin: "0 5px",
	background: "#fff",
	transition: "background 0.3s, color 0.3s",
}

const activeTabStyle = {
	...tabStyle,
	background: "#F5C",
	color: "#fff",
}

export default Tabs

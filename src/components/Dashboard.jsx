import React, { useState } from "react"
import accessoriesData from "../data/accessories"
import AccessoryItem from "./AccessoryItem"
import Tabs from "./Tabs"

const Dashboard = () => {
	const [accessories, setAccessories] = useState(accessoriesData)
	const [selectedType, setSelectedType] = useState("الكل")

	const handleBuy = (id) => {
		const updatedAccessories = accessories.map((item) =>
			item.id === id ? { ...item, bought: !item.bought } : item
		)
		setAccessories(updatedAccessories)
	}

	const filteredAccessories =
		selectedType === "الكل"
			? accessories
			: selectedType === "تم الشراء"
			? accessories.filter((item) => item.bought)
			: accessories.filter((item) => item.type === selectedType)

	return (
		<div>
			<Tabs selectedType={selectedType} onSelectType={setSelectedType} />
			<div style={dashboardStyle}>
				{filteredAccessories.map((item) => (
					<AccessoryItem key={item.id} item={item} onBuy={handleBuy} />
				))}
			</div>
		</div>
	)
}

const dashboardStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
	gap: "20px",
	padding: "20px",
}

export default Dashboard

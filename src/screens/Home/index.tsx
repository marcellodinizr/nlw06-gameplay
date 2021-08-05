import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
	const [category, setCategory] = useState("");

	const appointments = [
		{
			id: "1",
			guild: {
				id: "1",
				name: "Lendários",
				icon: null,
				owner: true,
			},

			category: "1",
			date: "22/06 ás 20:40",
			description:
				"É hoje que vamos chegar ao challenger sem perder uma partida de m10",
		},
	];

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory("") : setCategory(categoryId);
	}

	return (
		<View>
			<View style={styles.header}>
				<Profile />
				<ButtonAdd />
			</View>

			<View>
				<CategorySelect
					categorySelected={category}
					setCategory={handleCategorySelect}
				/>

				<View style={styles.content}>
					<ListHeader title="Partidas agendadas" subtitle="Total 6" />

					<FlatList
						data={appointments}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <Appointment data={item} />}
					/>
				</View>
			</View>
		</View>
	);
}

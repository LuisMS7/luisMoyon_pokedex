import "react-native-gesture-handler";
import React from "react";
import AppNavigator from "@navigation/AppNavigator";
import { SnackbarProvider } from "@providers/SnackbarProvider";

export default function App() {
	return (
		<SnackbarProvider>
			<AppNavigator />
		</SnackbarProvider>
	);
}

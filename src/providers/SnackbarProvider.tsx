import React, { createContext, ReactNode, useState } from "react";
import { StyleSheet, Text, Animated } from "react-native";

type SnackbarContextValue = {
	showSnackbar: (message: string) => void;
};

const SnackbarContext = createContext<SnackbarContextValue>({
	showSnackbar: () => {},
});

type SnackbarProviderProps = {
	children: ReactNode;
};

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
	const [visible, setVisible] = useState(false);
	const [message, setMessage] = useState("");

	const hideSnackbar = () => {
		setVisible(false);
	};

	const showSnackbar = (message: string) => {
		setMessage(message);
		setVisible(true);
	};

	const fadeAnim = new Animated.Value(0);

	Animated.timing(fadeAnim, {
		toValue: visible ? 1 : 0,
		duration: 500,
		useNativeDriver: false,
	}).start(() => {
		if (visible) {
			setTimeout(hideSnackbar, 3000);
		}
	});

	const renderSnackbar = () => {
		if (!visible) {
			return null;
		}

		return (
			<Animated.View style={{ ...styles.snackbar, opacity: fadeAnim }}>
				<Text style={styles.snackbarText}>{message}</Text>
			</Animated.View>
		);
	};

	return (
		<SnackbarContext.Provider value={{ showSnackbar }}>
			{children}
			{renderSnackbar()}
		</SnackbarContext.Provider>
	);
};

const styles = StyleSheet.create({
	snackbar: {
		position: "absolute",
		bottom: 70,
		left: 20,
		right: 20,
		backgroundColor: "#C12239",
		padding: 10,
		borderRadius: 5,
	},
	snackbarText: {
		color: "#fff",
		fontSize: 16,
		textAlign: "center",
	},
});

export { SnackbarProvider, SnackbarContext };

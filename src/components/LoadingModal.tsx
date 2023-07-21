import React from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";

type LoadingModalProps = {
	visible: boolean;
};

const LoadingModal = ({ visible }: LoadingModalProps) => {
	return (
		<Modal visible={visible} transparent animationType="fade">
			<View style={styles.modalContainer}>
				<ActivityIndicator size="large" color="blue" />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});

export default LoadingModal;

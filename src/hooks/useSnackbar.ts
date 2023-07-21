import { useContext } from "react";
import { SnackbarContext } from "@providers/SnackbarProvider";

export const useSnackbar = () => {
	const { showSnackbar } = useContext(SnackbarContext);

	return { showSnackbar };
};

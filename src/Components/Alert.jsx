import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Alert(str) {
	const MySwal = withReactContent(Swal);

	const status = str;

	MySwal.fire({
		didOpen: () => {
			MySwal.clickConfirm();
		}
	}).then(() => {
		if (status === "correct") {
			MySwal.fire({
				title: "Correct",
				icon: "success",
				text: "Nice job!"
			});
		} else if (status === "incorrect") {
			MySwal.fire({
				title: "Incorrect",
				icon: "error",
				text: "try again"
			});
		} else if (status === "next level") {
			MySwal.fire({
				title: "Great job! you got advanced to the next level",
				icon: "success",
				text: "Next Level"
			});
		} else {
			MySwal.fire({
				title: "Game Over",
				icon: "error",
				text: "Restart"
			});
		}
	});
}

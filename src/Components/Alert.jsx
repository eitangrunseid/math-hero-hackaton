import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Alert() {
  const MySwal = withReactContent(Swal);

  const myName = "Leo";

  MySwal.fire({
    didOpen: () => {
      MySwal.clickConfirm();
    },
  }).then(() => {
    if (myName === "Leo") {
      MySwal.fire({
        title: "Correct",
        icon: "success",
        text: "Nice job!",
      });
    } else {
      MySwal.fire({
        title: "Incorrect",
        icon: "error",
        text: "try again",
      });
    }
  });
}

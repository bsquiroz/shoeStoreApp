import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Container } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Container>
		<App />
		<ToastContainer />
	</Container>
);

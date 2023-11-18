import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home/>}/>
					<Route path="*" element={<Home/>}/>
					<Route path="home" element={<Home/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App;
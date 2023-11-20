import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";

function App(){
	return (
		<BrowserRouter>
			<Menu/>
			<Routes>
				<Route path="/">
					<Route index element={<Home/>}/>
					<Route path="*" element={<Home/>}/>
					<Route path="home" element={<Home/>}/>
					<Route path="about_me" element={<AboutMe/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App;
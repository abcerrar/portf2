import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";
import { useEffect } from "react";

function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Menu/>}/>
					<Route path="*" element={<Menu/>}/>
					<Route path="home" element={<Home/>}/>
					<Route path="about_me" element={<AboutMe/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App;
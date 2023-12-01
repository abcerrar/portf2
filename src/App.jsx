import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";
import { useEffect } from "react";
import Terminal from "./components/Terminal/Terminal";
import Skills from "./pages/skills/Skills";
import { serverUrl } from "./config";
import axios from "axios";

function App(){

	useEffect(() => {
		axios.get(serverUrl).then((res) => {
			console.log(res.data)
		})
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Menu/>}/>
					<Route path="*" element={<Menu/>}/>
					<Route path="home" element={<Home/>}/>
					<Route path="terminal" element={<Terminal/>}/>
					<Route path="terminal/*" element={<Terminal/>}/>
					<Route path="about_me" element={<AboutMe/>}/>
					<Route path="skills" element={<Skills/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App;
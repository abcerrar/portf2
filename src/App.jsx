import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";
import { useEffect, useState } from "react";
import Terminal from "./components/Terminal/Terminal";
import Skills from "./pages/skills/Skills";
import { serverUrl } from "./config";
import axios from "axios";
import AppContext from "./components/contexts/app.context";

function App(){

	const [userData, setUserData] = useState([{}]);

	useEffect(() => {
		axios.get(serverUrl+'/user').then((res) => {
			console.log("Server connected succesfuly")
			setUserData(res.data);
		}).catch((error) => {
            console.error('Error al conectar con el servidor:', error);            
        });
	}, [])

	return (
		<AppContext.Provider value={{userData}}>
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
		</AppContext.Provider>
	)
}
export default App;
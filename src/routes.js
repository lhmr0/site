//import vistas
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import About from './components/About.vue'
//exportamos las rutas
export const routes =[
    {path:'/',component:Home},
    {path:'/about',component:About},
	{path:'*',component:NotFound}
]
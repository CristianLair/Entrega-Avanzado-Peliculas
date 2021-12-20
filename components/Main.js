import React from 'react';
import Navigation from './Navigation';
import '../App.css';
import Pelicula from '../Pelicula'
import PageWapper from '../PageWapper';
import peliculasJson from '../Peliculas.json'
import Paginacion from '../Paginacion';
import {useState} from 'react'

import { BrowserRouter} from 'react-router-dom';










const Main = ({setIsUser,isUser}) => {
  const [paginaActual,setPagina] = useState(1)
	const totalporPagina = 3
	
	let peliculas = peliculasJson
	peliculas = peliculas.slice((paginaActual -1) * totalporPagina,
	paginaActual * totalporPagina  );

	const getTotalPeliculas = () =>{
		let cantidadDePelis = peliculasJson.length;
		 return Math.ceil(cantidadDePelis / totalporPagina);
	}

    

  return (
    <div>
<BrowserRouter>


{isUser?<PageWapper> >
		  
		{peliculas.map(pelicula =>
		 <Pelicula titulo = {pelicula.titulo} calificacion ={pelicula.calificacion} img = {pelicula.img} descripcion = {pelicula.descripcion} duracion = {pelicula.duracion} director = {pelicula.director} actores = {pelicula.actores} fecha = {pelicula.fecha} edadMinima= {pelicula.edadM}/>
	)}

		  
			<Paginacion pagina = {paginaActual} total = {getTotalPeliculas()} onChange = {(pagActual)=>{
				setPagina(pagActual)

			}}/>
	  </PageWapper>:<Navigation  setIsUser={setIsUser} />}


</BrowserRouter>
</div>
  )
 
}

export default Main;
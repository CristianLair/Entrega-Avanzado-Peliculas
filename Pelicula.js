 export default function Pelicula (props){
     return(
    <div className="movie-item-style-2">
    <img src={props.img} alt="" />
    <div className="mv-item-infor">
        <h6><a href="#">{props.titulo} </a></h6>
        <p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span></p>
        <p className="describe">{props.descripcion} </p>
        <p className="run-time"> {props.duracion}     <span>{props.edadMinima}</span><span>{props.fecha}</span></p>
        <p>Director: <a href="#">{props.director} </a></p>
        <p>Stars: <a href="#">{props.actores}  </a></p>
    </div>
</div>

     )}
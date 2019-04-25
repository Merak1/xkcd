import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './Favorites.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Main extends Component {
    state = {
        comic: [""],
        maxData: 1,
        favoritos: []
    }
    componentDidMount() {
        this.lastComic()
    }

    lastComic = async () => {
        const res = await axios.get("https://xkcd.now.sh");
        const data = await res.data
        const maxData = data.num
        this.setState({ maxData: maxData })
        this.setState({ comic: data })
    }

    getComic = async (id) => {
        const res = await axios.get(`https://xkcd.now.sh/${id}`);
        const data = await res.data
        console.log(data);

        this.setState({ comic: data })
    }

    random = () => {
        const randomNumber = Math.floor(Math.random() * (this.state.maxData + 1))
        this.getComic(randomNumber)

    }
    getFirstComic = () => {
        this.getComic(1)
    }
    getPrevComic = () => {
        const actuallComic = this.state.comic.num - 1;
        this.getComic(actuallComic)
    }
    getNextComic = () => {
        const actuallComic = this.state.comic.num + 1;
        this.getComic(actuallComic)
    }
    revisaArray(array, elemento) {
        return array.filter(item => item === elemento).length;
    }


    añadirFavorito = () => {
        const comicActual = this.state.comic.num
        let veces = this.revisaArray(this.state.favoritos, comicActual)
        console.log(veces);
        if (veces <= 1) {
            this.setState({
                favoritos: [...this.state.favoritos, this.obtenerFavorito()]
            })
            console.log(this.state.favoritos)
        }

    }
    obtenerFavorito = () => {
        const comicActual = this.state.comic.num
        console.log("comic actual ->", comicActual);

        return comicActual
    }
    eliminarFavorito = (e) => {
        console.log("info onclick ", e);
        this.setState({
            favoritos: this.state.favoritos.filter(favorito => favorito !== e)
        })
    }
    irFavorito = (favorito) => {
        console.log("irfavorito")
        this.getComic(favorito)
    }


    render() {
        return (
            <div className="Main">
                <p>Aquí van el cómic numero {this.state.comic.num} </p>
                <div className="botones">
                    <div className="button button_control" onClick={this.getFirstComic} > <FontAwesomeIcon icon="step-backward" /> </div>
                    <div className="button button_control" onClick={this.getPrevComic} >  <FontAwesomeIcon icon="arrow-alt-circle-left" /> </div>
                    <div className="button button_control" onClick={this.random}> random   <FontAwesomeIcon icon="random" /> </div>
                    <div className="button button_control" onClick={this.getNextComic} > <FontAwesomeIcon icon="arrow-alt-circle-right" />  </div>
                    <div className="button button_control" onClick={this.lastComic}> <FontAwesomeIcon icon="step-forward" />  </div>
                </div>
                <div className="comic_display">
                    <div className="button button_favoritos"  ><Favorites irFavorito={this.irFavorito} eliminarFavorito={this.eliminarFavorito} favoritos={this.state.favoritos} /></div>
                    <img src={this.state.comic.img} alt="" className="comic_image" />
                    <div className="button button_añadir-favoritos" onClick={this.añadirFavorito}> Añadir a favoritos</div>
                </div>
            </div >
        );
    }
}

export default Main;

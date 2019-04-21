import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './Favorites.js';
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
        if (veces < 1) {
            const nuevoArr = this.state.favoritos.concat(comicActual)
            this.setState({ favoritos: nuevoArr })
        }
        console.log("favoritos", this.state.favoritos);

    }
    render() {
        return (
            <div className="Main">
                <p>Aquí van el cómic numero {this.state.comic.num} </p>
                <div>
                    <button onClick={this.getFirstComic} > primero </button>
                    <button onClick={this.getPrevComic} > anterior </button>
                    <button onClick={this.random}> random </button>
                    <button onClick={this.getNextComic} > siguiente </button>
                    <button onClick={this.lastComic}> último </button>
                </div>
                <div>
                    <button onClick={this.añadirFavorito}> Añadir a favoritos</button>
                    <img src={this.state.comic.img} alt="" />
                </div>
                <div>
                    <Favorites
                    //aca recibe los props que sería el state.favorites
                    />
                </div>
            </div >
        );
    }
}

export default Main;

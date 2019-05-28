import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Favorites from './Favorites.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingScreen from 'react-loading-screen';
import favorite from './favorite.png'

class Main extends Component {
    state = {
        comic: [],
        maxData: 1,
        favoritos: [],
        loading: false
    }
    componentDidUpdate() {
        this.demoMethod()
        this.obtenerVeces()
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
        if (id > this.state.maxData || id < 1) {
            return;
        }
        this.setState({ loading: true })
        const res = await axios.get(`https://xkcd.now.sh/${id}`);
        const data = await res.data
        this.setState({ comic: data })
        this.setState({ loading: false })
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
    obtenerVeces() {
        const comicActual = this.state.comic.num
        let veces = this.revisaArray(this.state.favoritos, comicActual)
        return veces
    }
    añadirFavorito = () => {
        let veces = this.obtenerVeces()
        if (veces < 1) {
            this.setState({
                favoritos: [...this.state.favoritos, this.obtenerFavorito()]
            })
        }
    }
    obtenerComicActual = () => {
        const comicActual = this.state.comic.num
        return comicActual
    }
    obtenerFavorito = () => {
        const favorito = this.obtenerComicActual()
        return favorito
    }
    eliminarFavorito = (e) => {
        this.setState({
            favoritos: this.state.favoritos.filter(favorito => favorito !== e)
        })
    }
    irFavorito = (favorito) => {
        this.getComic(favorito)
    }
    demoMethod() {
        this.props.sendData(this.state.comic.num);
    }
    render() {
        return (

            <div className="Main">
                <LoadingScreen
                    loading={this.state.loading}
                    bgColor='#4f4e5c'
                    spinnerColor='#dedde9'
                    textColor='#dedde9'
                    logoSrc='https://i.imgur.com/tHDkeFo.gif'
                    text=' ¯\_(ツ)_/¯ '>
                </LoadingScreen>
                <p className="Title">{this.state.comic.title} ( {this.state.comic.num}  ) </p>
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
                    <div className="button button_añadir-favoritos" onClick={this.añadirFavorito}> <img alt="" className="favorite" src={favorite} ></img>  Añadir a favoritos</div>
                </div>

            </div >
        );
    }
}

export default Main;

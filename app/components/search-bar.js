import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
//import ENV from 'dojo/config/enviroment';
import {action} from '@ember/object';

export default class SearchBarComponent extends Component {
@tracked title= "";
@tracked img= "";
@tracked name= "";
@tracked director= "";
@tracked genre= "";
@tracked plot= "";
@tracked runtime= "";
@tracked year= "";
@tracked ratings= [];
@tracked mostrar= false;

@action
async model(){

    let finaltitle = encodeURI(this.title);
    let response = await fetch(`http://www.omdbapi.com/?t=${finaltitle}&apikey=da6baf2e`)
    let data = await response.json();
    this.img=data.Poster;
    this.name=data.Title;
    this.director=data.Director;
    this.genre=data.Genre;
    this.plot=data.Plot;
    this.runtime=data.Runtime;
    this.year=data.Year;
    this.ratings=data.Ratings;
    this.mostrar=true;

    console.log(data);
}

@action
clear(){

this.mostrar=false;
this.title="";

}

}

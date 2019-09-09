import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../Styles/Map.scss';
import map_2 from '../../images/map_2.jpg'
import map_3 from '../../images/map_3.jpg'
import map_4 from '../../images/map_4.jpg'
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBug} from "@fortawesome/free-solid-svg-icons";

class Place extends Component{
    state={
        isVisible: false
    };

    onMouseMove=()=>{
        this.setState({isVisible:true})
    };
    onMouseLeave=()=>{
        this.setState({isVisible:false})
    };

    render(){
        return (
            <>
                <button className="maps" onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave} style={{marginRight: '50px'}}>
                    <FontAwesomeIcon icon={faBug} size="2x" className="faCrow" style={{color: this.props.color}} /></button>
                  <div>
                    {this.state.isVisible &&
                    <div className="maps_view"><h1>{this.props.title}</h1><p>{this.props.text}</p>
                    <img src={this.props.picture} style={{width: '300px', height: '200px'}}/>
                    </div>}
                  </div>

            </>
        )
    }
}

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 13.7538929,
            lng: 100.8160803
        },
        zoom: 6
    };

    render() {
        return (
<>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Place
                        lat={12.02798804}
                        lng={102.29189873}
                        title="Słonie na plaży"
                        text="Miejscówka: Koh Chang, plaża Kai Bae"
                        picture={map_2}
                        color={'#bada55'}
                    />
                    <Place
                        lat={13.7201777}
                        lng={100.523787}
                        title="Drink na drapaczu chmur"
                        text="Miejscówka: Octave Rooftop Lounge & Bar, Bangkok "
                        color={'#bada55'}
                    />
                    <Place
                        lat={9.70431936}
                        lng={100.00802994}
                        title="Moon Party na plaży"
                        text="Miejscówka: Koh Phangan"
                        color={'#bada55'}
                    />
                    <Place
                        lat={7.53333947}
                        lng={99.05018091}
                        title="Odludne plaże"
                        text="Miejscówka: Koh Lanta"
                        picture={map_4}
                        color={'#bada55'}
                    />
                    <Place
                        lat={9.4674663}
                        lng={98.830042}
                        title="Wyprawa do dżungli"
                        text="Miejscówka: Park Narodowy Khao Sok"
                        picture={map_3}
                        color={'#bada55'}
                    />
                    <Place
                        lat={18.6942471}
                        lng={97.6655709}
                        title="Nocny Targ"
                        text="Miejscówka: Chiang Mai, Night Street Food"
                        color={'purple'}
                    />
                    <Place
                        lat={7.9833543}
                        lng={98.7412238}
                        title="Urokliwe plaże"
                        text="Miejscówka: Ko Samet"
                        color={'purple'}
                    />
                    <Place
                        lat={18.9248801}
                        lng={98.9302769}
                        title="Tiger Kingdam"
                        text="Miejscówka: Chiang Mai"
                        color={'purple'}
                    />
                    <Place
                        lat={13.5202211}
                        lng={99.9572888}
                        title="Pływający targ"
                        text="Miejscówka: Damnoen Saduak,Prowincja Ratchaburi"
                        color={'purple'}
                    />
                    <Place
                    lat={7.3690943}
                    lng={99.2815519}
                    title="Lazurowa grota"
                    text="Miejscówka: Ko Libong"
                    color={'#bada55'}
                />
                    <Place
                        lat={7.3164165}
                        lng={99.2355219}
                        title="Snorekling"
                        text="Miejscówka: Ko Kradan"
                        color={'purple'}
                    />

                </GoogleMapReact>
            </div>
            <Footer/>
        </>
        );
    }
}

export default Map


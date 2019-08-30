import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../Styles/Map.scss';
import map_2 from '../../images/map_2.jpg'
import map_3 from '../../images/map_3.jpg'
import map_4 from '../../images/map_4.jpg'

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
                <button className="maps" onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>.</button>
                  <div>
                    {this.state.isVisible &&
                    <div className="maps_view"><h1>{this.props.title}</h1><p>{this.props.text}</p>
                    <img src={this.props.picture} style={{width: '250px', height: '150px'}}/>
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
                    />
                    <Place
                        lat={13.7201777}
                        lng={100.523787}
                        title="Drink na drapaczu chmur"
                        text="Miejscówka: Octave Rooftop Lounge & Bar, Bangkok "
                    />
                    <Place
                        lat={9.70431936}
                        lng={100.00802994}
                        title="Moon Party na plaży"
                        text="Miejscówka: Koh Phangan"
                    />
                    <Place
                        lat={7.53333947}
                        lng={99.05018091}
                        title="Odludne plaże"
                        text="Miejscówka: Koh Lanta"
                        picture={map_4}
                    />
                    <Place
                        lat={9.4674663}
                        lng={98.830042}
                        title="Trekking w dżungli"
                        text="Miejscówka: Park Narodowy Khao Sok"
                        picture={map_3}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map


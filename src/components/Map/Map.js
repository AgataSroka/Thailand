import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../Styles/Map.scss';


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
                    <div className="maps_view"><h1>{this.props.title}</h1><p>{this.props.text}</p></div>}

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
                        title="słoniska"
                        text="Słonie na plaży"
                    />
                    <Place
                        lat={13.7201777}
                        lng={100.523787}
                        text="Drink na drapaczu chmur"
                    />
                    <Place
                        lat={9.70431936}
                        lng={100.00802994}
                        text="Moon Party na plaży"
                    />
                    <Place
                        lat={7.53333947}
                        lng={99.05018091}
                        text="Odludne plaże"
                    />
                    <Place
                        lat={9.4674663}
                        lng={98.830042}
                        text="Trekking w dżungli"
                    />
                </GoogleMapReact>
            </div>
        );
    }


}


export default Map


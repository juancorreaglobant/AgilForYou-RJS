import React, { Component } from 'react';
import './Styles/Styles.css';
import Challenge from './Challenge';
import firebase from 'firebase';


class CodingChallenge extends Component {
    constructor(props) {
        super(props);
        this.ChangeCom = this.ChangeCom.bind(this);
        this.state = { id: true, retos:[] };
        this.retosArray=[];
    }
    ChangeCom() {
        this.setState({ id: false });
    }
    componentWillMount() {
        const rootRef = firebase.database().ref().child('Retos_info');

        rootRef.on('child_added', (snapshot) => {
            this.retosArray.push(snapshot.val());
            this.setState({retos: this.retosArray});
        });
    }
    render() {
        const id = this.state.id;


        if (id) {
            return (
                <section className="Middle-block" id="challenge">
                    <div>
                        <h3 className="h">
                            CODING CHALLENGE
                </h3>
                        <p className="text" >
                            We specialize in building the next generation of digital products leveraging the latest
                    UI technologies and architectures, multidevice techniques, big scale applications, component
                    based systems, intelligent user interfaces and the latest trends on user experience.
                    <br />
                            <br />
                        </p>
                    </div>
                    <button type="button" className="boton" id="start" onClick={this.ChangeCom}>
                        Are you ready?
            </button>
                </section>
            )
        } else {
            return (
                <div>
                    <Challenge Info={this.state.retos} />
                </div>
            )
        }
    }
}

export default CodingChallenge;

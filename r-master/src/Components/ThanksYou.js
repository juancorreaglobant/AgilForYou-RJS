import React, { Component } from 'react';
import './Styles/Styles.css';
import firebase from 'firebase';
import Challenge from './Challenge';
import info from './Data/InfoComponent';
import CodingChallenge from './CodingChallenge';
import Chulos from './Chulos';

class ThanksYou extends Component {
    constructor() {
        super();
        this.state = {
            uploadValue: 0
        };
        this.state = { id: true };

        this.UploadCV = this.UploadCV.bind(this);
        this.ChangeCom = this.ChangeCom.bind(this);
        this.UploadChallenge = this.UploadChallenge.bind(this);

    }
    UploadChallenge(url){
        const ruta = firebase.database().ref('/Retos_result');

        const obj={
            CVURL:url,
            Retos:
                this.props.Info
            
          }

          ruta.push().set(obj);
    }
    ChangeCom() {
        this.setState({ id: false });
    }
    UploadCV(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/micarpeta/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            this.setState({
                uploadValue: progress
            })

        }, error => {
            console.log(error.message)
        }, () => {
                
           this.UploadChallenge(task.snapshot.downloadURL)
              

        })
    }

    render() {
        const id = this.state.id;
        if (id) {
            return (
                <section id="gracias">
                    <div align="center">
                        <div className="center">

                            <div className="col-md-3" align="right">
                                <h1>  THANK YOU! </h1>
                                <h3> thank you for participation in this coding challenge,
                                     plis upload your curriculum vitae for
                                     to contact you after... 
                                </h3>
                            </div>
                            <div className="col-md-1" id="Linea">
                            </div>
                            <div className="col-md-4">
                                <h1>
                                    CURRICULUM VITAE
                                </h1>


                                <input type="file" className="btn btn-default" onChange={this.UploadCV}></input>
                                <div align="left" className="Space_1">
                                <progress value={this.state.uploadValue} max='100' className="barra"></progress>
                                </div>

                                
                                <div align="center"></div>
                                <input type="button" value="SUBMIT" className="btn-up" onClick={this.ChangeCom}></input>
                            </div>
                        </div>                     
                        <div className="Space">
                           
                        </div>
                    </div>
                </section>


            );
        } else {
            return (
                <div>
                    <CodingChallenge />
                </div>
            )
        }
    }
}

export default ThanksYou;
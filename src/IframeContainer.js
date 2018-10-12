import React, { Component } from 'react';
import IframeComm from 'react-iframe-comm';


class IframeContainer extends Component{

    render() {
        const attributes = {
            src: "http://localhost:3006",
            // src: "http://localhost:8099/demo/index.html",
            width: "100%",
            height: "100%",
        };
        // return <iframe 
        //     ref="iframe" 
        //     src="http://localhost:3006" 
        //     width="100%" 
        //     style={{
        //         border:'none',
        //         height:'100%'
        //     }}
        // />
        return(
            <IframeComm
                attributes={attributes}
                postMessageData={this.props.postMessageData}
                handleReceiveMessage={this.props.onReceiveMessage}
            />
        )
    }
}

export default IframeContainer;
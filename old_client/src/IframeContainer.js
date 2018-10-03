import React, { Component } from 'react';


class IframeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            event : '',
        }
      }

    // static propTypes = {
    //     content: React.PropTypes.string.isRequired,
    //     stylesheets: React.PropTypes.arrayOf(React.PropTypes.string),
    // };
    
    /**
     * Called after mounting the component. Triggers initial update of
     * the iframe
     */
    // componentDidMount() {
    //     this._updateIframe();
    // }
    
    /**
     * Called each time the props changes. Triggers an update of the iframe to
     * pass the new content
     */
    componentDidUpdate() {
        this._updateIframe();
    }
    
    /**
     * Updates the iframes content and inserts stylesheets.
     * TODO: Currently stylesheets are just added for proof of concept. Implement
     * and algorithm which updates the stylesheets properly.
     */
    _updateIframe() {
        const iframe = this.refs.iframe;
        var document = iframe.contentDocument || iframe.contentWindow.document;
        var step1 = document.getElementsByClassName("step1")[0]
        var step2 = document.getElementsByClassName("step2")[0]
        var step3 = document.getElementsByClassName("step3")[0]
        // console.log(document.getElementsByTagName("body")[0])
        console.log(document);
        console.log(step1);
        console.log(step2);
        console.log(step3);
        if(step1 !== undefined && step2 !== undefined && step3 !== undefined) {
            console.log('1 ',step1.style.display);
            console.log('2 ',step2.style.display);
            console.log('3 ',step3.style.display);
        }
        
        if(this.props.step === 0 & step1 !== undefined){
            step1.style.display = "block"
            step2.style.display = "none"
            step3.style.display = "none"
        }
        if(this.props.step === 1 ){
            step1.style.display = "none"
            step2.style.display = "block"
            step3.style.display = "none"
        }
        if(this.props.step === 2 ){
            step1.style.display = "none"
            step2.style.display = "none"
            step3.style.display = "block"
        }
    }
    
    /**
     * This component renders just and iframe
     */
    render() {
        return <iframe 
            ref="iframe" 
            src="index2.html" 
            width="100%" 
            style={{
                border:'none',
                height:'100%'
            }}
        />
    }
}

export default IframeContainer;
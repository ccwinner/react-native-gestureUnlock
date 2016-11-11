import React, { Component, PropTypes } from 'react';
import { requireNativeComponent, NativeModules } from 'react-native';

const GestureManager = NativeModules.RNGestureViewManager
const NativeGestureView = requireNativeComponent('RNGestureView', RNGestureView);
export default class RNGestureView extends Component {

    _onGestureComplete(event) {
        if (!this.props.onGestureComplete) {
            return;
        }
        this.props.onGestureComplete(event.nativeEvent.completion)
    }

    componentDidMount() {
        if (this.props.nodeThemes) {
            GestureManager.setupNodeUI(this.props.nodeThemes);
        }
    }

    static propTypes = {
        nodeScale: PropTypes.number,
        colCount: PropTypes.number,
        onGestureComplete:PropTypes.func,
        backgroundImgName:PropTypes.string,
        nodeThemes: PropTypes.shape({
            nodeNormal: PropTypes.string,
            nodeError: PropTypes.string,
            nodeSelect: PropTypes.string
        })
    }

    render() {
        return (
            <NativeGestureView 
            {...this.props} onComplete = {this._onGestureComplete.bind(this)}/>
            //(event)=>this.props.onGestureComplete(event.nativeEvent.completion)
        );
    }
}
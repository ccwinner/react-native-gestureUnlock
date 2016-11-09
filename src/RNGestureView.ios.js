import React, { Component, PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

const NativeGestureView = requireNativeComponent('RNGestureView', RNGestureView);
export default class RNGestureView extends Component {

    _onGestureComplete(event) {
        if (this.props.onGestureComplete == null) {
            return;
        }
        this.props.onGestureComplete(event.nativeEvent.completion)
    }

    static propTypes = {
        nodeScale: PropTypes.number,
        colCount: PropTypes.number,
        onGestureComplete:PropTypes.func,
        backgroundImgName:PropTypes.string
    }

    render() {
        return (
            <NativeGestureView 
            {...this.props} onComplete = {this._onGestureComplete.bind(this)}/>
            //(event)=>this.props.onGestureComplete(event.nativeEvent.completion)
        );
    }
}

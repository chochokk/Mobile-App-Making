/* random dice */

import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const styles=StyleSheet.create({ //주사위 스타일
    circle:{
        width:40, 
        height:40,
        borderRadius:20,
        backgroundColor:'rgb(0,200,255)',
        borderWidth:1,
        margin:2,
    },
    dice:{
        backgroundColor:'rgb(255,240,200)',
        padding:10,
    },
    text:{
        textAlign:'center',
        fontSize:20,
        margin:5,
    }
});

function Circle(){ //주사위 눈 component
    return <View style={styles.circle}/>;
}

function Blank(){ //주사위 공백 눈 component
    return <View style={[styles.circle, {backgroundColor: undefined, borderWidth:0}] }/>;
}

function Dice(props){ //주사위 component
    if(props.num==1){
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
            </View>
        );
    }
    else if(props.num==2){
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
            </View>
        );
    }
    else if(props.num==3){
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
            </View>
        );
    
    }
    else if(props.num==4){
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        );
    }
    else if(props.num==5){
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        );
    }
    else{
        return(
            <View style={styles.dice}>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
                <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            </View>
        );
    }
}

export default function App(){

    const [N, setN]=useState(1);
    const [K, setK]=useState(1);

    return(
        <View style={{flex:1, marginTop:40}}>

            <Text style={styles.text}>Double Dice</Text>
            <Text style={styles.text}>{N+K}</Text>

            <View style={{margin:5}}></View>

            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Dice num={N}/>
                <View style={{margin:15}}></View>
                <Dice num={K}/>
            </View>

            <View style={{marginHorizontal:100, marginVertical:30}}>
                <Button title="Roll" onPress={
                    function() {
                        setN(Math.floor(Math.random()*6+1));
                        setK(Math.floor(Math.random()*6+1));}}/>
            </View>
            
        </View>
    );
}

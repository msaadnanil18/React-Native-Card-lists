    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'
    
    export default function FlateCard() {
      return (
        <View>
          <Text style={styles.headingText}>FlateCard</Text>
          <View>

          </View>
          <View style={styles.container} >
          <View style={[styles.card, styles.cardOne]} >
            <Text>Red</Text>
          </View>  
          <View style={[styles.card, styles.cardTwo]} >
            <Text>Blue</Text>
          </View>  
          <View style={[styles.card, styles.cardThree]} >
            <Text>Gree</Text>
          </View>  
          <View style={[styles.card, styles.cardFour]} >
            <Text>Orange</Text>
          </View>  
          </View>
          
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        headingText:{
            fontSize:26,  
            fontWeight:'bold',
            paddingHorizontal:12,
            marginVertical:10
        },
        container:{
            flex:1,
            flexDirection:'row',
            padding:15,
        },
        card:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            width:100,
            height:100,
            borderRadius:5,
            margin:10
             
        },
        cardOne:{
            backgroundColor:'#EF5354'
        },
        cardTwo:{
            backgroundColor:'#3232c2'
        },
        cardThree:{
            backgroundColor:'#3d802a'
        },
        cardFour:{
          backgroundColor:'#f57802'
        }

    })
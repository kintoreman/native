import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  itemContainer:{
    height:100,
    width:"100%",
    borderColor:"gray",
    borderWidth:1,
    flexDirection:"row",
  },
  leftContainer:{
    width:100,
  },
  rightContainer:{
    flex:1,
    padding:10,
    justifyContent:"space-between",
  },
  text:{
    fontSize:16,
  },
  subText:{
    fontSize:12,
    color:"grey",
  }
});

const ListItem=({ImageUrl,title,author,onPress})=>{
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <View style={styles.leftContainer}>
          {!!ImageUrl&&(<Image
            style={{width:100, height:100}}
            source={{uri:ImageUrl}}
            />
            )}
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} styele={styles.text}>
            {title}
          </Text>
          <Text style={styles.subText}>
            {author}
          </Text>
        </View>
      </TouchableOpacity>

    )
}

export default ListItem;

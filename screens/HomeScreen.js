import React,{useState,useEffect} from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from "../components/ListItem";
import Constans from "expo-constants";
import axios from "axios";

const URL =`http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constans.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const HomeScreen=(props)=> {

  const {navigation} = props;


  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    fetchArticles();
},[]);


  const fetchArticles = async ()=>{
    try{
      const response =await axios.get(URL);
      setArticles(response.data.articles)
    } catch (error){
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({item})=>(
      <ListItem
      ImageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
      onPress={()=> navigation.navigate("Article",{article: item})}
    />
      )}
      keyExtractor={(item,index)=>index.toString()}
      />
    </SafeAreaView>
  );
}
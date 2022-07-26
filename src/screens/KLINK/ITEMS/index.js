import React, { Component } from "react";
import { Icon, ImageBackground, Linking, SafeAreaView, AppState, PermissionsAndroid, StyleSheet, TouchableHighlight, ViewPagerAndroid, TextInput, TouchableWithoutFeedback, Modal, TouchableOpacity, ScrollView, Alert, AlertIOS, Image, Platform, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import {
  Picker,
  Container,
  View,
  Header,
  Title,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Label,
  Item,
  Input,
  Left,
  Right,
  Body,
  Spinner,
  List,
  ListItem,
  Thumbnail
} from "native-base";

import { FooterTab, Footer as FTab } from "native-base";
///////////////////////////////////////////////////////////////////////////////

import ImgToBase64 from 'react-native-image-base64';

import TimedSlideshow from 'react-native-timed-slideshow';


import { NavigationActions, StackActions } from "react-navigation";

import Geolocation from 'react-native-geolocation-service';

import SearchInput, { createFilter } from 'react-native-search-filter';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

import BackgroundTimer from 'react-native-background-timer';
const loading_cart = require("../../../../assets/loading2.gif");
const background = require("../../../../assets/bgg.jpg");

// import {useTailwind} from 'tailwind-rn';

import { useForm } from "react-hook-form";
import { itemsFetchData } from "../../../actions";

import styles from "./styles";

import { reduxForm } from "redux-form";
class ItemsForm extends Component {


  /////////////////////////////////////////
  constructor(props) {
    
    super(props);
    this.state = {
      isLoading: false,
      menu: false,
      name: "",
      cover: "",
      desc: "",
      price: ""
    };
    this.get_data()

  }

  
  async get_data()
  {
    await this.props.fetchDataItems()

  }

  form_loading()
  {
    return (
      <Container style={{ backgroundColor: "black", justifyContent: "center" }}>

        <View style={{ flex: 0, justifyContent: "center" }}>
                                            <Thumbnail
                                              style={{
                                                alignSelf: "center",
                                                height: "50%",
                                                width: "50%",
                                                paddingBottom: 15
                                              }}
                                              circular
                                              source={loading_cart}
                                            />
        </View>

        <Text style={{color: "white",paddingBottom: 0, fontSize: 12, alignSelf: "center"}}>
          version
        </Text>
        <Text style={{color: "white",paddingBottom: 0, fontSize: 12, alignSelf: "center"}}>
          1.0.0
        </Text>

      </Container>
    )
  }

  form_detail()
  {
    return(
      <Container style={{backgroundColor: "white"}}>
                            <Header style={{ backgroundColor:'#A52A2A' }}>
                              <Left>
                                  <TouchableOpacity onPress={()=>
                                    {
                                      this.setState({
                                        name: "",
                                        cover: "",
                                        desc: "",
                                        price: ""
                                      })
                                    }
                                  } >
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "center", 
                                                    fontWeight: "bold", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  ❌
                                                </Text>
                                  </TouchableOpacity>
                              </Left>
                              <Body>
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "center", 
                                                    fontWeight: "bold", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  DETAIL PRODUCT
                                                </Text>
                              </Body>
                              <Right>
                              </Right>
                            </Header>


        <Content padder enableResetScrollToCoords={false}>
          <View style={{flexDirection: "row", width: "100%", height: "100%"}}>
                                         
                                <View style={{alignSelf: "center", width: "90%", justifyContent: "center", paddingTop: 10, marginTop: 10, paddingBottom: 10, marginBottom: 10}}>
                                  

                                              <Thumbnail
                                                style={{
                                                  alignSelf: "flex-start",
                                                  height: 200,
                                                  width: "98%"
                                                }}
                                                circular
                                                source={{ uri: this.state.cover }}
                                              />


                                                <Text 
                                                  style={{ 
                                                    fontSize: 25, 
                                                    alignSelf: "flex-start", 
                                                    fontWeight: "bold", 
                                                    color: "black" 
                                                  }}
                                                >
                                                  {this.state.name}
                                                </Text>

                                                <Text 
                                                  style={{ 
                                                    fontSize: 20, 
                                                    alignSelf: "flex-start", 
                                                    color: "black" 
                                                  }}
                                                >
                                                  Rp.{this.state.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")},00
                                                </Text>

                                      <View style={{width: "90%", paddingTop: 10}}>
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "flex-start", 
                                                    color: "black",
                                                    textAlign: 'auto'
                                                  }}
                                                >
                                                  {this.state.desc}
                                                </Text>
                                      </View>

                                </View>
                                            
          </View>
        </Content>

      </Container>
    ) 
  }



  form_menudetail()
  {
    return(
      <Container style={{backgroundColor: "#A52A2A"}}>
                            <View style={{justifyContent: "flex-start", width: "100%", height: "10%"}}>
                                  <TouchableOpacity style={{alignSelf: "flex-start", paddingLeft: 15, paddingTop: 25}} onPress={()=>
                                    {
                                      this.setState({
                                        menu: false
                                      })
                                    }
                                  } >
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "center", 
                                                    fontWeight: "bold", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  ❌
                                                </Text>
                                  </TouchableOpacity>
                            </View>

          <View style={{paddingTop: 50, width: "100%", height: "90%", borderTopRightRadius: 65, borderTopLeftRadius: 65, backgroundColor: "white"}}>
            
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "flex-start", 
                                                    fontWeight: "bold", 
                                                    color: "black",
                                                    paddingLeft: 45,
                                                    paddingTop: 15,
                                                    paddingBottom: 25
                                                  }}
                                                >
                                                  FEATURES
                                                </Text>


            <View style={{alignSelf: "center", flexDirection: "row", justifyContent: "center", width: "90%"}}>
              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📺
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📡
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📖
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  💼
                </Text>
              </TouchableOpacity>
            </View>

















            <View style={{alignSelf: "center", flexDirection: "row", justifyContent: "center", width: "90%"}}>
              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#0000FF", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  👤
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#0000FF", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  ☂️
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#0000FF", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  🛒
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#0000FF", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  🏷️
                </Text>
              </TouchableOpacity>
            </View>






            <View style={{alignSelf: "center", flexDirection: "row", justifyContent: "center", width: "90%"}}>
              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#008000", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  🗝️
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#008000", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  💰
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#008000", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  ⚖️
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#008000", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  💎
                </Text>
              </TouchableOpacity>
            </View>
            
                                            
          </View>

      </Container>
    ) 
  }

  form_utama()
  {
    return(
      <Container style={{backgroundColor: "white"}}>
                            <Header style={{ backgroundColor:'#A52A2A' }}>
                              <Left>
                                      
                              </Left>
                              <Body>
                                                <Text 
                                                  style={{ 
                                                    fontSize: 15, 
                                                    alignSelf: "center", 
                                                    fontWeight: "bold", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  LIST PRODUCT
                                                </Text>
                              </Body>
                              <Right>
                              </Right>
                            </Header>


        <Content padder enableResetScrollToCoords={false}>
          <View style={{flexDirection: "row", width: "100%", height: "100%"}}>
                                            <List

                                              dataArray={this.props.data_items}
                                              renderRow={(data, sectionID, rowID) =>                                    

                                <View style={{ borderRadius: 15, backgroundColor: "#A52A2A", borderColor: "#A52A2A", borderWidth: 2, alignSelf: "center", width: "90%", justifyContent: "center", paddingLeft: 20, marginLeft: 20, paddingRight: 20, marginRight: 20, paddingTop: 20, marginTop: 20, paddingBottom: 20, marginBottom: 20 }}>
                                  <TouchableOpacity onPress={()=>
                                    
                                      this.setState({
                                        name: data.name,
                                        cover: data.cover,
                                        desc: data.desc,
                                        price: data.price
                                      })
                                    
                                  } >

                                              <Thumbnail
                                                style={{
                                                  alignSelf: "flex-start",
                                                  height: 200,
                                                  width: "100%"
                                                }}
                                                circular
                                                source={{ uri: data.cover }}
                                              />


                                                <Text 
                                                  style={{ 
                                                    fontSize: 25, 
                                                    alignSelf: "flex-start", 
                                                    fontWeight: "bold", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  {data.name}
                                                </Text>

                                                <Text 
                                                  style={{ 
                                                    fontSize: 20, 
                                                    alignSelf: "flex-start", 
                                                    color: "white" 
                                                  }}
                                                >
                                                  Rp.{data.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")},00
                                                </Text>

                                  </TouchableOpacity>
                                </View>
                                            
                                              }
                                          />
          </View>

        </Content>

        <View style={{backgroundColor: "transparent", height: "15%", width: "100%", justifyContent: "center"}}>
          <View style={{alignSelf: "center",borderColor: "black", borderLeftWidth: 1,borderRightWidth: 1,borderTopWidth: 3, borderRadius: 65, height: "90%", width: "95%"}}>
            <TouchableOpacity
              style={{borderRadius: 25, backgroundColor: "black", alignSelf: "center", height: 0, width:"20%", paddingBottom: 10, marginBottom: 10, borderWidth: 2, borderColor: "black"}}
              onPress={()=>
                this.setState({menu: true})
              }
            >

            </TouchableOpacity>

            <View style={{alignSelf: "center", flexDirection: "row", justifyContent: "center", width: "90%"}}>
              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📺
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📡
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  📖
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{width: 65 ,height: 65,borderRadius: 50, backgroundColor: "#A52A2A", alignSelf: "center", paddingBottom: 10, marginBottom: 10, paddingTop: 10, marginTop: 10, paddingRight: 8, marginRight: 8, paddingLeft: 8, marginLeft: 8}}
                onPress={()=>
                  Alert.alert("TES TES TES")    
                }
              >
                <Text 
                  style={{ 
                    fontSize: 25, 
                    alignSelf: "center", 
                    fontWeight: "bold", 
                    color: "black" 
                  }}
                >
                  💼
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Container>
    )
   
  }

  

  render() {
    if(JSON.stringify(this.props.data_items) == "[]")
    {
      return (this.form_loading())
    }
    else if(JSON.stringify(this.props.data_items) != "[]")
    {
      if(this.state.name == "")
      {
        if(this.state.menu == false)
        {
          return (this.form_utama())      
        }
        else if(this.state.menu == true)
        {
          return (this.form_menudetail())      
        }
      }
      else if(this.state.name != "")
      {
        return (this.form_detail())      
      }
    }
  }

  
}

const ITEMS = reduxForm({
  form: "ITEMS"
})(ItemsForm);


function bindAction(dispatch) {
  return {
    fetchDataItems: url => dispatch(itemsFetchData(url))
    // fetchDataItems: body_items => dispatch(itemsFetchData(body_items))
  };
}
const mapStateToProps = state => ({
  data_items: state.itemsReducer.data_items
});


export default connect(mapStateToProps, bindAction)(ITEMS);
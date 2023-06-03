import React from 'react';
import {  View, Text, Image, StyleSheet, Button, Linking} from 'react-native';
import {JosefinSans_100Thin, 
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic} from "@expo-google-fonts/josefin-sans";
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';

const componentName = () => {

    let [fontsLoad] = useFonts({
        JosefinSans_100Thin, 
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic
    });

    if(!fontsLoad){
        return <AppLoading/>;
    }


    return (
      <View style={styles.container}>
        <Text style={styles.head}> WebSeries </Text>
        <View style={styles.body}>
            <Image
                style={styles.imgStyle}
                source={{
                    uri: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_584723932.jpg",
                }}
            />
            <View style={styles.bodyInfo}>
                <Text style={styles.title}>Farzi</Text>
                <Text style={styles.details}>Farzi is about Sunny, an artist disillusioned by the income inequality in India after failing to keep his grandfather's revolutionary printing press in business. He decides to team with his best friend Firoz to make counterfeit money. They face challenges from Mansoor, a gangster, and Michael, a cop. According to co-creator Raj Nidimoru, the title Farzi (which means "fake") refers to counterfeiting, as well as the "fakeness" inherent in people.</Text>
            </View>
            <Button
                title='Watch Free'
                onPress={ () =>
                    Linking.openURL("https://en.wikipedia.org/wiki/Farzi")
                }
            />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 60,
        alignItems: "center",
    },
    head: {
       fontSize: 30,
       marginBottom: 8,
       fontFamily: "JosefinSans_700Bold",
    },
    imgStyle : {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    body : {
        borderWidth: 1,
        width: 350,
        alignItems: "center",
    },
    bodyInfo : {
        alignItems: "center",
        margin: 5,
    },
    title : {
        fontSize: 50,
        fontWeight: "900",
        color: "#8a2be2",
    },
    details: {
        color: "#999",
        padding: 20,
    },
})

export default componentName;



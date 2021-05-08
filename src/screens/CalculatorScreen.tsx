import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {
        lastNumber, 
        number, 
        clean, 
        changeSign, 
        btnDeleteLastNumber, 
        btnDivide,
        buildNumber,
        btnMultiply,
        btnMinus,
        btnSum,
        calc 
    } = useCalculator();
    
    return (    
    <View style={ styles.calculatorContainer }>
        <Text style= {styles.smallResult}>{ lastNumber }</Text>
        <Text 
            style= {styles.result}
            numberOfLines= {1}
            adjustsFontSizeToFit
        >
            {number}
        </Text>

        <View style={styles.row}>
            <ButtonCalc text= 'C' color='#9B9B9B' action= { clean }/>
            <ButtonCalc text= '+/-' color='#9B9B9B' action= { changeSign }/>
            <ButtonCalc text= 'del' color='#9B9B9B' action= { btnDeleteLastNumber }/>
            <ButtonCalc text= '/' color= '#FF9427' action= { btnDivide }/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text= '7' action= { buildNumber }/>
            <ButtonCalc text= '8' action= { buildNumber }/>
            <ButtonCalc text= '9' action= { buildNumber }/>
            <ButtonCalc text= 'X' color= '#FF9427' action= { btnMultiply }/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text= '4' action= { buildNumber }/>
            <ButtonCalc text= '5' action= { buildNumber }/>
            <ButtonCalc text= '6' action= { buildNumber }/>
            <ButtonCalc text= '-' color= '#FF9427' action= { btnMinus }/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text= '1' action= { buildNumber }/>
            <ButtonCalc text= '2' action= { buildNumber }/>
            <ButtonCalc text= '3' action= { buildNumber }/>
            <ButtonCalc text= '+' color= '#FF9427' action= { btnSum }/>
        </View>
        <View style={styles.row}>
            <ButtonCalc text= '0' width action= { buildNumber }/>
            <ButtonCalc text= '.' action= { buildNumber }/>
            <ButtonCalc text= '=' color= '#FF9427' action= { calc }/>
        </View>
        
    </View>
    )
}

import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState(0);

  const btnClick = (text) => {
    
    if(text == '='){
      return calculation();
    }
    setResultText(resultText + text);
  }

  const operationClick = (text) => {
    let operations = ["DEL", "AC", "+", "-", "*", "/"]
    if(text == 'AC'){
      setResultText("");
      setCalcText(0);
      return;
    }
    if(text == 'DEL'){
      setResultText(resultText.toString().substring(0, resultText.length - 1));
      return;
    }
    console.log(resultText.length - 1)

    if(operations.includes(resultText.toString().split("").pop())) return;
    setResultText(resultText + text)
  }

  const calculation = () => {
    let lastOne = resultText.toString().slice(-1);
    console.log(lastOne)
    if(lastOne != "+" && lastOne != "-" && lastOne != "*" && lastOne != "/" && lastOne != "."){
      setCalcText(eval(resultText))
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.calculate}>
        <Text style={styles.calculateText}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {btnClick(1)}}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(2)}}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(3)}}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {btnClick(4)}}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(5)}}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(6)}}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {btnClick(7)}}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(8)}}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick(9)}}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {btnClick(0)}}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick('.')}}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {btnClick('=')}}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operator}>
          <TouchableOpacity onPress={() => {operationClick('DEL')}}>
            <Text style={styles.number}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operationClick('AC')}}>
            <Text style={styles.number}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operationClick('+')}}>
            <Text style={styles.number}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operationClick('-')}}>
            <Text style={styles.number}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operationClick('*')}}>
            <Text style={styles.number}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {operationClick('/')}}>
            <Text style={styles.number}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    backgroundColor: '#131515',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderBottomColor: '#119da4',
    borderBottomWidth: 1
  },
  calculate: {
    backgroundColor: '#131515',
    flex: 1,
    alignItems:'flex-end',
    justifyContent: 'center',
    borderBottomColor: '#119da4',
    borderBottomWidth: 1
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    backgroundColor: '#131515',
    flex: 3,
    borderRightColor: '#119da4',
    borderRightWidth: 1
  },
  operator: {
    backgroundColor: '#131515',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#44a1a0'
  },
  calculateText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#44a1a0'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  number: {
    color: '#44a1a0',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10
  }
});

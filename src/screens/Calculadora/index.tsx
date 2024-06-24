import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Janela from "../../components/Janela";

type ButtonConfig = {
  inputValue: string;
  style: object;
  handler: (value: string) => void;
  displayText?: string;
};

export default function Calculadora() {
  const [input, setInput] = useState("0");

  const handleInput = (value: string) => {
    if (value === "C") {
      setInput("0.");
    } else {
      setInput(input === "0." ? value : input + value);
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(Number.isFinite(result) ? result.toString() : "Error");
    } catch (error) {
      setInput("Error");
    }
  };

  const layout: ButtonConfig[][] = [
    [
      { inputValue: "7", style: styles.button, handler: handleInput },
      { inputValue: "8", style: styles.button, handler: handleInput },
      { inputValue: "9", style: styles.button, handler: handleInput },
      {
        inputValue: "/",
        displayText: "÷",
        style: styles.operatorButton,
        handler: handleInput,
      },
    ],
    [
      { inputValue: "4", style: styles.button, handler: handleInput },
      { inputValue: "5", style: styles.button, handler: handleInput },
      { inputValue: "6", style: styles.button, handler: handleInput },
      {
        inputValue: "*",
        displayText: "×",
        style: styles.operatorButton,
        handler: handleInput,
      },
    ],
    [
      { inputValue: "1", style: styles.button, handler: handleInput },
      { inputValue: "2", style: styles.button, handler: handleInput },
      { inputValue: "3", style: styles.button, handler: handleInput },
      { inputValue: "-", style: styles.operatorButton, handler: handleInput },
    ],
    [
      { inputValue: "0", style: styles.button, handler: handleInput },
      { inputValue: ".", style: styles.button, handler: handleInput },
      { inputValue: "C", style: styles.button, handler: handleInput },
      { inputValue: "+", style: styles.operatorButton, handler: handleInput },
    ],
    [
      {
        inputValue: "=",
        style: styles.calculateButton,
        handler: handleCalculate,
      },
    ],
  ];

  const getTextStyle = (inputValue: string) => {
    const redTextInputs = ["/", "*", "-", "+", "=", "C"];
    return redTextInputs.includes(inputValue)
      ? [styles.buttonText, { color: "red" }]
      : styles.buttonText;
  };

  return (
    <View style={styles.container}>
      <Janela header="Calculadora" height={"45%"} width={"90%"}>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{input}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {layout.map((rows, index) => (
            <View style={styles.row} key={index}>
              {rows.map((row) => (
                <TouchableOpacity
                  key={row.inputValue}
                  style={row.style}
                  onPress={() => row.handler(row.inputValue)}
                >
                  <Text style={getTextStyle(row.inputValue)}>
                    {row.displayText ? row.displayText : row.inputValue}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </Janela>
    </View>
  );
}

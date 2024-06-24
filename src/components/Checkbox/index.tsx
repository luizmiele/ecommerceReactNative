import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (newValue: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const toggleCheckbox = () => {
    onChange(!checked);

    // const [selectedOption, setSelectedOption] = useState<string | null>(null);
    // const handleCheckboxChange = (option: string) => {
    //   setSelectedOption(option === selectedOption ? null : option);
    // };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={[
          styles.checkboxContainer,
          checked && styles.checkboxContainerChecked,
        ]}
      >
        {checked && <View style={styles.checkboxChecked} />}
      </TouchableOpacity>
      <Text style={styles.optionText}>{label}</Text>
    </View>
  )
}

export default Checkbox;

//   <View style={styles.container}>
//       <Text style={styles.title}>Tipo: </Text>
//       <Checkbox
//         label="Material"
//         checked={selectedOption === 'Material'}
//         onChange={() => handleCheckboxChange('Material')}
//       />
//       <Checkbox
//         label="Armadura"
//         checked={selectedOption === 'Armadura'}
//         onChange={() => handleCheckboxChange('Armadura')}
//       />
//     </View>

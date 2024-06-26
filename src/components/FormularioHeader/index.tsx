import DropDownPicker from "react-native-dropdown-picker";
import DisplayItem from "../DisplayItem";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";
import { getAllItens, getItemById } from "../../services/Api/api";
import { ItemEquipment } from "../../types";
import { styles } from "./styles";

export default function FormularioHeader({
  itemEquipment,
  setItemEquipment,
  handleMaterialCheck,
  handleArmorCheck,
  cancelaItem,
  setItemId,
}: {
  itemEquipment: ItemEquipment;
  setItemEquipment: any;
  handleMaterialCheck: () => void;
  handleArmorCheck: () => void;
  cancelaItem: () => void;
  setItemId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Object[]>([]);
  const [value, setValue] = useState(null);
  const [selecionaItem, setSelecionaItem] = useState(false);

  const pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const manipResult = await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 400 } }],
                { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
            );

            const base64 = await FileSystem.readAsStringAsync(
                manipResult.uri,
                { encoding: FileSystem.EncodingType.Base64 }
            );
            
            setItemEquipment({ ...itemEquipment, img: `data:image/jpeg;base64,${String(base64)}` });
        }
    } catch (error) {
        console.error("Erro ao selecionar ou manipular a imagem:", error);
    }
};

  const fetchData = async () => {
    try {
      const result = await getAllItens();
      let itensAtivos = result?.filter((item) => item.status === "ativo");

      const itens =
        itensAtivos?.map((item) => ({ value: item.id, label: item.name })) ||
        [];
      setData(
        itens.length > 0
          ? itens
          : [{ value: "1", label: "Nenhum item encontrado" }]
      );
    } catch (err) {
      console.log(err);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, [itemEquipment.status]);

  useEffect(() => {
    if (itemEquipment.type === "Armor") {
      handleArmorCheck();
      return;
    } else if (itemEquipment.type === "Material") {
      handleMaterialCheck();
    }
  }, [selecionaItem, itemEquipment.type]);

  const escolheItem = (id: any) => {
    setItemId(id);
    cancelaItem();
    getItemById(id).then((item) => {
      setItemEquipment({ ...itemEquipment, ...item });
    });
    setSelecionaItem(!selecionaItem);
  };

  return (
    <>
      <DropDownPicker
        open={open}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setData}
        onSelectItem={(item) => {
          escolheItem(item.value);
        }}
        style={styles.dropDown}
      />
      <DisplayItem itemImage={itemEquipment.img} onPress={pickImage} />
    </>
  );
}

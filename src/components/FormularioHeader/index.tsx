import DropDownPicker from 'react-native-dropdown-picker';
import DisplayItem from "../DisplayItem";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from "react";
import { getAllItens, getItemById } from "../../services/Api/api";
import {ItemEquipment } from '../../types';

export default function FormularioHeader({ itemEquipment, setItemEquipment }: { itemEquipment: ItemEquipment, setItemEquipment: any }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [data, setData] = useState<Object[]>([]);


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
                setItemEquipment({ ...itemEquipment, img: base64 });
            }
        } catch (error) {
            console.error("Erro ao selecionar ou manipular a imagem:", error);
        }
    };


    const fetchData = async () => {
        try {
            const result = await getAllItens();
            const itens = result?.map((item) => ({ value: item.id, label: item.name })) || [];
            setData(itens.length > 0 ? itens : [{ value: '1', label: 'Nenhum item encontrado' }]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const escolheItem = (id: any) => {
        getItemById(id).then((item) => setItemEquipment({ ...itemEquipment, ...item }));
    }

    return (
        <>
            <DisplayItem itemImage={itemEquipment.img} onPress={pickImage} />
            <DropDownPicker
                open={open}
                value={value}
                items={data}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setData}
                onSelectItem={(item) => escolheItem(item.value)}
            />
        </>
    );
}
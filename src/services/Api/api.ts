import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
	baseURL: 'https://6632937ac51e14d69564d9af.mockapi.io/test/v1'
});

// const [newItemName, setNewIteName] = useState("");
// const [newItemDescription, setNewItemDescription] = useState("");
// const [newItemPrice, setNewItemPrice] = useState("");
// const [newItemType, setNewItemType] = useState("");

// interface FormData {
//   name: string;
//   description: string;
//   price: string; 
//   type: string;
// }
// const formData: FormData = {
//   name: newItemName,
//   description: newItemDescription,
//   price: newItemPrice,
//   type: newItemType,
// };


export async function postItem(formData: FormData): Promise<FormData | null> {
    try {
      const endpoint = "/itens";
      const response = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 201) {
        alert("Formulário enviado com sucesso!");
        console.log("Formulário enviado com sucesso:", response.data);
        return response.data;
      } else {
        console.error('Falha ao enviar o formulário:', response.status);
        return null;
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      return null;
    }
  }

  export async function getAllItens(): Promise<any[] | null> {
    try {
      const endpoint = '/itens';
      const response = await api.get(endpoint);
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Falha ao obter todos os itens:', response.status);
        return null;
      }
    } catch (error) {
      console.error("Erro ao obter todos os itens:", error);
      return null;
    }
  }
  

  export async function getItemById(id: string): Promise<FormData | null> {
    try {
      const endpoint = `/itens/${id}`;
      const response = await api.get(endpoint);
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Falha ao obter o item com ID ${id}:`, response.status);
        return null;
      }
    } catch (error) {
      console.error(`Erro ao obter o item com ID ${id}:`, error);
      return null;
    }
  }
  

export async function editItem(id: string, formData: FormData): Promise<FormData | null> {
    try {
      const response = await api.put(`/items/${id}`, formData);

      if (response.status === 200) {
        Alert.alert("Item editado com sucesso!")
        console.log('Item atualizado com sucesso:', response.data);
        return response.data;
      } else {
        console.error('Falha ao atualizar o item:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao atualizar o item:', error);
      return null;
    }
  }

  export async function deleteById(id: string): Promise<string | null> {
    try {
      const endpoint = `/itens/${id}`;
      const response = await api.delete(endpoint);
  
      if (response.status === 200) {
        console.log('Item deletado com sucesso');
        return 'Item deletado com sucesso';
      } else {
        console.error('Falha ao deletar o item:', response.status);
        return null;
      }
    } catch (error) {
      console.error(`Erro ao deletar o item com ID ${id}:`, error);
      return null;
    }
  }

  


import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: 'https://6632937ac51e14d69564d9af.mockapi.io/test/v1'
});


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

    const response = await api.put(`/itens/${id}`, formData);

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

export async function deleteById(id: string | number): Promise<string | null> {
  console.log(`Iniciando a função deleteById com ID: ${id}`);

  try {
    const endpoint = `/itens/${id}`;
    console.log(`Endpoint definido: ${endpoint}`);

    const response = await api.delete(endpoint);
    console.log(`Resposta recebida do endpoint:`, response);

    if (response.status === 200) {
      alert("Item deletado com sucesso");
      return null;
    } else {
      console.error('Falha ao deletar o item:', response.status);
      return null;
    }
  } catch (error) {
    console.error(`Erro ao deletar o item com ID ${id}:`, error);
  }

  console.log('Retornando null no final da função');
  return null;
}
  export async function deleteLogico(id: string): Promise<Object | null> {
    try {
      const endpoint = `/itens/${id}`;
      const itemEncontrado = (await api.get(endpoint)).data;

      if (itemEncontrado) {
        const response = await api.put(endpoint, { ...itemEncontrado, status: "deletado" });

        if (response.status === 200) {
          alert("Item deletado com sucesso");
          return response.data;
        } else {
          console.error('Falha ao deletar o item:', response.status);
          return null;
        }
      }
      else {
        return null;
      }
    } catch (error) {
      alert("Falha ao deletar o item");
      return null;
    }
  }

  export async function getAllUsers(): Promise<any[] | null> {
    try {
      const endpoint = '/login';
      const response = await api.get(endpoint);

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Falha ao obter todos os usuários: ', response.status);
        return null;
      }
    } catch (error) {
      console.error("Erro ao obter todos os usuários: ", error);
    }
    return null;
  }
    export async function restaurarItem(id: string | number): Promise<Object | null> {
      try {
        const endpoint = `/itens/${id}`;
        const itemEncontrado = await api.get(endpoint);

        if (itemEncontrado) {
          const response = await api.put(endpoint, { ...itemEncontrado, status: "ativo" });

          if (response.status === 200) {
            alert("Item restaurado com sucesso");
            return response.data;
          } else {
            console.error('Falha ao deletar o item:', response.status);
            return null;
          }
        }
        else {
          return null;
        }
      } catch (error) {
        alert("Falha ao restaurar o item");
        return null;
      }
    }



import { useEffect, useState } from "react";
import { FlatList, Alert, Linking } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { CardCar } from "@components/CardCar";
import { HomeContainer, TextContainer, CarBrandContainer } from "./style";
import { carsApi } from "src/services/carsApi";
import axios from "axios"; 

interface Model {
  codigo: string;
  nome: string;
}

interface RouteParams {
  brandCode: string;
}

export function Models() {
  const route = useRoute();
  const { brandCode } = route.params as RouteParams;
  const [modelsData, setModelsData] = useState<Model[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Model[]>([]);
  const [brandName, setBrandName] = useState<string>("");

  const navigation = useNavigation();

  const fetchBrandName = async () => {
    try {
      const response = await axios.get(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);
      const brand = response.data.find((item: { codigo: string; nome: string }) => item.codigo === brandCode);
      if (brand) {
        setBrandName(brand.nome);
      }
    } catch (error) {
      Alert.alert("Erro ao buscar marca", (error as any).message);
    }
  };

  useEffect(() => {
    fetchBrandName();

    const fetchData = async () => {
      try {
        const response = await carsApi.get<{ modelos: Model[] }>(
          `/marcas/${brandCode}/modelos`
        );
        const data = response.data.modelos;
        setModelsData(data);
        setFilteredData(data);
      } catch (error) {
        Alert.alert("Erro ao buscar dados", (error as any).message);
      }
    };
    fetchData();
  }, [brandCode]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setSearchText("");
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = modelsData.filter((model) =>
        model.nome.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText, modelsData]);

  const handleRedirectToGoogleImages = (modelName: string) => {
    const searchQuery = `${modelName} car`;
    const googleImagesUrl = `https://www.google.com/search?hl=en&tbm=isch&q=${encodeURIComponent(searchQuery)}`;
    Linking.openURL(googleImagesUrl);
  };

  return (
    <HomeContainer>
      <Header
        placeHolder="Busque um modelo"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <CarBrandContainer>
        <TextContainer>{brandName} - Modelos</TextContainer>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.codigo.toString()}
          renderItem={({ item }) => (
            <CardCar
              brandName={item.nome}
              buttonName="Ver"
              onPressButton={() => handleRedirectToGoogleImages(item.nome)} 
            />
          )}
          ListEmptyComponent={<TextContainer>Nenhum modelo encontrado</TextContainer>}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        />
      </CarBrandContainer>
    </HomeContainer>
  );
}

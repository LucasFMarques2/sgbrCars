import { HomeContainer, TextContainer, CarBrandContainer } from "./style";
import { Header } from "@components/Header";
import { CardCar } from "@components/CardCar";
import { FlatList, Alert } from "react-native";
import { carsApi } from "src/services/carsApi";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Home: undefined;
  Models: { brandCode: string };
};


interface Brand {
  codigo: string;
  nome: string;
}

export function Home() {
  const [brandData, setBrandData] = useState<Brand[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Brand[]>([]);
  const navigation = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await carsApi.get<Brand[]>("/marcas");
        const data = response.data;
        setBrandData(data);
        setFilteredData(data);
      } catch (error) {
        Alert.alert("Erro ao buscar dados", (error as any).message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setSearchText("");
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const filtered = brandData.filter((brand) =>
      brand.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText, brandData]);

  const handlePressButton = (brandCode: string) => {
    navigation.navigate("Models", { brandCode });
  };

  return (
    <HomeContainer>
      <Header
        placeHolder="Busque uma marca"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <CarBrandContainer>
        <TextContainer>Marcas</TextContainer>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.codigo.toString()}
          renderItem={({ item }) => (
            <CardCar brandName={item.nome} onPressButton={() => handlePressButton(item.codigo)} />
          )}
          ListEmptyComponent={<TextContainer>Nenhuma marca encontrada</TextContainer>}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        />
      </CarBrandContainer>
    </HomeContainer>
  );
}

import { BrandContainer, ButtonContainer, TextContainer, CardContainer, TextBrandContainer } from "./style"
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from "styled-components"

interface CardCarProps {
  brandName: string
  onPressButton?: () => void
  buttonName?: string
}

export function CardCar({ brandName, onPressButton, buttonName = 'Acesse' }: CardCarProps) {
  const theme = useTheme();

  return (
    <CardContainer>
      <BrandContainer>
        <TextBrandContainer>{brandName}</TextBrandContainer>
      </BrandContainer>
      <ButtonContainer onPress={onPressButton}>
        <TextContainer>{buttonName}</TextContainer>
        <AntDesign name='arrowright' size={20} color={theme.COLORS.white} />
      </ButtonContainer>
    </CardContainer>
  );
}

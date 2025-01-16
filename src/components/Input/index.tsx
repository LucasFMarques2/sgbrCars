import { TextInputProps, TouchableOpacity } from "react-native"
import { InputTextContainer, InputContainer, IconContainer } from "./styles"
import { FontAwesome,  MaterialIcons, Octicons } from "@expo/vector-icons"
import { useTheme } from "styled-components"


type MaterialIconsNames = keyof typeof MaterialIcons.glyphMap
type FontAwesomeNames = keyof typeof FontAwesome.glyphMap
type OcticonsNames = keyof typeof Octicons.glyphMap

type IconName = MaterialIconsNames | FontAwesomeNames | OcticonsNames

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>

interface InputProps extends TextInputProps {
  Icon?: IconComponent
  placeholderTextColor?: string;
  IconName?: IconName | any
  IconSize?: number;
  onIconPress?: () => void
}




export function Input({
  Icon,
  IconName,
  IconSize = 24,
  onIconPress,
  ...rest
}: InputProps) {

  const theme = useTheme()
  return (
    <InputContainer>
      <InputTextContainer
        {...rest}
      />
      <IconContainer>
        {Icon && (
          <TouchableOpacity onPress={onIconPress}>  
            <Icon name={IconName} size={IconSize} color={theme.COLORS.gray_opacity}/>
          </TouchableOpacity>
        )}
      </IconContainer>
    </InputContainer>
  );
}

import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";

export const FieldPlaylist = styled.View`
        width: 100%;
     
        
`
export const ContainerPlaylist = styled.View`
        width: 100%;
        
`
export const TextContainer = styled.Text`
        font-size: 20px;
        text-decoration: underline;
        text-decoration-color: ${colors.complement.secondary};
        color: ${colors.complement.secondary};
`
export const ViewPlaylist = styled.View`

        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5px;

`
export const ViewButtonIndicatorPlaylist = styled.View`
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 10px;
`

export const ViewIndicatorPlaylist = styled.View`
        
`



export const ContainerContent = styled.View`
  display: flex;
  flex-direction: column;
  flex:1;
  gap:7px;
  
  `
  export const ViewContent = styled.View`
   min-height: 50px;
   padding: 10px;
   background-color: ${colors.blur.primary};
  
  `

export const Title = styled.Text`
  color: ${colors.complement.secondary};
  font-size: 20px;
  font-weight: 600;
  `
export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const TextLink = styled.Text`
 color: ${colors.complement.secondary};
 font-size: 16px;
 text-decoration: underline;
 text-decoration-color: ${colors.complement.secondary};
`
export const TextContent = styled.Text`
  color: ${colors.complement.secondary};
  font-size: 16px;
`
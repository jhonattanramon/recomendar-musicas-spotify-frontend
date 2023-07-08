import { Button } from "../ButtonComponent";

export function SettingIcon({icon, size, color}){
    return(
        <Button.Icon  color={color} size={size} icon={icon} />
    )
}
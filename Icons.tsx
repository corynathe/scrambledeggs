import React, { FC, memo, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
    index?: number;
    name: string;
    color: string;
    size: number;
    style?: any;
    type?: string;
    onClick?: (index: number) => void;
}

export const ClickIcon: FC<IconProps> = (props) => {
    const { onClick } = props;

    const _onClick = useCallback(() => {
        onClick?.(props.index);
    }, [props]);

    return (
        <TouchableOpacity onPress={_onClick}>
            {props.type === 'FontAwesome' && <FAIcon {...props} />}
            {props.type === 'FontAwesome5' && <FA5Icon {...props} />}
            {props.type === 'MaterialCommunityIcons' && <MCIcon {...props} />}
        </TouchableOpacity>
    )
}

export const NonClickIcon: FC<IconProps> = (props) => {
    return (
        <>
            {props.type === 'FontAwesome' && <FAIcon {...props} />}
            {props.type === 'FontAwesome5' && <FA5Icon {...props} />}
            {props.type === 'MaterialCommunityIcons' && <MCIcon {...props} />}
        </>
    )
}

export const FAIcon: FC<IconProps> = (props) => {
    return (
        <FontAwesome {...props}  />
    )
}

export const FA5Icon: FC<IconProps> = (props) => {
    return (
        <FontAwesome5 {...props}  />
    )
}

export const MCIcon: FC<IconProps> = (props) => {
    return (
        <MaterialCommunityIcons {...props} />
    )
}

interface LevelIconsProps {
    icons: string[];
    size: number;
    color: string;
}

export const LevelIcons: FC<LevelIconsProps> = memo(props => {
    const { icons, size, color } = props;
    return (
        <>
            {icons.map((icon, i) => {
                return <FAIcon key={i} name={icon} color={color} size={size} />;
            })}
        </>
    )
});
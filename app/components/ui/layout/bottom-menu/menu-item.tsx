import { FC } from 'react'
import { View, Pressable } from 'react-native'
import { TypeRootStackParamList } from '../../../../navigation/navigarion.inerfaces'
import { IMenuItem } from './bottom-menu.interfaces'
import { Feather } from '@expo/vector-icons'
import { getColor } from '../../../../config/colors.config'

interface IMenuItemProps {
    item: IMenuItem
    nav: (screenName: keyof TypeRootStackParamList) => void
    currentRoute?: string
}


export const MenuItem: FC<IMenuItemProps> = ({currentRoute, nav, item}) => {

    const isActive = currentRoute === item.path

return (
    <Pressable className='items-center w-[20%]' onPress={() => nav(item.path)}>
    <Feather
        name={item.iconName}
        size={26}
        color={isActive ? getColor('primary') : getColor('gray.400')}
    />
</Pressable>
)
}
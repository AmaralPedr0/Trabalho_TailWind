import { View, Text, } from 'react-native';
import Button from '../components/Button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    return (
        <View className="flex-1 bg-gray">

            {/* Imagem */}
            <View className="flex w-full h-1/2 justify-end items-center ">
                <MaterialCommunityIcons name="ship-wheel" size={180} color="blue" />
            </View>

            {/* Texto principal */}
            <View className="flex w-full h-28 justify-center items-center">
                <View className="mt-5">
                    <Text className='text-blue-600 font-bold text-[25px]'>Welcome To</Text>
                </View>

                <View className="mt-2">
                    <Text className="text-center">Create an account and access thousand {"\n"} of cool stuffs</Text>
                </View>
            </View>

            {/* Botão */}
            <View className="mt-10 items-center justify-center">
                <Button title='Get Started' onPress={() => navigation.navigate('LogIn')} />
            </View>

            {/* Logar */}
            <View className="flex-row mt-4 justify-center">
                <Text>Do you have an account? </Text>
                <Text className="font-bold">Log in</Text>
            </View>
        </View >
    );
}

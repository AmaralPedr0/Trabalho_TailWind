import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function LogInScreen({ navigation }) {
    return (
        <View className="flex-1 bg-gray">

            {/* Imagem */}
            <View className="flex w-full h-28 justify-center items-center mt-32 ">
                <MaterialCommunityIcons name="ship-wheel" size={60} color="blue" />
            </View>

            {/* Texto principal */}
            <View className="flex w-full h-28 justify-center items-center">
                <View className="mt-5">
                    <Text className='text-blue-600 font-bold text-[20px]'>Log In Now</Text>
                </View>

                <View className="mt-2">
                    <Text className="text-center">Please login to cotinue using our app</Text>
                </View>
            </View>

            {/* TextInput */}
            <View className="items-center">
                <TextInput className="w-[90%] p-5 h-16 border-2 border-gray-400 rounded-xl" placeholder='Email'></TextInput>
                <TextInput className="mt-5 w-[90%] p-5 h-16 border-2 border-gray-400 rounded-xl " placeholder='Password'></TextInput>
            </View>

            {/* Senha esquecida */}
            <View className="mt-5 w-full flex items-end">
                <Text className="mr-[7%] font-bold">Forgot Password</Text>
            </View>

            {/* Botão */}
            <View className="mt-10 items-center justify-center">
                <Button title='Log In' onPress={() => navigation.navigate('LogIn')} />
            </View>

            {/* Sign Up */}
            <View className="flex-row mt-4 justify-center">
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                    <Text className="font-bold text-blue-600">Sign Up</Text>
                </TouchableOpacity>
            </View>

            {/* Outras redes */}
            <View className="mt-8 items-center">
                <Text>Or connect with</Text>
                <View className="mt-5 flex-row gap-1">
                    <Entypo name="facebook-with-circle" size={24} color="blue" />
                    <Entypo name="twitter-with-circle" size={24} color="blue" />
                    <Entypo name="linkedin-with-circle" size={24} color="blue" />
                </View>
            </View>
        </View >
    );
}

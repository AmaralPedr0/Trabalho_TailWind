import { Text, TouchableOpacity } from 'react-native';
export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity
            className="bg-blue-700 w-[90%] py-3 rounded-lg active:bg-blue-600"
            onPress={onPress}
        >
            <Text className="text-white font-bold text-center text-lg">
                {title}
            </Text>
        </TouchableOpacity>
    );
}

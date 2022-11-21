import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/Balance';
import Movements from '../../components/Movements/Movements';
import Actions from '../../components/Actions/Actions';

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '250,90',
        date: '10/12/2022',
        type: 0 //despesas ou gastos
    },
    {
        id: 2,
        label: 'Salário',
        value: '3.700,00',
        date: '05/12/2022',
        type: 1 //receitas ou entradas
    },
    {
        id: 3,
        label: 'Aluguel',
        value: '1.250,80',
        date: '01/12/2022',
        type: 0
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='Andrei Nascimento' />
            <Balance saldo='8.550,03' gastos='-390,42' />

            <Actions />

            <Text style={styles.title}>Últimas Movimentações</Text>
            <FlatList 
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item}/> }
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
});

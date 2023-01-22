import React, { useState } from 'react';
import { Text, View, Pressable, Dimensions, TextInput, StyleSheet, Image, FlatList, } from 'react-native';
import moment from 'moment';

const _w = Dimensions.get('window').width
const _h = Dimensions.get('window').height

function HomeView(): JSX.Element {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const data = [
        {
            date: moment().subtract(7, "d").toString(),
            amount: 7.585,
            userId: "sgfdhgrsert65yerwfe",
            paid: true,
            name: "The Car",
            uuid: "vf34r65ergghd"
        },
        {
            date: moment().subtract(1, "d").toString(),
            amount: 3.212,
            userId: "sgfdhgrsert65yerwfe",
            paid: false,
            name: "The House",
            uuid: "hjhöyutyrewe5yt"
        },
        {
            date: moment().add(5, "d").toString(),
            amount: 7.585,
            userId: "sgfdhgrsert65yerwfe",
            paid: false,
            name: "The Car",
            uuid: "hjkyuytrtve4543"
        },
        {
            date: moment().add(11, "d").toString(),
            amount: 3.212,
            userId: "sgfdhgrsert65yerwfe",
            paid: false,
            name: "The House",
            uuid: "132tgrgeh65w6"
        },

    ]

    return (
        <View>
            <View style={{}}>
                <Text>MERHABA</Text>
            </View>
            <View style={styles.topTable}>
                <View style={styles.dateView}>
                    <Text style={styles.topSummaryText}>{moment().year()} Yılı</Text>
                </View>
                <View style={styles.summaryAmountView}>
                    <Text style={styles.topSummaryText}>2.055.985,45 TL</Text>
                </View>
            </View>
            <View style={styles.topTable}>
                <View style={styles.dateView}>
                    <Text style={styles.topSummaryText}>{moment().month() + 1}. Ay</Text>
                </View>
                <View style={styles.summaryAmountView}>
                    <Text style={styles.topSummaryText}>115.950,68 TL</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.flatItem}>
                            <View style={styles.flatDateView}>
                                <Text style={styles.flatDateText}>{moment(item.date).format('DD-MM')}</Text>
                                <Text style={styles.flatDateText}>{moment(item.date).format('YYYY')}</Text>
                            </View>
                            <View style={styles.flatAmountView}>
                                <Text style={styles.flatAmountText}> {item.amount.toString()}</Text>
                                <Text style={styles.flatNameText}> {item.name}</Text>
                            </View>
                            <View style={styles.flatCheckBox}>
                                <View style={styles.checkBox}>
                                    
                                </View>
                                <Text>Ödendi?</Text>
                            </View>
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                marginVertical: 10
                            }}>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default HomeView


const styles = StyleSheet.create({
    dateView: {
        width: _w / 5,
        height: _w / 8,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        marginVertical: 8,
        marginHorizontal: 8
    },
    topTable: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    summaryAmountView: {
        height: _w / 8,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        marginVertical: 8,
        marginRight: 8,
        flex: 1
    },
    topSummaryText: {
        color: "white",
        fontSize: 16
    },
    flatItem: {
        flexDirection: "row",
        height: _h / 10,
        backgroundColor: "pink"
    },
    checkBox: {
        height: _w / 14,
        width: _w / 14,
        border: 1,
        backgroundColor: "white",
        margin: 8
    },
    flatDateView: {
        backgroundColor: "#0d0d",
        width: _w / 5,
        alignItems: "center",
        justifyContent: "center",
    },
    flatDateText: {
        color: "white",
        fontSize: 16,
    },
    flatAmountView: {
        flex: 1
    },
    flatAmountText: {
        color: "white",
        fontSize: 22,
        marginLeft: 8,
        padding: 8
    },
    flatNameText: {
        marginLeft: 8,
    },
    flatCheckBox: {
        alignItems: "center",
        justifyContent: "center",
    }
})
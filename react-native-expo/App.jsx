import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "./components/navbar/Navbar";
import Filters from "./components/filters/Filters";
import Card from "./components/card/Card";
import { store } from "./app/store";
import { Provider } from "react-redux";
import DateRangee from "./components/dateRange/DateRangee";

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView>
        <View style={{ paddingTop: 30, backgroundColor: "rgb(253, 224, 253)" }}>
          <Navbar />

          <View>
            <Filters />
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.cardsContainer}>
              <Card status="Pending" color="gray" />
              <Card status="In Progress" color="orange" />
              <Card status="Completed" color="green" />
              <Card status="Deployed" color="purple" />
              <Card status="Deffered" color="#d67ed6" />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
});

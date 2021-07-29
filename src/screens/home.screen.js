import {
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
  Button,
} from "@ui-kitten/components";
import { CartIcon, BackIcon } from "../components/icons";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ImageBackground,
  View,
} from "react-native";

import CategoryCard from "../components/category-card";
import { Category } from "../store/data/trainings";
import { MenuIcon } from "../components/icons";
import * as fakeData from "../store/data/fake_data";
import * as realData from "../store/data/real_data";

const productSwitch = () => {
  return realData.stateData();

  // fakeData.book2(),
  // fakeData.book3(),
  // fakeData.book4(),
  // fakeData.book5(),
};

const HomeScreen = ({ navigation }) => {
  const displayTrainings = [
    Category.mobiles(),
    Category.mensWear(),
    Category.books(),
  ];

  const displayProducts = productSwitch();

  const renderHeader = () => (
    <React.Fragment>
      <Text style={styles.headerTitle} appearance="hint">
        List Product
      </Text>
      <List
        contentContainerStyle={styles.horizontalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={displayTrainings.reverse()}
        renderItem={renderHorizontalTrainingItem}
      />
      <View style={styles.containerProduct}>
        <List
          contentContainerStyle={styles.productList}
          data={(displayProducts.length && displayProducts) || []}
          numColumns={2}
          renderItem={renderProductItem}
        />
      </View>
    </React.Fragment>
  );

  const renderHorizontalTrainingItem = (info) => (
    <CategoryCard
      style={styles.horizontalItem}
      category={info.item}
      navigation={navigation}
    />
  );

  const renderItemHeader = (info) => (
    <ImageBackground
      style={styles.itemHeader}
      source={{ uri: info.item.image }}
    />
  );

  const onItemCartPress = (index) => {
    // navigation && navigation.navigate("ShoppingCart");
  };

  const renderItemFooter = (info) => (
    <View style={styles.itemFooter}>
      <Text category="s1" style={{ fontSize: 14 }}>
        {info.item.formattedPrice}
      </Text>
      <Button
        style={styles.iconButton}
        size="small"
        accessoryRight={CartIcon}
        onPress={() => onItemCartPress(info.index)}
      />
    </View>
  );

  const onItemPress = (index) => {
    // navigation && navigation.navigate("ProductDetail");
  };

  const renderProductItem = (info) => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}
    >
      <Text category="s1">{info.item.title}</Text>
      <Text appearance="hint" category="c1">
        {info.item.category}
      </Text>
    </Card>
  );

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const menuRenderer = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleDrawer} />
  );

  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, margin: 5 }}>
        <TopNavigation
          title="Home"
          alignment="center"
          accessoryLeft={menuRenderer}
          // rightControls={[overflowMenu()]}
        />
        <List
          contentContainerStyle={styles.list}
          // data={categories}
          // renderItem={renderVerticalTrainingItem}
          ListHeaderComponent={renderHeader}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 300,
    marginHorizontal: 8,
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  containerProduct: {
    marginHorizontal: 8,
  },
  productItem: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
    maxWidth: Dimensions.get("window").width / 2 - 24,
    // backgroundColor: "background-basic-color-1",
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

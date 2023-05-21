import { React, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import style from "./styles";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={style.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default Home;

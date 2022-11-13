import {StyleSheet, View, StatusBar, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../utils';
import CodePush from 'react-native-code-push';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import SectionContent from './parts/SectionContent';
import SectionMenu from './parts/SectionMenu';
import SectionProfile from './parts/SectionProfile';
import SectionHero from './parts/SectionHero';
import {useDispatch} from 'react-redux';
import {setDataPegawaiKehadiran} from '../../config/redux/action/presenceAction';

const Home = ({navigation}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  const dispatch = useDispatch();

  useEffect(() => {
    CodePush.checkForUpdate().then(update => {
      if (!update) {
        console.log('The app is up to date!');
      } else {
        navigation.replace('UpdateApp');
      }
    });
    dispatch(setDataPegawaiKehadiran());
  }, []);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = 420 - getStatusBarHeight();
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        translucent
        barStyle={isTransparent ? 'light-content' : 'light-content'}
        backgroundColor={isTransparent ? 'transparent' : colors.primary}
      />
      <View style={styles.page}>
        <View style={styles.content}>
          <Animated.ScrollView
            // scrollEnabled={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollA}}}],
              {useNativeDriver: true},
            )}
            scrollEventThrottle={16}>
            <Animated.View style={styles.wrapper(scrollA)}>
              {/* SECTION HERO */}
              <SectionHero />

              {/* SECTION PROFILE */}
              <SectionProfile navigation={navigation} />

              {/* SECTION MENU */}
              <SectionMenu />
            </Animated.View>

            {/* SECTION CONTENT */}
            <SectionContent scrollA={scrollA} />
          </Animated.ScrollView>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  wrapper: scrollA => ({
    height: 420,
    transform: [
      {
        translateY: scrollA,
      },
    ],
  }),
});

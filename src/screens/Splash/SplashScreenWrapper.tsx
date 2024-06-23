import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { Splash } from '../Splash';

export const SplashScreenWrapper = () => {
    const navigation = useNavigation<StackTypes>();
    const [splashComplete, setSplashComplete] = useState(false);

    useEffect(() => {
        if (splashComplete) {
            navigation.replace("Login");
        }
    }, [splashComplete, navigation]);

    return <Splash onComplete={setSplashComplete} />;
};


import {StyleSheet} from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { hideAsync } from "expo-splash-screen"

type Props = {
    onComplete: (status: boolean) => void;
}


export const Splash = ({onComplete}: Props) => {

    const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

    const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
        if(status.isLoaded) {
            if(lastStatus.isLoaded !== status.isLoaded) {
                hideAsync();                
            }
            if(status.didJustFinish) {
                onComplete(true);
            }
        }
    };

    return (
        <Video 
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require("../../../assets/splash/abertura-windows98-mobile.mp4")}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    )
};
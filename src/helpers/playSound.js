import { Audio } from 'expo-av';

import { sounds } from '../values/soundValues';

export const playSound = {
  async handleNoteSound(instrument, noteFull) {
    const soundObject = new Audio.Sound();

    let source = sounds[instrument][noteFull];
    await soundObject.loadAsync(source);
    await soundObject.playAsync().then(async playbackStatus => {
      setTimeout(() => {
        soundObject.unloadAsync();
      }, playbackStatus.playableDurationMillis);
    });
  },
};

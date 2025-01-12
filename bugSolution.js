```javascript
import * as React from 'react';
import { Camera, BarCodeScanner } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = debounce((scannedData) => {
    setScanned(true);
    setBarcodeData(scannedData);
  }, 1000);

  if (hasPermission === null) {
    return <View />; //Loading...
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} onBarCodeScanned={handleBarCodeScanned}>
        <View style={styles.overlay}/>
      </Camera>
      {scanned && <Text>Scanned: {barcodeData?.data}</Text>}
    </View>
  );
}
```
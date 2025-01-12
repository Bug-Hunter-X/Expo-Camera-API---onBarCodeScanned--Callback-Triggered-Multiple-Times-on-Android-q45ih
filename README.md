# Expo Camera onBarCodeScanned Multiple Trigger Issue on Android

This repository demonstrates a bug in the Expo Camera API's `onBarCodeScanned` function on Android devices. The callback function is triggered multiple times for a single barcode scan, causing unexpected behavior.

## Bug Description

When using the Expo Camera API with a custom `onBarCodeScanned` function, the function is called multiple times for a single barcode, leading to unexpected behavior. The frequency of duplicate calls varies, sometimes happening repeatedly, sometimes only a few times. This issue has been observed only on Android devices.

## Reproduction

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Scan a barcode. Observe that the `onBarCodeScanned` callback is triggered multiple times.

## Solution

The proposed solution involves debouncing the `onBarCodeScanned` callback to prevent duplicate calls. This is implemented using the `lodash` library's debounce function.

## Note

This issue might be related to the underlying barcode scanning library used by Expo Camera. A more robust solution might involve using a different barcode scanning library or reporting the issue to the Expo team.
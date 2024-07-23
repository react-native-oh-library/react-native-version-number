/* @flow */

import { NativeModules,TurboModuleRegistry } from 'react-native';

const { RNVersionNumber } = NativeModules;
const getVersion = TurboModuleRegistry.get("VersionNumberNativeModule");
type VersionObject = {
  appVersion: ?string,
  buildVersion: ?string,
  bundleIdentifier: ?string
};

const VersionNumber: VersionObject = {
  appVersion: RNVersionNumber && RNVersionNumber.appVersion,
  buildVersion: RNVersionNumber && RNVersionNumber.buildVersion,
  bundleIdentifier: RNVersionNumber && RNVersionNumber.bundleIdentifier
};

if (Platform.OS == "harmony") {
  VersionNumber.appVersion = getVersion.getAppVersion
  VersionNumber.buildVersion = getVersion.getBuildVersion
  VersionNumber.bundleIdentifier = getVersion.getBundleIdentifier
}

export default VersionNumber;
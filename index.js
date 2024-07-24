/* @flow */

import { TurboModuleRegistry } from 'react-native';

const getData = TurboModuleRegistry.get("VersionNumberNativeModule");

const VersionNumber = {
  appVersion:  getData.getAppVersion(),
  buildVersion:  getData.getBuildVersion(),
  bundleIdentifier: getData.getBundleIdentifier()
};

export default VersionNumber;
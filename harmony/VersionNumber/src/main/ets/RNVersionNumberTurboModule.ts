import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import window from '@ohos.window';
import bundleManager from '@ohos.bundle.bundleManager';
import { BusinessError } from '@ohos.base';

export class RNVersionNumberTurboModule extends TurboModule implements TM.VersionNumberNativeModule.Spec {
  windowClass:window.Window| undefined = undefined;
  isKeepScreenOn: boolean = true;
  unisKeepScreenOn: boolean = false;

  constructor(ctx) {
    super(ctx);
  }

  getAppVersion(): string {
    let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;
    try {
      let data = bundleManager.getBundleInfoForSelfSync(bundleFlags);
      return JSON.stringify(data.versionName); // versionCode
    } catch (err) {
      let message = (err as BusinessError).message;
      return  message
    }
  }
  getBuildVersion(): string {
    let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;
    try {
      let data = bundleManager.getBundleInfoForSelfSync(bundleFlags);
      return JSON.stringify(data.versionCode); // versionCode
    } catch (err) {
      let message = (err as BusinessError).message;
      return  message
    }
  }
  getBundleIdentifier(): string {
    let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION;
    try {
      let data = bundleManager.getBundleInfoForSelfSync(bundleFlags);
      return JSON.stringify(data.appInfo.process); // versionCode
    } catch (err) {
      let message = (err as BusinessError).message;
      return  message
    }
  }
}







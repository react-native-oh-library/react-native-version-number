/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@ohos.base';
import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts";
import Logger from './Logger';

const TAG = 'RNVersionNumber';

interface VersionInfo {
  appVersion: string,
  buildVersion: string,
  bundleIdentifier: string
}

export class RNVersionNumberTurboModule extends TurboModule implements TM.RNVersionNumber.Spec {
  constructor(ctx) {
    super(ctx);
  }

  getConstants(): Object {
    let RNVersionNumber: VersionInfo = {
      appVersion: '',
      buildVersion: '',
      bundleIdentifier: ''
    };
    try {
      const bundleInfos = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT);
      RNVersionNumber.bundleIdentifier = bundleInfos.name;
      RNVersionNumber.appVersion = bundleInfos.versionName;
      RNVersionNumber.buildVersion = String(bundleInfos.versionCode);
      Logger.info(TAG, JSON.stringify(bundleInfos));
    } catch (err) {
      const message = (err as BusinessError).message;
      Logger.error(TAG, JSON.stringify(message))
    }
    return { RNVersionNumber }
  }
}
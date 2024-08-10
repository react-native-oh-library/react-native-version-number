/**
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
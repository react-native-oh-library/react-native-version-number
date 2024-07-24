import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts'
import { RNVersionNumberTurboModule } from './RNVersionNumberTurboModule';

class RNVersionNumberTurboModuleFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (this.hasTurboModule(name)) {
      return new RNVersionNumberTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.VersionNumberNativeModule.NAME;
  }
}

export class RNVersionNumberPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new RNVersionNumberTurboModuleFactory(ctx);
  }
}

import { TurboModuleRegistry } from 'react-native';
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';

export interface Spec extends TurboModule {
  getConstants(): {};
}

export default TurboModuleRegistry.get<Spec>('RNVersionNumber')!;
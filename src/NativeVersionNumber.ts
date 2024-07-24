import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

interface IPath {
  version: string;
}
export interface Spec extends TurboModule {
  appVersion: (path: IPath) => string;
  buildVersion: (path: IPath) => string;
  bundleIdentifier: (path: IPath) => string;
}

export default TurboModuleRegistry.get<Spec>(
  "VersionNumberNativeModule",
) as Spec | null;

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

// An interface specification for the native module: RTNCalculator
export interface Spec extends TurboModule {
    add(a: number, b: number): Promise<number>;
}

// Load the Turbo Native module corresponding to the given name if it exists.
export default TurboModuleRegistry.getEnforcing<Spec>('RTNCalculator') as Spec | null;
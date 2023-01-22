import { withHook } from "../../Hook";
import UseHook from './UseHook';
import HookView from './HookView';

const Hook = withHook(UseHook, HookView)

export default Hook
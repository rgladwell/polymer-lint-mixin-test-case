import { dedupingMixin } from '../@polymer/polymer/lib/utils/mixin.js'

let internalMixin = (base) => class extends base {
}

export const Mixin = dedupingMixin(internalMixin)

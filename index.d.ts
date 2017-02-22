/*
 *  json-modeler:
 *  Copyright (C) Jesus Jerez <jj@jesusjerez.com>
 *  License MIT
 */

export { };

import {JsonModeler as _JsonModeler} from './JsonModeler';

declare global {
    namespace JsonModeler {
        function JsonField<T>(metadata?: _JsonModeler.IFieldMetadata<T> | string): any;
    }
}

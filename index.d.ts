/*
 *  json-modeler:
 *  Copyright (C) Jesus Jerez <jj@jesusjerez.com>
 *  License MIT
 */

export { };

import {IFieldMetadata} from './JsonModeler';

declare global {
    namespace JsonModeler {
        function JsonField<T>(metadata?: IFieldMetadata<T> | string): any;
    }
}

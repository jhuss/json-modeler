/*
 *  json-modeler:
 *  Copyright (C) Jesus Jerez <jj@jesusjerez.com>
 *  License MIT
 */

import 'reflect-metadata';

export namespace JsonModeler {
    "use strict";

    const DecoratorKey = 'JsonField';

    export interface IFieldMetadata<T> {
        name?: string,
        classModel?: {new(): T}
    }

    function isFieldMetadata<T>(metadata: IFieldMetadata<T> | string): metadata is IFieldMetadata<T> {
        return (<IFieldMetadata<T>>metadata).name !== undefined;
    }

    export function JsonField<T>(metadata?: IFieldMetadata<T> | string): any {
        if (metadata !== undefined && isFieldMetadata(metadata)) {
            let metadataObj = <IFieldMetadata<T>>metadata;

            return Reflect.metadata(DecoratorKey, {
                name: metadataObj ? metadataObj.name : undefined,
                classModel: metadataObj ? metadataObj.classModel : undefined
            });
        } else {
            return Reflect.metadata(DecoratorKey, {
                name: metadata,
                classModel: undefined
            });
        }
    }

    export function getFieldMeta(target: any, property: string) {
        return Reflect.getMetadata(DecoratorKey, target, property);
    }
}

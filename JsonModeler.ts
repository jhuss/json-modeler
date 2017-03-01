/*
 *  json-modeler:
 *  Copyright (C) Jesus Jerez <jj@jesusjerez.com>
 *  License MIT
 */

import 'reflect-metadata';

const DecoratorKey = 'JsonField';

export interface IFieldMetadata<T> {
    name?: string,
    dataType?: {new(): T}
}

export interface IApplyOptions<T> {
    model: {new(): T},
    data: any
}

export namespace JsonModeler {
    "use strict";

    function isFieldMetadata<T>(metadata: IFieldMetadata<T> | string): metadata is IFieldMetadata<T> {
        return (<IFieldMetadata<T>>metadata).name !== undefined;
    }

    export function extractMeta(target: any, property: string) {
        return Reflect.getMetadata(DecoratorKey, target, property);
    }

    export function JsonField<T>(metadata?: IFieldMetadata<T> | string): any {
        let metadataR;

        if (metadata !== undefined && isFieldMetadata(metadata)) {
            let metadataObj = <IFieldMetadata<T>>metadata;

            metadataR = Reflect.metadata(DecoratorKey, {
                name: metadataObj ? metadataObj.name : undefined,
                dataType: metadataObj ? metadataObj.dataType : undefined
            });
        } else {
            metadataR = Reflect.metadata(DecoratorKey, {
                name: metadata,
                dataType: undefined
            });
        }

        return metadataR;
    }

    export function applyModel<T>(options: IApplyOptions<T>): any {
        if (options !== undefined) {
            let modelInstance;
            modelInstance = new options.model();
            return modelInstance;
        }

        throw new Error('"applyModel" options can not be empty');
    }
}

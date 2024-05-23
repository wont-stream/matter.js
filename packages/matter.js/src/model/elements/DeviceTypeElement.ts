/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mei } from "../../datatype/ManufacturerExtensibleIdentifier.js";
import { ElementTag } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { FieldElement } from "./FieldElement.js";
import { RequirementElement } from "./RequirementElement.js";

/**
 * Details on a specific device as defined in the Matter specification.
 *
 * TODO - extract/merge DeviceTypes.ts?
 */
export interface DeviceTypeElement extends BaseElement {
    id?: Mei;
    tag: `${DeviceTypeElement.Tag}`;
    classification: `${DeviceTypeElement.Classification}`;
    category?: string;
    children?: (RequirementElement | FieldElement)[];
}

export function DeviceTypeElement(definition: DeviceTypeElement.Properties) {
    return BaseElement(DeviceTypeElement.Tag, definition) as DeviceTypeElement;
}

export namespace DeviceTypeElement {
    export type Tag = ElementTag.DeviceType;
    export const Tag = ElementTag.DeviceType;
    export type Properties = BaseElement.Properties<DeviceTypeElement>;

    export enum Classification {
        Base = "base",
        Node = "node",
        Utility = "utility",
        Simple = "simple",
        Dynamic = "dynamic",
    }
}

/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const CookSurfaceDt = DeviceType({
    name: "CookSurface", id: 0x77, classification: "simple",
    details: "A Cook Surface device type represents a heating object on a cooktop or other similar device. It " +
        "shall only be used when composed as part of another device type.",
    xref: { document: "device", section: "13.7" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 119, revision: 1 } ], element: "attribute" })]
        }),
        Requirement({
            name: "TemperatureControl", id: 0x56, conformance: "O.a+", element: "serverCluster",
            xref: { document: "device", section: "13.7.4" }
        }),
        Requirement({
            name: "TemperatureMeasurement", id: 0x402, conformance: "O.a+", element: "serverCluster",
            xref: { document: "device", section: "13.7.4" }
        }),
        Requirement({
            name: "OnOff", id: 0x6, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "13.7.4" },
            children: [Requirement({ name: "OFFONLY", conformance: "M", element: "feature" })]
        })
    ]
});

Matter.children.push(CookSurfaceDt);

/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    FlowMeasurementServer as BaseFlowMeasurementServer
} from "../../../behavior/definitions/flow-measurement/FlowMeasurementServer.js";
import { IdentifyServer as BaseIdentifyServer } from "../../../behavior/definitions/identify/IdentifyServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * A Flow Sensor device measures and reports the flow rate of a fluid.
 *
 * @see {@link MatterSpecification.v13.Device} § 7.6
 */
export interface FlowSensorDevice extends Identity<typeof FlowSensorDeviceDefinition> {}

export namespace FlowSensorRequirements {
    /**
     * The FlowMeasurement cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link FlowMeasurementServer} for convenience.
     */
    export const FlowMeasurementServer = BaseFlowMeasurementServer;

    /**
     * The Identify cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link IdentifyServer} for convenience.
     */
    export const IdentifyServer = BaseIdentifyServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = { mandatory: { FlowMeasurement: FlowMeasurementServer, Identify: IdentifyServer } };
}

export const FlowSensorDeviceDefinition = MutableEndpoint({
    name: "FlowSensor",
    deviceType: 0x306,
    deviceRevision: 2,
    requirements: FlowSensorRequirements,
    behaviors: SupportedBehaviors(
        FlowSensorRequirements.server.mandatory.FlowMeasurement,
        FlowSensorRequirements.server.mandatory.Identify
    )
});

export const FlowSensorDevice: FlowSensorDevice = FlowSensorDeviceDefinition;

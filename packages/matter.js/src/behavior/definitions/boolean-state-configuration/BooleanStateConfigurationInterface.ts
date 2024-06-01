/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { BooleanStateConfiguration } from "../../../cluster/definitions/BooleanStateConfigurationCluster.js";

export namespace BooleanStateConfigurationInterface {
    export interface VisualOrAudible {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 1.8.7.2
         */
        enableDisableAlarm(request: BooleanStateConfiguration.EnableDisableAlarmRequest): MaybePromise;
    }

    export interface AlarmSuppress {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 1.8.7.1
         */
        suppressAlarm(request: BooleanStateConfiguration.SuppressAlarmRequest): MaybePromise;
    }
}

export type BooleanStateConfigurationInterface = {
    components: [
        { flags: { visual: true }, methods: BooleanStateConfigurationInterface.VisualOrAudible },
        { flags: { audible: true }, methods: BooleanStateConfigurationInterface.VisualOrAudible },
        { flags: { alarmSuppress: true }, methods: BooleanStateConfigurationInterface.AlarmSuppress }
    ]
};

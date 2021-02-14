import { BaseHUDPart } from "../base_hud_part";
import { makeDiv } from "../../../core/utils";
import { globalConfig } from "../../../core/config";

export class HUDDisplaySizer extends BaseHUDPart {
    createElements(parent) {
        this.element = makeDiv(parent, "ingame_DisplaySizer");
    }

    initialize() {
        const pxPerMm = parseFloat(getComputedStyle(this.element).height) / 10.0;
        globalConfig.touchMoveHysteresisRadiusPx = globalConfig.touchMoveHysteresisRadiusMm * pxPerMm;
    }
}

import { makeDiv } from "../../../core/utils";
import { T } from "../../../translations";
import { BaseHUDPart } from "../base_hud_part";

/**
 * @typedef {{
 *   condition: () => boolean,
 *   icon: string,
 *   label: string,
 *   cachedElement?: HTMLElement,
 *   cachedVisibility?: boolean
 * }} TouchTool
 */

export class HUDTouchTools extends BaseHUDPart {
    /**
     * Initializes the element
     * @param {HTMLElement} parent
     */
    createElements(parent) {
        /** @type {Array<TouchTool>} */
        this.tools = [
            {
                condition: () => true,
                icon: "delete",
                label: "Delete building",
            },
        ];

        this.element = makeDiv(parent, "ingame_HUD_TouchTools", []);

        for (let i = 0; i < this.tools.length; ++i) {
            let html = "";
            const handle = this.tools[i];

            html += `<code class="touchtool icon-${handle.icon}"></code>`;
            html += `<label>${handle.label}</label>`;

            handle.cachedElement = makeDiv(this.element, null, ["tool"], html);
            handle.cachedVisibility = false;
        }
    }

    initialize() {}

    update() {}
}

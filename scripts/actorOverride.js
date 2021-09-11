export function addExtraTrackersDnD5(html, actor) {
  $(`
    <div class="counter flexrow rads">
        <h4>${game.i18n.localize("EST.Rads")}</h4>
        <div class="counter-value">
            <input name="data.attributes.rads" type="number" placeholder="0"
                   value="${actor.data.data.attributes.rads}" />
        </div>
    </div>
    <div class="counter flexrow stress">
        <h4>${game.i18n.localize("EST.Stress")}</h4>
        <div class="counter-value">
            <input name="data.attributes.stress" type="number" placeholder="0"
                   value="${actor.data.data.attributes.stress}" />
        </div>
    </div>         
    <div class="counter flexrow agitation">
        <h4>${game.i18n.localize("EST.Agitation")}</h4>
        <div class="counter-value">
            <input name="data.attributes.agitation" type="number" placeholder="0"
                   value="${actor.data.data.attributes.agitation}" />
        </div>
    </div>
  `).insertBefore(html.find(".counters .counter.flexrow.exhaustion"));
}

export function addExtraTrackersTidy(html, actor) {
/*  $(`
    <div class="counter flexrow agitation">
        <h4>${game.i18n.localize("EST.Agitation")}</h4>
        <div class="counter-value">
            <input name="data.attributes.agitation" type="number" placeholder="0"
                   value="${actor.data.data.attributes.agitation}" />
        </div>
        <span class="control-label">Agitation</span>
    </div>
  `).insertBefore(html.find(".counters .counter.flexrow.exhaustion"));
*/}

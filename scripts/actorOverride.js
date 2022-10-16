export function addExtraTrackersDnD5(html, actor) {
  $(`
    <div class="counter flexrow fever">
        <h4>${game.i18n.localize("EST.Fever")}</h4>
        <div class="counter-value">
            <input name="system.attributes.fever" type="number" placeholder="0"
                   value="${actor.system.attributes.fever}" />
        </div>
    </div>
    <div class="counter flexrow stress">
        <h4>${game.i18n.localize("EST.Stress")}</h4>
        <div class="counter-value">
            <input name="system.attributes.stress" type="number" placeholder="0"
                   value="${actor.system.attributes.stress}" />
        </div>
    </div>         
    <div class="counter flexrow agitation">
        <h4>${game.i18n.localize("EST.Agitation")}</h4>
        <div class="counter-value">
            <input name="system.attributes.agitation" type="number" placeholder="0"
                   value="${actor.system.attributes.agitation}" />
        </div>
    </div>
  `).insertBefore(html.find(".counters .counter.flexrow.exhaustion"));
}

export function addExtraTrackersTidy(html, actor) {
  $(`
    <div class="counter flexrow fever" style="font-size: small;">
        <h3>${game.i18n.localize("EST.Fever")}</h3>
        <div>
            <input name="system.attributes.fever" type="number" placeholder="0"
                   value="${actor.system.attributes.fever}" />
        </div>
    </div>
    <div class="counter flexrow stress" style="font-size: small;">
        <h3>${game.i18n.localize("EST.Stress")}</h3>
        <div class="counter-value">
            <input name="system.attributes.stress" type="number" placeholder="0"
                   value="${actor.system.attributes.stress}" />
        </div>
    </div>         
    <div class="counter flexrow agitation" style="font-size: small;">
        <h3>${game.i18n.localize("EST.Agitation")}</h3>
        <div class="counter-value">
            <input name="system.attributes.agitation" type="number" placeholder="0"
                   value="${actor.system.attributes.agitation}" />
        </div>
    </div>
  `).insertAfter(html.find(".sheet-body .tab.attributes .center-pane .resources"));
}

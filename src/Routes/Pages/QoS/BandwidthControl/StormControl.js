import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function StormControl() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t("StormControlConfig")}
          data={{
            names: [
              "Port",
              "Broadcast Rate(Kbps)",
              "Multicast Rate(Kbps)",
              "UL-Frame Rate(bps)",
              "LAG",
            ],
            fields: [
              { type: "disable" },
              { type: "select", options: ["128K"] },
              { type: "select", options: ["128K"] },
              { type: "select", options: ["128K"] },
              { type: "disable" },
            ],
            data: [
              ["1", undefined, undefined, undefined, "LAG1"],
              ["2", undefined, undefined, undefined, "LAG1"],
              ["3", undefined, undefined, undefined, undefined],
              ["4", undefined, undefined, undefined, undefined],
              ["5", undefined, undefined, undefined, undefined],
              ["5", undefined, undefined, undefined, undefined],
              ["7", undefined, undefined, undefined, undefined],
              ["8", undefined, undefined, undefined, undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Apply")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          For one port, you cannot enable the Storm Control and the Ingress rate
          control at the same time.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

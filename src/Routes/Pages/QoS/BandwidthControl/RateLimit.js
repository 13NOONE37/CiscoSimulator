import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function RateLimit() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t("RateLimitConfig")}
          data={{
            names: ["Port", "Ingress Rate(Kbps)", "Egress Rate(Kbps)", "LAG"],
            fields: [
              { type: "disable" },
              { type: "select", options: ["128"] },
              { type: "select", options: ["1024"] },
              { type: "disable" },
            ],
            data: [
              ["1", undefined, undefined, "LAG1"],
              ["2", undefined, undefined, "LAG1"],
              ["3", undefined, undefined, undefined],
              ["4", undefined, undefined, undefined],
              ["5", undefined, undefined, undefined],
              ["5", undefined, undefined, undefined],
              ["7", undefined, undefined, undefined],
              ["8", undefined, undefined, undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Apply")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          1. For one port, you cannot enable the Storm Control and the Ingress
          rate control at the same time.
          <br />
          2. If you select "Manual" to set Ingress/Egress rate, the system will
          automatically select integral multiple of 64 Kbps that closest to the
          rate you entered as the real Ingress/Egress rate.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

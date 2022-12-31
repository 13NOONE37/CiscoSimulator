import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function VoicePortConfig() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t("PortConfig")}
          data={{
            names: [
              "Port",
              "Port Mode",
              "Security Mode",
              "Member State",
              "LAG",
            ],
            fields: [
              { type: "disable" },
              { type: "select", options: ["Auto"] },
              { type: "select", options: ["Enable", "Disable"] },
              { type: "disable" },

              { type: "disable" },
            ],
            data: [
              ["1", "Auto", "Disable", "Inactive", "LAG1"],
              ["2", "Auto", "Disable", "Inactive", "LAG1"],
              ["3", "Auto", "Disable", "Inactive", undefined],
              ["4", "Auto", "Disable", "Inactive", undefined],
              ["5", "Auto", "Disable", "Inactive", undefined],
              ["6", "Auto", "Disable", "Inactive", undefined],
              ["7", "Auto", "Disable", "Inactive", undefined],
              ["8", "Auto", "Disable", "Inactive", undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Apply")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

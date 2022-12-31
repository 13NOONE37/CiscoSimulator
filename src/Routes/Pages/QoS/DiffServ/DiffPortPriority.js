import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function DiffPortPriority() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.EditableTable
          title={t("PortPriorityConfig")}
          data={{
            names: ["Port", "Priority", "LAG"],
            fields: [
              { type: "disable" },
              { type: "select", options: ["TC 0"] },
              { type: "disable" },
            ],
            data: [
              ["1", "TC 0", "LAG1"],
              ["2", "TC 0", "LAG1"],
              ["3", "TC 0", undefined],
              ["4", "TC 0", undefined],
              ["5", "TC 0", undefined],
              ["6", "TC 0", undefined],
              ["7", "TC 0", undefined],
              ["8", "TC 0", undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Apply")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          Among the Queue TC-id TC0, TC1..TC3, the bigger value, the higher
          priority.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

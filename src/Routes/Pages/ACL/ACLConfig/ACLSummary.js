import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function ACLSummary() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("SearchOptions")}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("SelectACL")}:</span>
            <MultiPage.Select options={[""]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t("Delete")}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t("ACLType")}:</span>
            <span>---</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("RuleTable")}:</span>
            <span>---</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          isPortSelect={false}
          title={t("RuleTable")}
          data={{
            names: ["", "", "", ""],
            fields: [
              { type: "disable" },
              { type: "disable" },
              { type: "disable" },
              { type: "disable" },
            ],
            data: [],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("All")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Delete")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

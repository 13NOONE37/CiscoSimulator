import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function PolicySummary() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("SelectOptions")}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t("Delete")}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t("SelectPolicy")}:</span>
            <MultiPage.Select options={[""]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          isPortSelect={false}
          title={t("ActionTable")}
          data={{
            names: ["Index", "ACL ID"],
            fields: [{ type: "disable" }, { type: "disable" }],
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

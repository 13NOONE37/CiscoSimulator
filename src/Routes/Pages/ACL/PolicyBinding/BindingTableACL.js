import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function BindingTableACL() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("SearchOptions")}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("ShowMode")}:</span>
            <MultiPage.Select options={["Show All"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          isPortSelect={false}
          title={t("PolicyBindTable")}
          data={{
            names: ["Index", "Policy Name", "Interface", "Direction"],
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

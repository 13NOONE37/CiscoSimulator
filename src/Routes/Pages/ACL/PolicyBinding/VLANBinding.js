import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function VLANBinding() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("VLAN-BindConfig")}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Bind")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t("PolicyName")}:</span>
            <MultiPage.Select options={["SelectPolicy"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine
            actionButton={() => (
              <MultiPage.Button>{t("Help")}</MultiPage.Button>
            )}
          >
            <span>{t("VLAN ID")}:</span>
            <MultiPage.Input
              inputProps={{ type: "text" }}
              afterText={`(Format: 1-3,6,8)`}
            />
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

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

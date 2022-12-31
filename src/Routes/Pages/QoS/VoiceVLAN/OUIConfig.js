import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function OUIConfig() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={650}>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("OUI")}:</span>
            <MultiPage.Input
              inputProps={{ type: "text" }}
              afterText={`(Format: 00-00-00-00-00-01)`}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t("Create")}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t("Mask")}:</span>
            <MultiPage.Input
              inputProps={{ type: "text" }}
              afterText={`(Default: FF-FF-FF-00-00-00)`}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Description")}:</span>
            <MultiPage.Input
              inputProps={{ type: "text", maxLength: 16 }}
              afterText={`(16 characters maximum)`}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t("CreateOUI")}
          data={{
            names: ["OUI", "Mask", "Description"],
            fields: [
              { type: "disable" },
              { type: "disable" },
              { type: "disable" },
            ],
            data: [["00-01-e3-00-00-00", "ff-ff-ff-00-00-00", "Siemens Phone"]],
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

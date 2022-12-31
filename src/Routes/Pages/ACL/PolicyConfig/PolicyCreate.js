import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function PolicyCreate() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("CreatePolicy")}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t("Create")}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t("Policy Name")}:</span>
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Help")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span></span>
            <span></span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

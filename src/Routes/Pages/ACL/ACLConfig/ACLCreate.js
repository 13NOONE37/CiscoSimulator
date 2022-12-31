import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function ACLCreate() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("CreateACL")}</MultiPage.Title>
        <MultiPage.ElementsLine actionButton={() => <span>0-99 MAC ACL</span>}>
          <MultiPage.SubElementsLine>
            <span>{t("ACL ID")}:</span>
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <span>100-199 Standard-IP ACL</span>}
        >
          <MultiPage.SubElementsLine>
            <span></span>
            <span></span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <span>200-299 Extend-IP ACL</span>}
        >
          <MultiPage.SubElementsLine>
            <span></span>
            <span></span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Rule Order")}:</span>
            <MultiPage.Select options={["User Config"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Create")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function NotificationConfig() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("CommunityConfig")}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Community Name")}:</span>
            <MultiPage.Input
              inputProps={{
                type: "text",
                value: "communityName",
                name: "communityName",
                // onChange: (e) =>
                //   setLocalConfig({ ['addressMode']: e.target.value }),
              }}
              afterText={t("(16 characters maximum)")}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => (
            <MultiPage.Button>{t("Create")}</MultiPage.Button>
          )}
        >
          <MultiPage.SubElementsLine>
            <span>{t("Access")}:</span>
            <MultiPage.Select options={["read-only"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Clear")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t("MIB View")}:</span>
            <MultiPage.Select options={["viewDefault"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          title={t("CommunityTable")}
          navItems={[
            "Select",
            "Community Name",
            "Access",
            "MIB View",
            "Operation",
          ]}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("All")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Delete")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          The default MIB view of community is viewDefault
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";
export default function CosMapping() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section width={750}>
        <MultiPage.Title>802.1P/CoS{t("mapping")}</MultiPage.Title>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Apply")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine
            actionButton={() => (
              <MultiPage.Button>{t("Apply")}</MultiPage.Button>
            )}
          >
            <span>802.1P {t("Priority")}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: "radio",
                }}
                afterText={t("Enable")}
              />
              <MultiPage.Input
                inputProps={{
                  type: "radio",
                }}
                afterText={t("Disable")}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>
          {t("Priority and CoS-mapping Config")}
        </MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine
            actionButton={() => (
              <MultiPage.Button>{t("Apply")}</MultiPage.Button>
            )}
          >
            <span>802.1P {t("Priority")}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{
                  type: "radio",
                }}
                afterText={t("Enable")}
              />
              <MultiPage.Input
                inputProps={{
                  type: "radio",
                }}
                afterText={t("Disable")}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.DefaultTable
          navItems={[
            "Tag-id/CoS-id",
            "Queue TC-id",
            "Tag-id/CoS-id",
            "Queue TC-id",
          ]}
          data={[
            [0, "TC1", 1, "TC0"],
            [2, "TC0", 3, "TC1"],
            [4, "TC2", 5, "TC2"],
            [6, "TC3", 7, "TC3"],
          ]}
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

import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function VoiceGlobalConfig() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("GlobalConfig")}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Voice VLAN")}:</span>
            <MultiPage.SubElementsLine>
              <MultiPage.Input
                inputProps={{ type: "radio" }}
                afterText={t("Enable")}
              />
              <MultiPage.Input
                inputProps={{ type: "radio" }}
                afterText={t("Enable")}
              />
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Apply")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t("VLAN ID")}:</span>
            <MultiPage.Input
              inputProps={{ type: "number", min: 2, max: 4094 }}
              afterText={"(4-4094)"}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Help")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine>
            <span>{t("AgingTime")}:</span>
            <MultiPage.Input
              inputProps={{ type: "number", min: 1, max: 43200 }}
              afterText={"min(1-43200, default 1440)"}
            />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Priority")}:</span>
            <MultiPage.Select options={[1, 2, 3, 4, 5, 6]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

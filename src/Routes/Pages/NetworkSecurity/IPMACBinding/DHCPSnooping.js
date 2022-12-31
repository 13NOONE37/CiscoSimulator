import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function DHCPSnooping() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("DHCPSnoopingConfig")}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("DHCPSnooping")}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={150}>
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
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("GlobalFlowControl")}</span>
            <MultiPage.Select options={["Disable", "Enable"]} afterText='pps' />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Apply")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("DeclineThreshold")}</span>
            <MultiPage.Select options={["Disable", "Enable"]} afterText='pps' />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.Title>{t("Option82Config")}</MultiPage.Title>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("Option82Support")}:</span>
            <MultiPage.SubElementsLine FirstColumnWidth={150}>
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
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("ExistedOption82Field")}</span>
            <MultiPage.Select options={["Keep"]} afterText='pps' />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine
          actionButton={() => <MultiPage.Button>{t("Apply")}</MultiPage.Button>}
        >
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("Custumization")}</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <span>{t("Custumization")}</span>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={t("CircuitID")}
            />
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine FirstColumnWidth={150}>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={t("RemoteID")}
            />
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.EditableTable
          title={t("PortConfig")}
          data={{
            names: [
              "Port",
              "Trusted Port",
              "MAC Verify	",
              "Flow Control",
              "Decline Protect",
              "LAG",
            ],
            fields: [
              { type: "disabled" },
              { type: "select", options: ["Disable", "Enable"] },
              { type: "select", options: ["Disable", "Enable"] },
              { type: "select", options: ["Disable", 5, 10, 15, 20, 25, 30] },
              { type: "select", options: ["Disable", "Enable"] },
              { type: "disabled" },
            ],
            data: [[1, "Enable", "Disable", "Disable", "Disable", "LAG1"]],
          }}
        />

        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Refresh")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Bind")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Delete")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note />
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

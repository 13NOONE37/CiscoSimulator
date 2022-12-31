import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function ExtendIpACL() {
  const { t } = useTranslation();
  //!todo  workflow
  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.Title>{t("CreateExtend-IP Rule")}</MultiPage.Title>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("ACL ID")}:</span>
            <MultiPage.Select options={["Extend-IP ACL"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Rule ID")}:</span>
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("Operation")}:</span>
            <MultiPage.Select options={["Permit"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={"S-IP"}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input inputProps={{ type: "text" }} />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>Mask:</span>
                <MultiPage.Input inputProps={{ type: "text" }} />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={"D-IP"}
            />
            <MultiPage.SubElementsLine FirstColumnWidth={200}>
              <MultiPage.Input inputProps={{ type: "text" }} />
              <MultiPage.SubElementsLine FirstColumnWidth={50}>
                <span>Mask:</span>
                <MultiPage.Input inputProps={{ type: "text" }} />
              </MultiPage.SubElementsLine>
            </MultiPage.SubElementsLine>
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <span>{t("IP Protocol")}:</span>
            <MultiPage.Select options={["All"]} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>

        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={"S-Port"}
            />
            <MultiPage.Input inputProps={{ type: "text" }} />
          </MultiPage.SubElementsLine>
        </MultiPage.ElementsLine>
        <MultiPage.ElementsLine>
          <MultiPage.SubElementsLine>
            <MultiPage.Input
              inputProps={{ type: "checkbox" }}
              afterText={"D-Port"}
            />
            <MultiPage.Input inputProps={{ type: "text" }} />
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

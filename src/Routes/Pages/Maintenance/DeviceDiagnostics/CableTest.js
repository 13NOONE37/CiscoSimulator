import React from "react";
import * as MultiPage from "components/General/Page/MultiPage";
import { useTranslation } from "react-i18next";

export default function CableTest() {
  const { t } = useTranslation();

  return (
    <MultiPage.Wizard>
      <MultiPage.Section>
        <MultiPage.EditableTable
          isPortSelect={true}
          isLeftPortSelect={false}
          title={t("CableTest")}
          data={{
            names: ["Pair", "Status", "Length", "Error"],
            fields: ["", "", "", ""],
            data: [
              ["Pair-A", undefined, undefined, undefined],
              ["Pair-B", undefined, undefined, undefined],
              ["Pair-C", undefined, undefined, undefined],
              ["Pair-D", undefined, undefined, undefined],
            ],
          }}
        />
        <MultiPage.ButtonsRow>
          <MultiPage.Button isSpecial>{t("Test")}</MultiPage.Button>
          <MultiPage.Button isSpecial>{t("Help")}</MultiPage.Button>
        </MultiPage.ButtonsRow>
        <MultiPage.Note>
          1. The interval between two cable test for one port must be more than
          3 seconds.
          <br />
          2. The result is more reasonable when the cable pair is in the open
          status.
          <br />
          3. The result is just for you information.
        </MultiPage.Note>
      </MultiPage.Section>
    </MultiPage.Wizard>
  );
}

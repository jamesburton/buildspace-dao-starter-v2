import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// const editionDrop = sdk.getEditionDrop("INSERT_EDITION_DROP_ADDRESS");
const editionDrop = sdk.getEditionDrop("0x91dB40C83de960Beb9593dd79CF2cC083e54FE0E");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fluffy's Test Seal",
        description: "This NFT will give you access to FluffyTestDAO!",
        image: readFileSync("scripts/assets/3654723951_Cartoon_of_an_award__as_a_digital_icon.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
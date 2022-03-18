import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "kxfuhc4b",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk2U0D18jCRJLMkzEiTe1EuIOTZMnN2pn7nniATE6Ae29DN0PMwVRMJwtdc0K3bcFtXnaFBrir81RTbEQUn7aqcGqP6tgbLVoP9u72y9FxqKeNY8MzVdWn3FMc4jTtc2WDGc90L9CnoGJS3e4fyw6tVBB3zkoMz07UA1J4jpEZMU0DKNF4m7",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

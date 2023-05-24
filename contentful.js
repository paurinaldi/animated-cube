import { createClient } from "contentful";
import { createClient as createContentfulManagementClient } from "contentful-management";

const client = createClient({
  space: "zme5f0rr4ve8",
  accessToken: "Z-mofWVdhksmPsV_tRhQbbO0z8ZVv5iVyzdn4os1CsQ",
});

const managementClient = createContentfulManagementClient({
  accessToken: "CFPAT-SDaWn-tphOTLMpmPy9zCJ2YOCub4NDQ2a_cVxp3oUGc",
});

export { client, managementClient };

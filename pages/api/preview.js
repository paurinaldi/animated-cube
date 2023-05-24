import { managementClient } from "../../contentful";

export default async function preview(req, res) {
  const { token, content_type: contentType, entry_id: entryId } = req.query;

  if (!token || !contentType || !entryId) {
    return res.status(401).json({ message: "Invalid preview request" });
  }

  try {
    const space = await managementClient.getSpace();
    const environment = await space.getEnvironment("master");
    const entry = await environment.getEntry(entryId);

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    const previewToken = await entry.getPreviewApiKey();

    if (!previewToken) {
      return res
        .status(401)
        .json({ message: "Preview not available for this entry" });
    }

    const previewUrl = `/api/preview?token=${previewToken.token}&content_type=${contentType}&entry_id=${entryId}`;
    res.setPreviewData({});

    res.redirect(307, previewUrl);
  } catch (error) {
    console.error("Error during preview:", error);
    return res.status(500).json({ message: "Error during preview" });
  }
}

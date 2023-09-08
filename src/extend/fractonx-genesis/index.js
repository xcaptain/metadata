import _ from "lodash";

export const extend = async (_chainId, metadata) => {
  const startTokenId = 1;
  const endTokenId = 1200;

  const imageUrl = `https://static.fracton.cool/xnft/${metadata.tokenId}.png`;
  const mediaUrl = imageUrl;

  const attributes = [];

  return {
    ...metadata,
    attributes,
    imageUrl,
    mediaUrl,
    name: `FractonX Genesis #${metadata.tokenId}`,
    collection: _.toLower(`${metadata.contract}:${startTokenId}:${endTokenId}`),
  };
};

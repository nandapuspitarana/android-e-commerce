import React, { useEffect, useState } from "react";
import { Product } from "./products";

export const stateData = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const baseImageUrl =
    "https://staging.awalmula.co.id/pub/media/catalog/product/cache/40853d702705621becfbf33e07c2c985";

  useEffect(() => {
    fetch(
      "https://staging.awalmula.co.id/rest/default/V1/products?searchCriteria[pageSize]=10"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading === false) {
    return data.items.map((data) => {
      return new Product(
        data.name,
        "Awal Mula",
        baseImageUrl + data.media_gallery_entries[0].file,
        data.price,
        1
      );
    });
  } else {
    return [];
  }
};

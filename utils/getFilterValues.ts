interface Values {
  name: string;
  value: string;
}

export const getFilterValues = (filterValues: any) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
  } = filterValues;

  const values: Values[] = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "areaMax",
      value: areaMax,
    },
    {
      name: "roomsMin",
      value: roomsMin,
    },
    {
      name: "bathsMin",
      value: bathsMin,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
  ];

  return values;
};



export function handleSearch(originalRestroList,inputText) {
    const filteredData = originalRestroList.filter(res =>
      res.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    return filteredData;
  };
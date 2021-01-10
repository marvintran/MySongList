import React, { createContext, useState } from "react";

export const FilterContext = createContext();

// https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context
const genres = {
  ballad: false,
  indie: false,
  rock: false,
  pop: false,
  acoustic: false,
  jazz: false,
  rnb: false,
  soul: false
}

const tags = {
  korean: false,
  japanese: false,
  english: false,
  femaleVocalist: false,
  maleVocalist: false,
  girlGroup: false,
  boyGroup: false,
  ost: false,
  live: false
}

// This context provider is passed to any component requiring the context
export const FilterProvider = ({ children }) => {
  const [filterText, setFilterText] = useState('');
  const [filterGenre, setGenre] = useState(genres);
  const [filterTag, setTag] = useState(tags);

  // Dynamic State, use computed Property
  // https://stackoverflow.com/a/53986441

  // Updating nested state object
  // https://stackoverflow.com/a/43639228

  // https://daveceddia.com/usestate-hook-examples/
  function updateGenre(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    if(value === "R&B")
      toCamelCase = "rnb";

    setGenre({
      ...filterGenre,
      [toCamelCase]: !filterGenre[toCamelCase]
    });
  }

  function updateTag(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    if(value === "OST")
      toCamelCase = "ost";

    setTag({
      ...filterTag,
      [toCamelCase]: !filterTag[toCamelCase]
    });
  }

  function removeGenre(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setGenre({
      ...filterGenre,
      [toCamelCase]: false
    });
  }

  function removeTag(value) {
    let toCamelCase = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setTag({
      ...filterTag,
      [toCamelCase]: false
    });
  }

  function selectedFilters() {
    const genres = Object.keys(filterGenre)
      .filter((genre) => filterGenre[genre] === true)
      .map((genre) => { return genre });

    const tags = Object.keys(filterTag)
      .filter((tag) => filterTag[tag] === true)
      .map((tag) => { return tag });

    return [genres, tags];
  }

  return (
    <FilterContext.Provider
      value={{
        filterText,
        setFilterText,

        filterGenre,
        setGenre,
        filterTag,
        setTag,

        updateGenre,
        updateTag,
        removeGenre,
        removeTag,

        selectedFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
function categoriesWrapper({ config, commons, adapters }) {

  const getCategories = async event => adapters.getCategories({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const getCategoryById = async event => adapters.getCategoryById({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const postCategory = async event => adapters.postCategory({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const putCategory = async event => adapters.putCategory({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  const deleteCategory = async event => adapters.deleteCategory({
    event,
    onSucess: response => ({ response }),
    onError: () => {},
  });

  return {
    getCategories,
    getCategoryById,
    postCategory,
    putCategory,
    deleteCategory,
  };

}

module.exports = categoriesWrapper;

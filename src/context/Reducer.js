import { GET_FOODLIST, SET_LOADING, SET_ERROR } from './Types'
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_FOODLIST:
      const { recipes, search } = action.payload
      return {
        ...state,
        loading: false,
        search,
        foodlist: recipes.map((recipe, index) => {
          const { label, image, calories, dietLabels, ingredientLines, digest } = recipe.recipe
          return {
            id: Date.now() + index,
            label,
            image,
            calories,
            dietLabels,
            ingredientLines,
            digest
          }
        })
      }
    default: return state
  }
}
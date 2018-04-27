export default function articleReducer(state = { all: [] }, action) {
  switch(action.type) {
    case 'ARTICLES': return { ...state, all: action.payload }
    default: return state
  }
}

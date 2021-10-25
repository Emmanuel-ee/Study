const store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(logMiddleware, apiMiddleware)
);

$(loadUI);



# useContext
<h2>const value = useContext(MyContext);</h2>
<p>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.</p>

Don’t forget that the argument to useContext must be the context object itself:

Correct: useContext(MyContext)

# LOG

* **started at 0738 on 20-10-2017**
* set up all files at 0758
* wrote **main** component at 0800
* wrote **Navbar** component at 0805
* **ended at 0807 on 20-10-2017**

* **started at 1404 on 20-10-2017**
* start styling components at 1405
* finished styling components at 1417
* start writing component for TODO at 1418
* finished writing **Todo** component at 1433
* **ended at 1433 on 20-10-2017**

* **started at 1624 on 20-10-2017**
* start writing component for not found at 1627
* finished **Notfound** component at 1633
* **ended at 1634 on 20-10-2017**

* **started at 1754 on 20-10-2017**
* start writing info.json at 1755
* finished info.json at 1813
* passed todo info to **Todo** component as props at 1826
* start refactoring **Todo** component at 1830
* finished refactoring **Todo** component at 1841
* **ended at 1842 on 20-10-2017**

* **started at 1848 on 20-10-2017**
* start writing component for color coding info at 1849
* finished writing **Info** component at 1857
* added link to `/info` inside **Navbar** component at 1903
* added action listeners to **Navbar** component at 1913
* **ended at 1914 on 20-10-2017**

* **started at 0151 on 21-10-2017**
* start writing container for **Main** component at 0152
* finished container for **Main** component at 0156
* start writing container for **Navbar** component at 0203
* finished container for **Navbar** component at 0210
* added functionality to highlight current filter at 0220
* added functionality to filter TODO based on current filter at 0240
* **ended at 0241 on 21-10-2017**

* **started at 1324 on 21-10-2017**
* separated **Navbar** component from **Main** component at 1331
* removed status from time object inside todo object at 1351
* moved todo info into a reducer at 1358
* **ended at 1401 on 21-10-2017**

* **started at 1532 on 21-10-2017**
* start using epic for async TODO retrieval at 1535
* used `redux-observable` to fetch TODO in async method at 1549
* logical error: filtering TODO functionality doesn't work at 1549
* placed missing return statement inside filter function at 1552
* fixed bug
* **ended at 1553 on 21-10-2017**

* **started at 1849 on 21-10-2017**
* start writing code to get TODO info via AJAX requests at 1850
* finished code for AJAX request at 1900
* start writing component for new TODO at 1900
* logic error: navigation via **Navbar** doesn't work due to **Navbar** being a separate component
* set up separate state to maintain current page and previous page info
* alternate method is to place **Navbar** component inside **Main** component
* placed **Navbar** inside **Main** component at 1924
* added filter for expired TODO at 1942
* finished boilerplate for **Add** component at 1946
* added link to **Add** component at 1951
* **ended at 1955 on 21-10-2017**

* **started at 0222 on 22-10-2017**
* start adding end time input in **Add** component at 0224
* finished adding time input fields to **Add** component at 0246
* refactored **Add** component at 0255
* added boilerplate for tag input fields in **Add** component at 0327
* **ended at 0327 on 22-10-2017**

* **started at 1524 on 22-10-2017**
* wrote reducer to manage tagList at 1530
* logic error: **Add** component does not re-render when props is updated at 1534
* **ended at 1605 on 22-10-2017**

* **started at 1920 on 22-10-2017**
* start removing redux from **Add** component to isolate bug at 1920
* removed all redux code from **Add** component at 1924
* component renders as expected
* added basic redux code at 1935
* bug still persists
* inserted missing aaction call. removed bug at 1943
* error: event listeners inside **Add** component works only once at 1944
* **ended at 1946 on 20-10-2017**

* **started at 2031 on 22-10-2017**
* removed `tagInputJSX` from constructor and placed it inside render function at 2032
* bug fixed at 2033
* **ended at 2035 on 22-10-2017**

* **started at 2122 on 22-10-2017**
* logic error: **Add** component does not re-render when props is updated at 2122
* bug fixed by using both reducer and local variable together at 2127
* logic error: empty array is found inside \_tagList array at 2130
* **ended at 2133 on 22-10-2017**

* **started at 1610 on 23-10-2017**
* bug removed. initialize \_tagList directly instead of using push for the first attempt at 1627
* **ended at 1630 on 23-10-2017**

* **started at 1754 on 23-10-2017**
* start to add epic for sending AJAX POST request for sending new TODO at 1755
* finished epic with fake async function at 1809
* start to write code for removing tags at 1810
* added event listeners for tags at 1826
* **ended at 1827 on 23-10-2017**

* **started at 1901 on 23-10-2017**
* start to refactor tagListReducer to allow removing tags at 1902
* added functionality to remove tag at 1915
* logic error: removing one tag removes all following tags
* **ended at 1924 on 23-10-2017**

* **started at 0830 on 24-10-2017**
* instead of using splice, decided to use filter function to remove tag
* bug removed at 0838
* refactored **Navbar** component to work inside **Add** component at 0856
* **ended at 0857 on 24-10-2017**

* **started at 1840 on 24-10-2017**
* logic error: after leaving `/add` page and going back to it again throws
  `Uncaught TypeError: Cannot read property 'filter' of null` or
  `Uncaught TypeError: this._tagList.map is not a function`
* bug partially removed. no error when using **cancel** button at 1918
* error is thrown when using buttons in **Navbar**
* bug removed completely at 1928
* started to modify **Todo** component to allow editing at 1930
* created reducer for selectedTodo at 1945
* created action for updating selectedTodo at 1948
* error thrown: `Uncaught RangeError: Maximum call stack size exceeded` at 1950
* **ended at 1957 on 24-10-2017**

* **started at 2136 on 24-10-2017**
* removing all redux components for selectedTodo at 2136
* finished removing components at 2139
* app works as expected
* decided to remove editing option from app at 2152
* added functionality for deleting TODO at 2202
* starting to add validations to **Add** component at 2208
* finished adding boilerplate for alerts in **Add** component at 2218
* **ended at 2218 on 24-10-2017**

* **started at 1803 on 25-10-2017**
* start writing reducer for form validation at 1806
* finished reducer at 1810
* wrote validations to check for valid form inputs at 1830
* wrote action to update validFormReducer at 1833
* error thrown: `Subscriber.js:242 Uncaught RangeError: Maximum call stack size exceeded`
* error is thrown only when action call is inside rxjs event listener in componentDidMount
* **ended at 1914 on 25-10-2017**

* **started at 2109 on 25-10-2017**
* refactored if else statement in **Add** component at 2125
* starting to write epic to clear tagListModifierReducer at 2126
* removed `Subscriber.js:242 Uncaught RangeError: Maximum call stack size exceeded` error at 2133
* error was removed by clearing tagListModifier after every PUSH and POP
* whenever any other prop was updated the tagList was updated and hence re-rendered
* this led to an infinite loop causing the error to be thrown
* wrote functionality to render appropriate alert at 2144
* start writing epic to clear formValidationReducer after 3 sec at 2144
* finished epic at 2149
* **ended at 2150 on 25-10-2017**

* **started at 0849 on 26-10-2017**
* created stylesheet folder inside public directory at 0853
* created style.css file inside stylesheet folder at 0854
* copied css for tags from bootstrap at 0857
* finished adding changes to styles at 1014
* logic error: **Add** component throws error if navigated to it after few clicks on other buttons in navbar
* **ended at 1015 on 26-10-2017**

* **started at 0929 on 27-10-2017**
* removed bug by using resetting tag instead of refreshing tag at 0939
* started writing functionality to extend/compress TODO at 0942
* removed extend button from **Todo** component at 0942
* added boilerplate for toggle button at 1008
* added event listeners for toggle button at 1014
* **ended at 1015 on 27-10-2017**

* **started at 1827 on 27-10-2017**
* refactored deleteSelectedTodoEpic and newTodoEpic to modify todoReducer only via updateTodoEpic at 1842
* added reducer for holding active TODO id at 1850
* wrote action to update activeTodoReducer at 1900
* **ended at 1912 on 27-10-2017**

* **started at 1947 on 27-10-2017**
* refactored toggle TODO button listener to listen to TODO according to todoFilter at 1951
* added functionality to minimize todo at 2001
* **ended at 2001 on 27-10-2017**

* **started at 1405 on 28-10-2017**
* start working on server side code at 1405
* added route for `api/todo` at 1410
* **ended at 1410 on 28-10-2017**

* **started at 1454 on 28-10-2017**
* start refactoring `api/todo` route into a middleware at 1455
* refactored route into middleware at 1458
* start writing navbar for logout option at 1501
* finished navbar with logout option at 1539
* clicking logout button sends a GET request to Server
* start writing `/logout` route at 1540
* finished `/logout` route at 1543
* added logout functionality at 1544
* logout works by clearing isLoggedIn and user session variables
* added loginCheck for `/api/todo` route at 1550
* **ended at 1554 on 28-10-2017**

* **started at 1855 on 28-10-2017**
* set up client code to get todo from server at 1903
* start writing code to add todo at 1903
* wrote `/api/addTodo` route
* wrote function to handle incoming POST request at `/api/addTodo` route at 2000
* **ended at 2004 on 28-10-2017**

* **started at 1720 on 29-10-2017**
* start writing code for `api/deleteTodo` at 1722
* finished `api/deleteTodo` route at 1729
* start writing client code for deleting todo at 1729
* finished client code for deleting todo at 1733
* added login validation for `/api/deleteTodo` at 1735
* refactored `/api/deleteTodo` route into a middleware at 1738
* 

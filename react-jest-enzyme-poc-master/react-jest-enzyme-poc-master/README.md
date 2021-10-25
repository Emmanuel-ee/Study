<h1>UNIT TEST REACT APPLICATIONS WITH JEST AND ENZYME</h1>

<h3>Set up a React application</h3>

Before we can write any tests, we need to create an application we can test. 

npm install -g create-react-app

create-react-app REACT_JEST_ENGYME_POC

<h3>Jest</h3>

1) Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications.

2) Jest acts as a test runner, assertion library, and mocking library.

3) Jest also provides Snapshot testing, the ability to create a rendered ‘snapshot’ of a component and compare it to a previously saved ‘snapshot’. The test will fail if the two do not match. Snapshots will be saved for you beside the test file that created them in an auto-generate __snapshots__ folder.

<h3>Enzyme</h3>
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

<h3>Jest and Enzyme</h3>
1) Both Jest and Enzyme are specifically designed to test React applications, Jest can be used with any other Javascript app but Enzyme only works with React.

2) Jest can be used without Enzyme to render components and test with snapshots, Enzyme simply adds additional functionality.

3) Enzyme can be used without Jest, however Enzyme must be paired with another test runner if Jest is not used.

<h3>Setup</h3>

Install Jest:
npm install --save-dev jest babel-jest

Install Enzyme:
npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json

Inside package.json:
"jest": {
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}

<h3>Creating a test file:</h3>
1) Files with  .js suffix in __tests__ folders.

2) Files with .test.js suffix.

3) Files with .spec.js suffix.

<h3>Mount, Shallow, Render</h3>

import { mount, shallow, render } from ‘enzyme';


<h3>Mounting</h3>
1) Full DOM rendering including child components

2) Ideal for use cases where you have components that may interact with DOM API, or use React lifecycle methods in order to fully test the component

3) As it actually mounts the component in the DOM .unmount() should be called after each tests to stop tests affecting each other

4) Allows access to both props directly passed into the root component (including default props) and props passed into child components

<h3>Shallow</h3>
1) Renders only the single component, not including its children. This is useful to isolate the component for pure unit testing. It protects against changes or bugs in a child component altering the behaviour or output of the component under test

2) As of Enzyme 3 shallow components do have access to lifecycle methods by default

3) Cannot access props passed into the root component (therefore also not default props), but can those passed into child components, and can test the effect of props passed into the root component. This is as with shallow(<MyComponent />), you're testing what MyComponent renders - not the element you passed into shallow

<h3>Render</h3>
1) Renders to static HTML, including children

2) Does not have access to React lifecycle methods

3) Less costly than mount but provides less functionality

<h3>Testing user interaction</h3>

<b>.simulate(event[, mock]) => Self</b>


<h3>Testing React components with snapshots</h3>

Snapshot testing helps you check that the rendered output of a component is correct at all times. When you run a snapshot test, Jest renders the React component being tested and stores the output in a JSON file.

On further test runs, Jest will check that the output of the component has not deviated from what it saved previously. If you change the a component’s output, Jest will notify you and you can either update the snapshot to the latest version or fix the component so that it matches the snapshot again. This method of testing components helps you avoid accidental changes to your components because Jest will always notify you when a difference is detected.


The first time this test is run, there is no snapshot for this component so Jest creates it. You can inspect the contents of the snapshots inside the src/__snapshots__ directory.

<h3>Run Test:</h3>
npm test
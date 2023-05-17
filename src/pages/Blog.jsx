import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='mt-10 text-center '>
                <h1 className=' font-extrabold  text-5xl text-lime-600 drop-shadow-2xl

'> Frequently Asked Questions ?!?</h1>
            </div>

            <div class="grid md:grid-cols-2 md:grid-rows-2 gap-4 grid-cols-1 grid-rows-4 mx-4 mt-10">
                <div class="bg-yellow-400 p-4 drop-shadow-2xl

">
                    <span className='text-xl font-extrabold text-green-700'>What is the differences between uncontrolled and controlled components?
                    </span>
                    <br /><br />
                    <span className='text-teal-900'> Uncontrolled and controlled components are two types of components used in React for managing form inputs. The main difference between the two is how they manage the state of the input data.

                        Uncontrolled components are inputs whose state is managed by the browser. In other words, the input values are not controlled by React. Instead, the browser handles the state of the input, and the React component simply reads the current value when it needs to.

                        Controlled components, on the other hand, are inputs whose state is controlled by React. In this case, the value of the input is stored in the component's state, and any changes to the input are handled by a React event handler. This means that the component has complete control over the state of the input data.

                        The advantage of using controlled components is that the component has complete control over the state of the input data. This makes it easier to validate and manipulate the data before it is sent to the server. Controlled components also make it easier to implement complex form features, such as conditional rendering and input masking.

                        Uncontrolled components, on the other hand, can be more efficient and easier to work with in some cases, especially for simple forms. Since the state is managed by the browser, there is less overhead involved in managing the state of the input data.

                        In summary, the choice between controlled and uncontrolled components depends on the specific requirements of the form and the developer's preferences. Controlled components provide greater control and flexibility, while uncontrolled components are simpler and more efficient in certain cases.
                    </span>
                </div>
                <div class="bg-yellow-400 p-4 drop-shadow-2xl

">
                    <span className='text-xl font-extrabold text-green-700'>How to validate React props using PropTypes?


                    </span>
                    <br /><br />
                    <span className='text-teal-900'> React provides a built-in library called PropTypes for validating the props passed into a component. PropTypes is a typechecking system that allows developers to define the expected type of each prop and ensure that the correct type is passed as a prop to the component.

                        To validate React props using PropTypes, you must first import the PropTypes library from the 'prop-types' package. Once imported, you can define the expected type of each prop using the PropTypes API. PropTypes supports a wide range of data types, including strings, numbers, booleans, arrays, and objects. Additionally, PropTypes can be used to define custom validators for more complex data types.

                        After defining the expected props for a component using PropTypes, you must attach the PropTypes definition to the component by assigning it to the 'propTypes' property. This will ensure that React validates the props passed into the component and throws an error if the wrong type is passed.

                        By validating props using PropTypes, you can catch errors early in the development process and improve the maintainability of your code. PropTypes make it easier for other developers to use and understand the component and prevent potential bugs caused by incorrect or unexpected data being passed in. Overall, PropTypes is a powerful tool for developing high-quality React components that are robust and reliable.
                    </span>
                </div>
                <div class="bg-yellow-400 p-4 drop-shadow-2xl

">
                    <span className='text-xl font-extrabold text-green-700'>What is the difference between nodejs and express js.

                        ?</span>
                    <br /><br />

                    <span className='text-teal-900	'>Node.js and Express.js are two popular technologies used for developing web applications, particularly on the server-side. Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js. The main difference between the two is that Node.js provides a runtime environment for JavaScript code to be executed on a server, while Express.js is a framework that makes it easier to develop web applications using Node.js.

                        Node.js provides a set of APIs for creating and managing server-side applications using JavaScript. It allows developers to use JavaScript code to interact with the server's file system, network, and other system resources. Node.js also has a built-in package manager called npm, which makes it easy to install and manage third-party libraries and modules.

                        Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of high-level APIs and conventions that make it easier to develop web applications using Node.js. Express.js provides a set of middleware functions that can be used to handle various aspects of web application development, such as routing, authentication, and error handling. It also provides a templating engine for generating dynamic HTML content.

                        In summary, while Node.js provides a runtime environment for executing JavaScript code on a server, Express.js is a web application framework that simplifies the development of web applications using Node.js. Node.js provides the underlying functionality for Express.js to build web applications, while Express.js provides a set of high-level APIs and conventions that make it easier to develop web applications quickly and efficiently.</span>

                </div>
                <div class="bg-yellow-400 p-4 drop-shadow-2xl

">
                    <span className='text-xl font-extrabold text-green-700 rounded'>What is a custom hook, and why will you create a custom hook?

                    </span>
                    <br /><br />
                    <span className='text-teal-900'>
                        In React, a custom hook is a function that encapsulates reusable logic and stateful behavior that can be shared across multiple components. Custom hooks allow developers to extract common functionality from components and abstract it into a standalone, reusable function.

                        There are many reasons why a developer might create a custom hook. For example, custom hooks can simplify the logic and state management for complex components, reduce code duplication, and improve code organization and maintainability. Custom hooks can also make it easier to share code between different components and projects.

                        To create a custom hook, the developer simply defines a function that uses other hooks and provides an API for other components to use. The function can return state values, event handlers, and other functions that are needed by the components that use the hook. Custom hooks can also accept parameters, allowing the developer to configure the behavior of the hook based on the specific needs of the component.

                        Custom hooks can be used for a wide range of purposes, such as managing form inputs, handling authentication, fetching data from APIs, and more. By creating custom hooks, developers can build reusable and composable pieces of logic that can be easily shared and integrated into different components and applications.

                        Overall, custom hooks are a powerful tool for simplifying and organizing complex logic in React components. They allow developers to extract and encapsulate common functionality and state management into a standalone function, making code more modular, reusable, and easier to maintain.
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Blog;
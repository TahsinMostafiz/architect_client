import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="bg-gray-50 text-gray-900">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl my-10">Blogs</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              Difference between SQL and NoSQL
            </summary>

            <div className="grid md:grid-cols-2 gap-4">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white text-2xl ">SQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-gray-900 ">
                      RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      These databases have fixed or static or predefined schema
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      These databases are not suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      These databases are best suited for complex queries
                    </td>
                  </tr>

                  <tr>
                    <td className=" text-gray-900 ">Vertically Scalable</td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Follows ACID property
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white text-2xl ">NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-gray-900 ">
                      Non-relational or distributed database system.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      They have dynamic schema
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      These databases are best suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      These databases are not so good for complex queries
                    </td>
                  </tr>

                  <tr>
                    <td className=" text-gray-900 ">Horizontally scalable</td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Follows CAP(consistency, availability, partition
                      tolerance)
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              What is JWT, and how does it work?
            </summary>

            <div className="grid md:grid-cols-2 gap-6 px-5">
              <div>
                <h2 className="text-2xl text-gray-900 font-bold">
                  What is JWT (JSON Web Token)?
                </h2>
                <p className="text-base text-gray-900">
                  JWT, or JSON Web Token, is an open standard used to share
                  information between two parties securely — a client and a
                  server. In most cases, it's an encoded JSON containing a set
                  of claims and a signature. It's usually used in the context of
                  other authentication mechanisms like OAuth, OpenID to share
                  user-related information. It's also a popular way to
                  authenticate/authorize users in a microservice architecture.
                  <br />
                  <br />
                  JWT authentication is a token-based stateless authentication
                  mechanism. It is popularly used as a client-side-based
                  stateless session, this means the server doesn't have to
                  completely rely on a data store (or) database to save session
                  information.
                  <br />
                  <br />
                  JWTs can be encrypted, but they are typically encoded &
                  signed. We will be focusing on Signed JWTs. The purpose of
                  Signed JWT is not to hide the data but to ensure the
                  authenticity of the data. And that is why it's highly
                  recommended to use HTTPS with Signed JWTs.
                </p>
                <br />
                <br />
                <br />
                <br />
                <h2 className="text-2xl text-gray-900 font-bold">
                  Structure of JWT
                </h2>
                <p className="text-base text-gray-900">
                  JWT structure is divided into three parts: header, payload,
                  signature & is separated from each other by dot (.), and will
                  follow the below structure:
                </p>
                <img
                  src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-structure.webp"
                  alt=""
                />
                <h4 className="text-xl text-gray-900 font-bold">Header</h4>
                <p>
                  The header consists of two parts: <br />
                  <br />
                  <br />
                  1. The signing algorithm being used
                  <br />
                  <br />
                  2. The type of token, which is in this case mostly “JWT”
                </p>
                <h4 className="text-xl text-gray-900 font-bold">Payload</h4>
                <p>
                  The payload usually contains the claims (user attributes) and
                  additional data like issuer, expiration time, and audience.
                </p>
                <h4 className="text-xl text-gray-900 font-bold">Signature</h4>
                <p>
                  This is typically a hash of the header and payload sections of
                  the JWT. The algorithm which is used to create the signature
                  is the same algorithm mentioned in the header section of the
                  JWT. Signature is used to validate that the JWT token wasn't
                  modified or changed during transit. It can also be used to
                  validate the sender. The header and Payload section of the JWT
                  is always Base64 encoded.
                </p>
              </div>
              <div>
                <h2 className="text-2xl text-gray-900 font-bold">
                  How does JWT Authentication work? When to use JWT
                  Authentication?
                </h2>
                <p className="text-base text-gray-900">
                  When it comes to API authentication and server-to-server
                  authorization, JSON web token (JWT) is particularly a useful
                  technology. In terms of Single Sign-On (SSO), it means that a
                  service provider can receive trustworthy information from the
                  authentication server. <br />
                  <br />
                  By sharing a secret key with the Identity Provider, the
                  Service Provider can hash a part of a token it receives and
                  compare it to the signature of the token. Now, if that result
                  matches the signature, the SP knows that the information
                  provided has come from the other entity possessing the key.{" "}
                  <br />
                  <br />
                  The following workflow explains the authentication flow:
                </p>
                <img
                  src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-workflow.webp"
                  alt=""
                />
                <p>
                  1. User sign-in using username and password. <br />
                  2. The authentication server verifies the credentials and
                  issues a JWT signed using a private key. <br />
                  3. Moving forward, the client will use the JWT to access
                  protected resources by passing the JWT in the HTTP
                  Authorization header. <br />
                  4. The resource server then verifies the authenticity of the
                  token using the public key.
                  <br />
                  <br />
                  <br />
                  The Identity Provider generates a JWT certifying user
                  identity, and the resource server decodes and verifies the
                  authenticity of the token using the public key. Since the
                  tokens are used for authorization and authentication in future
                  requests and API calls great care must be taken to prevent
                  security issues. These tokens shouldn't be stored in publicly
                  accessible areas like the browser's local storage or cookies.
                  In case there are no other choices, then the payload should be
                  encrypted.
                </p>
              </div>
            </div>
          </details>

          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              Difference between Nodejs and JavaScript:
            </summary>

            <div className="grid md:grid-cols-2 gap-4">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white text-2xl ">
                      Javascript
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-gray-900 ">
                      Javascript is a programming language that is used for
                      writing scripts on the website.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Javascript can only be run in the browsers.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      It is basically used on the client-side.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Javascript is capable enough to add HTML and play with the
                      DOM.
                    </td>
                  </tr>

                  <tr>
                    <td className=" text-gray-900 ">
                      Javascript can run in any browser engine as like JS core
                      in safari and Spidermonkey in Firefox.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Javascript is used in frontend development.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      Some of the javascript frameworks are RamdaJS, TypedJS,
                      etc.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      It is the upgraded version of ECMA script that uses
                      Chrome's V8 engine written in C++.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="bg-gray-900 text-white text-2xl ">NodeJS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" text-gray-900 ">
                      NodeJS is a Javascript runtime environment.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      We can run Javascript outside the browser with the help of
                      NodeJS.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      It is mostly used on the server-side.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Nodejs does not have capability to add HTML tags.
                    </td>
                  </tr>

                  <tr>
                    <td className=" text-gray-900 ">
                      V8 is the Javascript engine inside of node.js that parses
                      and runs Javascript.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Nodejs is used in server-side development.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 ">
                      Some of the Nodejs modules are Lodash, express etc. These
                      modules are to be imported from npm.
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-gray-900 bg-gray-50">
                      Nodejs is written in C, C++ and Javascript.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details className="w-full border rounded-lg" open="">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-orange-600 text-2xl font-semibold">
              How does NodeJS handle multiple requests at the same time?
            </summary>

            <div className="grid grid-cols-1 px-5">
              <div>
                <h2 className="text-2xl text-gray-900 font-bold py-5">
                  Multiple client requests
                </h2>
                <p className="text-base text-gray-900">
                  Given a NodeJS application, since Node is single threaded, say
                  if processing involves a Promise.all that takes 8 seconds,
                  does this mean that the client request that comes after this
                  request would need to wait for eight seconds? No. NodeJS event
                  loop is single threaded. The entire server architecture for
                  NodeJS is not single threaded.
                  <br />
                  <br />
                  <br />
                  Before getting into the Node server architecture, to take a
                  look at typical multithreaded request response model, the web
                  server would have multiple threads and when concurrent
                  requests get to the webserver, the webserver picks threadOne
                  from the threadPool and threadOne processes requestOne and
                  responds to clientOne and when the second request comes in,
                  the web server picks up the second thread from the threadPool
                  and picks up requestTwo and processes it and responds to
                  clientTwo. threadOne is responsible for all kinds of
                  operations that requestOne demanded including doing any
                  blocking IO operations.
                  <br />
                  <br />
                  <br />
                  The fact that the thread needs to wait for blocking IO
                  operations is what makes it inefficient. With this kind of a
                  model, the webserver is only able to serve as much requests as
                  there are threads in the thread pool.
                </p>
                <br />
                <br />
                <br />

                <p className="text-base text-gray-900">
                  NodeJS Web Server maintains a limited Thread Pool to provide
                  services to client requests. Multiple clients make multiple
                  requests to the NodeJS server. NodeJS receives these requests
                  and places them into the EventQueue . NodeJS server has an
                  internal component referred to as the EventLoop which is an
                  infinite loop that receives requests and processes them. This
                  EventLoop is single threaded. In other words, EventLoop is the
                  listener for the EventQueue.
                </p>
                <p className="text-base text-gray-900">
                  So, we have an event queue where the requests are being placed
                  and we have an event loop listening to these requests in the
                  event queue. What happens next?
                </p>
                <br />
                <br />
                <p className="text-base text-gray-900">
                  The listener(the event loop) processes the request and if it
                  is able to process the request without needing any blocking IO
                  operations, then the event loop would itself process the
                  request and sends the response back to the client by itself.
                </p>
                <br />
                <br />
                <p className="text-base text-gray-900">
                  If the current request uses blocking IO operations, the event
                  loop sees whether there are threads available in the thread
                  pool, picks up one thread from the thread pool and assigns the
                  particular request to the picked thread. That thread does the
                  blocking IO operations and sends the response back to the
                  event loop and once the response gets to the event loop, the
                  event loop sends the response back to the client.
                </p>
                <br />
                <br />
                <p className="text-base text-gray-900 pb-5">
                  How is NodeJS better than traditional multithreaded request
                  response model? With traditional multithreaded
                  request/response model, every client gets a different thread
                  where as with NodeJS, the simpler request are all handled
                  directly by the EventLoop. This is an optimization of thread
                  pool resources and there is no overhead of creating the
                  threads for every client request.
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;

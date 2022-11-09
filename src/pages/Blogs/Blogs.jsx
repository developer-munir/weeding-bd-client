import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="p-2">
      <h1 className="text-3xl uppercase my-5 text-center font-bold">Blogs</h1>
      <div className="md:w-1/2 mx-auto p-2 shadow-2xl border rounded-xl">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5 px-3"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content">
            <p>
              The main difference between SQL and NoSQL is that they are known
              as relational and non-relational database structures,
              respectively, that are used in different modes for implementing
              and manipulating data. The data storage and data management
              systems are highly biased by these terms for their structure and
              arrangement, which helps to maintain the data structure as per
              requirements and needs.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5 px-3"
        >
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JWT stands for “ JSON web token ” it is an open standard (RFC
              7519) that defines a compact and self-contained way for securely
              transmitting information between parties as a JSON object. JWT is
              simply a token that is written in JSON format. It is really safe
              to use because it can be signed in using a secret (with the HMAC
              algorithm) or a public/private key pair using RSA or ECDSA.There
              are lots of reasons why you should use jwt but mostly you're going
              to choose it because of its simplicity and secure approach. The
              JWT token is also stateless which is just enough good for a
              restful API.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5 px-3"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              Difference between JavaScript and Node.js JavaScript is a proper
              high-level programming language used to create web scripts whereas
              Node.js is a run time environment built on google’s v8 engine.
              JavaScript is executed in the browser whereas using Node.js gives
              us the ability to execute JavaScript outside the browser.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5 px-3"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              As we are aware, Node.js works asynchronously (non-blocking); let
              us understand the working process: 1. In Node.js, a single thread
              handles the incoming requests. How to Use Node.js 1-6
              <br />
              2. The client sends a request to the server. sends a request
              <br />
              3. The thread then checks if the request requires querying the
              database or any complex operations, the thread does not wait for
              the database to return the value, instead, the thread is ready to
              serve another request.
              <br />
              4. Meanwhile, for the first request which involves interaction
              with the database, the thread places that particular request in
              the Event Queue. <br />
              5. Event Queue operates on a single thread only. <br />
              6. When a request is placed in the Event Queue, it starts
              processing that particular client request. <br /> 7. It then
              checks the thread availability in Internal Thread Pool. Internal
              Thread Pool consists of multiple threads. <br /> 8. A thread is
              then assigned to look after the request, which takes the request
              forward, processes it, prepares the response, and sends it back to
              the Event Loop. <br />
              9. The event loop, in turn, sends the response back to the client.
              <br /> 10. When the next request arrives, it again checks if that
              current request requires to query the database, if not then the
              thread takes the request ahead, processes it, and sends back the
              response to the client. sends a response Node.js is asynchronous
              by default. It operates in a non-blocking way and is event-driven.
              Node.js is used to build highly scalable, data-intensive
              applications. It uses fewer threads so that it can use fewer
              resources. The above scenario explains how Node.js handles
              concurrent client requests and operates on a single thread and
              does not need the creation of multiple threads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

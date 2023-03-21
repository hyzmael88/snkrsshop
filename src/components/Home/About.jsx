import React from "react";

 
function About() {
  return (
    <div className="flex flex-col text-center lg:text-start lg:flex-row mt-10 lg:mt-24 ">
      <div className="w-full lg:w-1/2">
        <h2 className="uppercase text-5xl mb-10 lg:mb-0 lg:text-8xl">About</h2>
      </div>
      <div className="w-full lg:w-1/2 font-medium">
      <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 
  1500s, when an unknown printer took a galley of type and scrambled it to 
  make a type specimen book. It has survived not only five centuries.
</p>
        <br />
        <p>
          But also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        
      </div>
    </div>
  );
}

export default About;


const About = () => {
  return (
    <>
      <style>
        {`
          .about-css {
            height: 100vh;
            width: 100vw;
            background-color: lightpink;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            
          }

          h3 {
            color: white;
            font-size: 28px;
          }
        `}
      </style>

      <div className="about-css">
        <h3>Do you want about us??!!</h3>
      </div>
    </>
  );
};

export default About;

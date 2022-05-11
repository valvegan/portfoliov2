function ScrollComponent(props) {
  return (
    <div className="project-mobile">
      {props.img && (
        <div className="project-mobile-img-wrapper">
          <img
            src={props.img}
            alt="mockup of the mobile view of the current project"
          ></img>
        </div>
      )}
    </div>
  );
}
export default ScrollComponent;

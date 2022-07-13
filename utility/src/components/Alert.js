import React from "react";

export default function Alert(props) {
  return (
    //   props.alert&&<div classNameName="alert alert-warning alert-dismissible fade show" role="alert">
    //    <strong>{props.alert.type}</strong>:{props.alert.msg}
    //     <button
    //       type="button"
    //       classNameName="btn-close"
    //       data-bs-dismiss="alert"
    //       aria-label="Close"
    //     ></button>
    //   </div>
    props.alert?(<h1>Heading</h1>):(<h2>Heading2</h2>)
    // props.alert&&(<h3>Heading3</h3>)
    // !props.alert&&(<h4>Heading3</h4>)




    // props.alert && (
    //   <div
    //     className="alert alert-success d-flex align-items-center"
    //     role="alert"
    //   >
    //     <strong>{props.alert.type}</strong>:{props.alert.msg}
    //     <svg
    //       className="bi flex-shrink-0 me-2"
    //       width="24"
    //       height="24"
    //       role="img"
    //       aria-label="Success:"
    //     ></svg>
    //   </div>
    // )
  );
}

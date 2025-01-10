export default function ButtonComp({text, site}) {
  return (
    /* From Uiverse.io by alexmaracinaru */
    <button className="cta m-auto" onClick={() => window.open(site, "_blank")}>
      <span className="hover-underline-animation">{text} </span>
        <path
          id="Path_10"
          dataname="Path 10"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
        ></path>
    </button>
  );
}
